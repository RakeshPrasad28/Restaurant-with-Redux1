import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { carts } = useSelector((state) => state.carts);
  return (
    <div className="w-full px-20 py-5 bg-black text-white mb-5 flex justify-between items-center">
      <h1 className="text-4xl font-bold">Zomato</h1>
      <Link to="/cart">
        <i className="ri-shopping-cart-2-line text-4xl relative">
          <span className="bg-red-600 rounded-full px-2 text-sm font-semibold absolute -top-1 -right-4">
            {carts.length}
          </span>
        </i>
      </Link>
    </div>
  );
};

export default Header;
