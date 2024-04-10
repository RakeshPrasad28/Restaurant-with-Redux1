import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    add(state, action) {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
    },
    remove(state, action) {
      state.carts = [];
    },
    removeOne(state, action) {
      const data = state.carts.filter((ele) => ele.id !== action.payload);
      state.carts = data;
    },
    decrement(state, action) {
      const itemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex_dec >= 1) {
        state.carts[itemIndex_dec].qnty -= 1;
      }
    },
  },
});

export const { add, remove, removeOne, decrement } = cartSlice.actions;
export default cartSlice.reducer;
