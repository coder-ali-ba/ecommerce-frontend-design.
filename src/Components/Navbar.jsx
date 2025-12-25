import React from "react";
import logo from "../assets/logo-symbol.png";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <div className="w-full h-[86px] flex justify-around items-center p-4">
      <div className="flex text-blue-500 font-bold">
        <img src={logo} height={24} width={24} alt="" />
        <p>Brand</p>
      </div>
      <div className="border-2 border-blue-500 rounded-md">
        <input
          type="text"
          placeholder="search"
          className="border-x-1 w-96 border-blue-500 py-1 outline-none focus:outline-none focus:ring-0 px-1 max-[967px]:w-64 max-[840px]:w-42 max-[750px]:w-24"
        />
        <select name="category" id="" className="  h-full px-2 py-1 max-[840px]:px-0 max-[840px]:text-xs">
          <option
            value="category"
            className="outline-none focus:outline-none focus:ring-0 "
          >
            All Categories
          </option>
          <option
            value="category"
            className="outline-none focus:outline-none focus:ring-0 "
          >
            Automobiles
          </option>
          <option
            value="category"
            className="outline-none focus:outline-none focus:ring-0 "
          >
            Cloths
          </option>
          <option
            value="category"
            className="outline-none focus:outline-none focus:ring-0 "
          >
            Interiors
          </option>
        </select>
        <button className="max-[850px]:px-2 cursor-pointer bg-blue-500 text-white border-blue-500 h-full px-8 py-1.5">
          Search
        </button>
      </div>

      <div className="flex gap-4">
        <span className="text-gray-400 text-center cursor-pointer ">
          < PersonIcon className="max-[850px]:text-xs" />
          <p className="text-sm max-[850px]:text-xs">Profile</p>
        </span>
        <span className="text-gray-400 text-center cursor-pointer">
          <MessageIcon className="max-[850px]:text-xs"/>
          <p className="text-sm">message</p>
        </span>
        <span className="text-gray-400 text-center cursor-pointer">
          <FavoriteIcon className="max-[850px]:text-xxs"/>
          <p className="text-sm">Orders</p>
        </span >
        <span className="text-gray-400 text-center cursor-pointer">
          <ShoppingCartIcon className="max-[850px]:text-xs" />
          <p className="text-sm">My Cart</p>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
