import React from "react";
import Navbar from "../Components/Navbar";
import Filter from "../Components/Filter";
import bgImage from "../assets/Banner-board-800x420 2.png";
import { Button } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function HomePage() {
  return (
    <>
      <div>
        <Navbar />
        <Filter />
        <div className="h-[100vh] w-full bg-gray-100 pt-5">
          <div className="flex bg-white w-[89%] h-96 m-auto p-4">
            
              <ul className="w-1/4 h-full list-none flex flex-col justify-between ">
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
              className="w-3/4 h-full bg-cover pt-16 pl-11"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="text-3xl">Latest Trending</h1>
                <h1 className="text-3xl font-bold">Electronics Item</h1>
                <button className="bg-white px-3 py-1 mt-2 rounded-md">Learn More</button>
            </div>
            <div className="w-1/4 h-full pl-2 flex flex-col gap-2 ">
              <div className="bg-[#E3F0FF] h-[40%] w-full rounded-md">
                <span className="d flex pt-2 gap-2">
                    <AccountCircleOutlinedIcon style={{fontSize :"64px" , color:"gray"}} />
                    <h4 className="leading-tight text-xl mt-1 text-gray-500">Hi user<br/>lets get started</h4>
                </span>
                <Button className="bg-gradient-to-r from-[#127FFF] to-[#0067FF]  text-white ">Join Now</Button>
              </div>
              <div className="bg-[#F38332] h-[30%] w-full rounded-md"></div>
              <div className="bg-[#55BDC3] h-[30%] w-full rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
