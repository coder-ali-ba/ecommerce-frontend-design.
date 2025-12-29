import React, { useState } from "react";
import logo from '../assets/logo-symbol.png'
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Category from "./Category";
import Sidebar from "./Sidebar";



function Navbar() {
  const [show , setShow] = useState(false)
  const toggleShow = () => {
    setShow(prev=>!prev)
  }

  return (
    <>
    <div className="h-[86px] bg-[#FFFFFF] w-full  flex items-center justify-around">
      <div className="w-1/6 text-center gap-2 flex items-center justify-center">
        <span className="md:hidden" onClick={toggleShow}>
          <MenuIcon />
        </span>
        <img src={logo} alt="" className="w-[44px] h-[44px]" />
        <p>Brand</p>
      </div>

      <div className="w-3/6 h-full hidden md:flex items-center justify-center ">
        <div className="h-[40px] w-[95%] border-2 border-[#0D6EFD] rounded-md">
          <input type="text" className="border-none outline-none h-full w-[60%]" />
          <select name="Category" className="border-x-2 cursor-pointer border-[#0D6EFD] h-full outline-none w-[20%]">
            <option value="category">All Category</option>
            
          </select>
          <button className="border text-white border-[#0D6EFD] bg-[#0D6EFD] cursor-pointer h-[38px] px-4 w-[20%] rounded-r-md">Search</button>
        </div> 
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
       <span className="flex flex-col items-center text-gray-500 cursor-pointer">
        <ShoppingCartIcon />
        <p className="hidden md:flex">My cart</p>
       </span>
      </div>

    </div>
      
    <div className="w-[79%] m-auto md:hidden mb-4">
      <input type="text" className="border border-gray-400 p-2 rounded-md  w-full" placeholder="Search" />
    </div>
    <Category />
    {show && 
      <Sidebar close={toggleShow}/>
    }
    </>


  )
}

export default Navbar



