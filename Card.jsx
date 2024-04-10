import React, { useState } from "react";
import Cardsdata from "./Cardsdata";
import { useDispatch } from "react-redux";
import { add } from "../features/cartSlice.jsx";
import toast from "react-hot-toast";

const Card = () => {
  const dispatch = useDispatch();
  const [card, setCard] = useState(Cardsdata);

  const addtoCart = (e) => {
    dispatch(add(e));
    toast.success("Item added in your Cart");
  };

  return (
    <div className="px-20 pt-5 flex flex-wrap gap-10">
      {card.map((item) => (
        <div className="w-[30%] border-2 px-5 py-3 mx-auto rounded-md">
          <img
            className="w-full h-[20vw] rounded-xl"
            src={item.imgdata}
            alt=""
          />
          <div className="flex justify-between items-center mt-2 text-lg">
            <h1>{item.dish}</h1>
            <h1 className="bg-green-600 text-white px-2 rounded-lg flex gap-1">
              {item.rating}
              <span className="flex items-center">
                <i className="ri-star-fill text-sm"></i>
              </span>
            </h1>
          </div>
          <div className="flex justify-between mt-1 opacity-70">
            <h1>{item.address}</h1>
            <h1>{item.price}</h1>
          </div>
          <hr className="my-1" />
          <div className="flex justify-between mt-2">
            <img className="w-7" src={item.arrimg} />
            <button
              onClick={() => addtoCart(item)}
              className="bg-red-400 rounded-lg px-5 py-1"
            >
              Add to cart
            </button>
            <img className="w-[3vw] h-6" src={item.delimg} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
