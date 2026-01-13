import React, { useState } from "react";
import logo from "../assets/logo-symbol.png";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Category from "./Category";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  

  return (
    <>
      <div className="h-[86px] bg-[#FFFFFF] w-full  flex items-center justify-around">
        <Link
          className="w-1/6 text-center gap-2 flex items-center justify-center"
          to="/"
        >
          <span className="md:hidden" onClick={toggleShow}>
            <MenuIcon />
          </span>
          <img src={logo} alt="" className="w-[44px] h-[44px]" />
          <p>Brand</p>
        </Link>


        <div className="w-3/6 h-[40px] hidden md:flex items-center rounded-md overflow-hidden">
          <input
            type="text"
            className="h-full w-[60%] px-3 outline-none border-2 border-r-0 border-[#0D6EFD]"
            
          />

          <select className="h-full w-[25%] cursor-pointer outline-none border-2 border-[#0D6EFD]">
            <option >All Category</option>
            <option >Electronics</option>
            <option >Mobile accessories</option>
            <option >Cloths</option>
          </select>

          <button className="h-full w-[15%] bg-[#0D6EFD] text-white border-2 border-l-0 border-[#0D6EFD] rounded-r-md cursor-pointer hover:bg-blue-700">
            Search
          </button>
        </div>
        <div className="w-2/6 flex justify-end md:justify-center items-center gap-6">
          <span className="flex flex-col items-center text-gray-500 cursor-pointer">
            <PersonIcon />
            <p className="hidden md:flex">Profile</p>
          </span>
          <span className="hidden md:flex flex-col items-center text-gray-500 cursor-pointer">
            <MessageIcon />
            <p>Messages</p>
          </span>
          <span className="hidden md:flex flex-col items-center text-gray-500 cursor-pointer">
            <FavoriteIcon />
            <p>Orders</p>
          </span>
          <Link className="flex flex-col items-center text-gray-500 cursor-pointer" to="/cart">
            <ShoppingCartIcon />
            <p className="hidden md:flex">My cart</p>
          </Link>
        </div>
      </div>

      <div className="w-[79%] m-auto md:hidden mb-4">
        <input
          type="text"
          className="border border-gray-400 p-2 rounded-md  w-full"
          placeholder="Search"
        />
      </div>
      <Category />
      {show && <Sidebar close={toggleShow} />}
    </>
  );
}

export default Navbar;
