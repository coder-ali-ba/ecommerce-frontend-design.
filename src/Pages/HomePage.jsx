import React from "react";
import Navbar from "../Components/Navbar";
import Filter from "../Components/Filter";
import bgImage from "../assets/Banner-board-800x420 2.png";
import { Button } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import watch from '../assets/image 35.png'

function HomePage() {
  return (
    <>
      
        <Navbar />
        <Filter />
        <div className="h-max w-full bg-gray-100 pt-0 lg:pt-5  pb-8">
          <div className="flex bg-white lg:w-[89%] h-[80vh] m-auto lg:p-4 w">
            
            <ul className="w-1/4 h-full list-none hidden  lg:flex flex-col justify-between ">
                <li className="cursor-pointer mr-2 p-2 rounded hover:bg-gray-300"> Cloths</li>
                <li className="cursor-pointer mr-2 p-2 rounded hover:bg-gray-300">Interior</li>
                <li className="cursor-pointer mr-2 p-2 rounded hover:bg-gray-300">Computers and TECH</li>
                <li className="cursor-pointer mr-2 p-2 rounded hover:bg-gray-300">Tools , Equipments</li>
                <li className="cursor-pointer mr-2 p-2 rounded hover:bg-gray-300">Sports and Outdoors</li>
                <li className="cursor-pointer mr-2 p-2 rounded hover:bg-gray-300">Animal and Pets</li>
                <li className="cursor-pointer mr-2 p-2 rounded hover:bg-gray-300">Mavhinery Tools</li>
                <li className="cursor-pointer mr-2 p-2 rounded hover:bg-gray-300">More Category</li>
            </ul>
        
            <div
              className="w-[100%] lg:w-3/4 h-96  md:h-full bg-center bg-cover pt-16 pl-11 "
              style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="text-2xl sm:text-4xl">Latest Trending</h1>
                <h1 className="text-2xl sm:text-4xl font-bold mt-3">Electronics Item</h1>
                <button className="bg-white px-8 cursor-pointer py-4 mt-6 rounded-md">Learn More</button>
            </div>


            <div className="w-1/4 h-full pl-2 hidden lg:flex flex-col gap-2  ">
              <div className="bg-[#E3F0FF] h-[40%] flex flex-col gap-4 w-full rounded-md justify-around px-2">
                <span className="d flex pt-2 gap-2">
                    <AccountCircleOutlinedIcon style={{fontSize :"64px" , color:"gray"}} />
                    <h4 className="leading-tight text-xl mt-1 text-gray-500">Hi user<br/>lets get started</h4>
                </span>
                <Button className="bg-gradient-to-r  from-[#127FFF] to-[#0067FF] w-full "
                 style={{color:"white"}}>Join Now</Button>
                <button className="p-1 text-xl mb-2 cursor-pointer bg-white  text-blue-600 w-full"
                 >Login</button>
              </div>
              <div className="bg-[#F38332] h-[30%] w-full rounded-md  flex justify-center items-center  ">
                <p className="text-white text-2xl mr-6">Get US $10 off <br /> with a new <br /> supplier</p>
              </div>
              <div className="bg-[#55BDC3] h-[30%] w-full rounded-md flex justify-center items-center">
                <p className="text-white text-2xl">Send quotes with <br /> supplier <br /> preferences</p>
              </div>
            </div>
          </div>

          <div className=" h-[240px] bg-white mt-6 w-[89%] m-auto flex">
             <div className="w-2/7 h-full border-gray-100 border">
                <div className="mt-6 ml-6">
                  <h1 className="font-bold">Deals and offers</h1>
                  <h3 className="text-gray-500 mb-4">Hygiene equipments</h3>
                  <div className="flex gap-4 ">
                    <div className="bg-gray-800 text-center text-white p-2 rounded-md">
                      <h3 className="font-bold">04 </h3>
                      <span>Days</span>
                    </div>
                    <div className="bg-gray-800 text-center text-white p-2 rounded-md">
                      <h3 className="font-bold">13 </h3>
                      <span>Hour</span>
                    </div>
                    <div className="bg-gray-800 text-center text-white p-2 rounded-md">
                      <h3 className="font-bold">34 </h3>
                      <span>Min</span>
                    </div>
                    <div className="bg-gray-800 text-center text-white p-2 rounded-md">
                      <h3 className="font-bold">56 </h3>
                      <span>Sec</span>
                    </div>
                    
                  </div>
                </div>
             </div>
             <div className="w-1/6 h-full  border-gray-100 border flex flex-col items-center pt-4">
              <img src={watch} className="w-2/4 h-2/4" />
              <p className="mt-4">Smart Watches</p>
              <span className="bg-[#FFE3E3] rounded-2xl text-[#EB001B] px-3 mt-4 py-0.5">-25%</span>
             </div>
             
             <div className="w-1/6 h-full  border-gray-100 border flex flex-col items-center pt-4">
              <img src={watch} className="w-2/4 h-2/4" />
              <p className="mt-4">Smart Watches</p>
              <span className="bg-[#FFE3E3] rounded-2xl text-[#EB001B] px-3 mt-4 py-0.5">-25%</span>
             </div>
             
          </div>
        </div>

        
      
    </>
  );
}

export default HomePage;
