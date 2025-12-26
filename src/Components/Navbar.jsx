import React from "react";
import logo from "../assets/logo-symbol.png";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from '@mui/icons-material/Menu';
import Category from "./Category";

function Navbar() {
  return (
    <>
    <div className="w-full h-[86px] flex justify-around items-center p-4 
     max-[750px]:h-[120px] items-start ">
      <div className="flex text-blue-500 font-bold">
        <li className="list-none mr-2  lg:hidden cursor-pointer">
         < MenuIcon  className="text-black  " />
        </li>
         <img src={logo} height={24} width={24} alt="" />
        <p className="ml-2">Brand</p>
      </div>
      <div className="border-2 border-blue-500 max-[750px]:border-none   flex   rounded-md">
        <input
          type="text"
          placeholder="search"
          className="border-x-1 w-96  border-y-2 rounded-md  border-blue-500 py-1 max-[750px]:relative
             max-[750px]:top-[50px]
             max-[750px]:w-full outline-none focus:outline-none focus:ring-0 px-1
             "
        />
        <div className=" hidden lg:flex items-center">
        <select
          name="category"
          id=""
          className="  h-full px-2 py-1 max-[840px]:px-0 max-[840px]:text-xs"
        >
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
        <button className="max-[850px]:px-2   cursor-pointer bg-blue-500 text-white border-blue-500 h-full px-8 py-1.5">
          Search
        </button>
        </div>
      </div>

      <div className="flex gap-4">
        <span className="text-gray-400 text-center cursor-pointer flex flex-col items-center">
          <PersonIcon className="max-[850px]:text-xs" />
          <p className="text-sm max-[850px]:text-xs">Profile</p>
        </span>
        <span className="text-gray-400 text-center cursor-pointer hidden lg:flex flex-col items-center">
          <MessageIcon className="max-[850px]:text-xs "/>
          <p className="text-sm">message</p>
        </span>
        <span className="text-gray-400 text-center cursor-pointer  hidden lg:flex flex-col items-center">
          <FavoriteIcon className="max-[850px]:text-xxs" />
          <p className="text-sm">Orders</p>
        </span>
        <span className="text-gray-400  cursor-pointer flex flex-col items-center">
          <ShoppingCartIcon className="max-[850px]:text-xs" />
          <p className="text-sm">My Cart</p>
        </span>
      </div>
    </div>
      <Category />
    </>
  );
}

export default Navbar;
