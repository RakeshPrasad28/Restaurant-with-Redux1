import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, removeOne, add, decrement } from "../features/cartSlice";

const Cartdetails = () => {
  const [totalPrice, setPrice] = useState(0);
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);
  const removeItem = () => {
    dispatch(remove());
  };
  const removeSingle = (id) => {
    dispatch(removeOne(id));
  };
  const handleIncrement = (e) => {
    dispatch(add(e));
  };
  const handleDecrement = (d) => {
    dispatch(decrement(d));
  };
  const total = () => {
    let totalPrice = 0;
    carts.map((ele) => (totalPrice = ele.price * ele.qnty + totalPrice));
    setPrice(totalPrice);
  };
  useEffect(() => {
    total();
  }, [total]);

  return (
    <div className="w-[75%] mx-auto mt-10 border-2">
      <header className="bg-black text-white flex justify-between items-center px-5 py-5">
        <h1>
          Cart Calculation <span>({carts.length})</span>
        </h1>
        {carts.length > 0 ? (
          <button
            onClick={() => removeItem()}
            className="bg-red-600 px-4 py-2 rounded-md text-lg"
          >
            <i className="ri-delete-bin-6-line mr-2"></i>Empty cart
          </button>
        ) : (
          ""
        )}
      </header>
      {carts.length == 0 ? (
        <div className="p-[8vw] flex flex-col items-center justify-center opacity-50">
          <i className="ri-shopping-cart-2-line text-8xl"></i>
          <h1 className="text-4xl ">Your Cart is Empty</h1>
        </div>
      ) : (
        <main className=" mt-5 px-3">
          <div className="flex justify-between items-center">
            <div className="flex gap-20 font-bold text-lg">
              <h1>Action</h1>
              <h1>Product</h1>
              <h1>Name</h1>
              <h1>Price</h1>
              <h1>Qty</h1>
            </div>
            <h1 className="font-bold text-lg">Total Amount</h1>
          </div>
          <hr />
          {carts.map((data, index) => {
            return (
              <div className="flex justify-between items-center border-b-2">
                <div className="flex justify-between items-center py-3 px-2">
                  <i
                    onClick={() => removeSingle(data.id)}
                    className="ri-delete-bin-6-line bg-red-300 w-6 h-6 text-center cursor-pointer mr-[7vw]"
                  ></i>
                  <img
                    src={data.imgdata}
                    alt="xyz"
                    className="mr-[7.2vw] w-10 h-10"
                  />
                  <h1 className="mr-[5.8vw]">{data.dish}</h1>
                  <h1>{data.price}</h1>
                  <div className="flex justify-center items-center gap-2 ml-10">
                    <button
                      onClick={
                        data.qnty <= 1
                          ? () => removeSingle(data.id)
                          : () => handleDecrement(data)
                      }
                    >
                      <i className="ri-subtract-line bg-gray-300 p-3"></i>
                    </button>
                    <input
                      type="text"
                      value={data.qnty}
                      disabled
                      className="w-20 px-1 py-2 text-center border-2"
                    />
                    <button onClick={() => handleIncrement(data)}>
                      <i className="ri-add-line bg-gray-300 p-3"></i>
                    </button>
                  </div>
                </div>
                <h1>&#8377;{data.qnty * data.price}</h1>
              </div>
            );
          })}
          <hr />
          <div className="flex items-center justify-end gap-[20vw] py-3 font-bold">
            <h1>Items in cart : {carts.length}</h1>
            <h1>Total Price : &#8377; {totalPrice}</h1>
          </div>
        </main>
      )}
    </div>
  );
};

export default Cartdetails;
