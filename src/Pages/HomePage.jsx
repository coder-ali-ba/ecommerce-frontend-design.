import React from "react";
import Navbar from "../Components/Navbar";

import { Button } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import watch from "../assets/image 35.png";
import mob from "../assets/ebb1aca726e944afe4e9b344a9d08d2cdf13f6ac.png";
import laptop from "../assets/f16c3be367d46067797d63f72c5d238bab2c834f.png";
import headPhone from "../assets/fd01d17a7844418a11051c24070081697c1e9a58.png";
import camera from "../assets/260c7a4b2c0a4a3071479d3ea04dbef308c19301.png";
import TopBar from "../Components/Filter";
import bgImage from "../assets/Banner-board-800x420 2.png";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

function HomePage() {
  return (
    <>
      <Navbar />
      <TopBar />

      <div className="w-full bg-gray-300 pt-4  pb-4">
        {/* HERO SECTION */}
        <div className="flex items-center justify-center ">
          <div className="bg-white w-full lg:w-[90%] mr-3 md:p-2 h-[400px] flex">
            <div className="w-[20%] lg:w-[22%] h-full bg-white hidden md:flex justify-center items-center">
              <ul className="flex flex-col lg:gap-3 text-gray-500 w-[100%]">
                <li className="hover:bg-[#E5F1FF] pl-2 rounded-md py-1 w-[90%]">
                  Automobiles
                </li>
                <li className="hover:bg-[#E5F1FF] pl-2 rounded-md py-1 w-[90%]">
                  Clothes and wears
                </li>
                <li className="hover:bg-[#E5F1FF] pl-2 rounded-md py-1 w-[90%]">
                  Home Interiors
                </li>
                <li className="hover:bg-[#E5F1FF] pl-2 rounded-md py-1 w-[90%]">
                  Computer and Tech
                </li>
                <li className="hover:bg-[#E5F1FF] pl-2 rounded-md py-1 w-[90%]">
                  Tools, equipments
                </li>
                <li className="hover:bg-[#E5F1FF] pl-2 rounded-md py-1 w-[90%]">
                  Sports and outdoors
                </li>
                <li className="hover:bg-[#E5F1FF] pl-2 rounded-md py-1 w-[90%]">
                  Animals and pets
                </li>
                <li className="hover:bg-[#E5F1FF] pl-2 rounded-md py-1 w-[90%]">
                  Machinery tools
                </li>
                <li className="hover:bg-[#E5F1FF] pl-2 rounded-md py-1 w-[90%]">
                  More category
                </li>
              </ul>
            </div>

            <div
              className="w-[100%] md:w-[55%] lg:w-[58%] h-full pl-7 pt-18 sm:pl-10 sm:pt-12"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-2xl">Latest trending</h1>
              <h1 className="text-3xl font-bold">Electronic items</h1>
              <button className="px-4 py-2 bg-white mt-3 rounded-md">
                Learn more
              </button>
            </div>

            <div className=" w-[25%] xl:w-[20%] h-full hidden  md:flex flex-col gap-6 items-center pl-4 lg:pl-0">
              <div className="max-w-[200px] h-[150px] bg-[#E3F0FF] p-2 rounded-md">
                <div className="flex items-center">
                  <AccountCircleTwoToneIcon sx={{ fontSize: 60 }} />
                  <p>
                    Hi, user <br />
                    let’s get stated
                  </p>
                </div>
                <button className="rounded-md p-1 text-white cursor-pointer mb-1 w-[180px] bg-gradient-to-r from-[#127FFF] to-[#0067FF]">
                  Join now
                </button>
                <button className="p-1 cursor-pointer rounded-md mt-1 w-[180px] bg-white text-[#127FFF]">
                  Login
                </button>
              </div>
              <div className="w-[200px] h-[95px] bg-[#F38332] rounded-md pt-3 pl-3">
                <p className="text-white">
                  Get US $10 off <br /> with a new <br /> supplier
                </p>
              </div>
              <div className="w-[200px] h-[95px] bg-[#55BDC3] rounded-md pt-3 pl-3">
                <p className="text-white">
                  Send quotes with <br /> supplier <br /> preferencesr
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Deals And Offers */}
        <div className="w-full lg:w-[91%] pr-3 mt-4 m-auto ">
          <div className="bg-white border  border-gray-300 w-full h-[300px] md:h-[240px]  md:flex overflow-hidden">
            {/* LEFT SECTION */}
            <div
              className="flex pb-2 justify-around items-center md:block 
                  lg:w-[275px] border border-gray-300 
                  md:h-full md:pt-4 lg:pl-4 px-2 flex-none "
            >
              <div>
                <p className="font-bold">Deals and offers</p>
                <p className="text-gray-500">Hygiene equipments</p>
              </div>

              <div className="flex gap-1 pt-2">
                <div className="bg-[#606060] px-2 py-1 rounded-md text-center">
                  <p className="text-white font-bold">04</p>
                  <span className="text-xs text-white">Days</span>
                </div>
                <div className="bg-[#606060] px-2 py-1 rounded-md text-center">
                  <p className="text-white font-bold">25</p>
                  <span className="text-xs text-white">Hours</span>
                </div>
                <div className="bg-[#606060] px-2 py-1 rounded-md text-center">
                  <p className="text-white font-bold">55</p>
                  <span className="text-xs text-white">Min</span>
                </div>
                <div className="bg-[#606060] px-2 py-1 rounded-md text-center">
                  <p className="text-white font-bold">56</p>
                  <span className="text-xs text-white">Sec</span>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex h=[300px]   md:mt-0 md:h-full overflow-x-auto scrollbar-hide">
              <div className="w-[140px] md:w-[188px] h-[300px] md:h-full flex-none border border-gray-300 flex flex-col gap-3 pt-4 items-center">
                <img src={watch} className="w-[101px] h-[121px]" alt="" />
                <p>Smart watches</p>
                <span className="rounded-2xl bg-[#FFE3E3] px-4 py-1">-25%</span>
              </div>
              <div className="w-[140px] md:w-[188px] h-[300px] md:h-full flex-none border border-gray-300 flex flex-col gap-3 pt-4 items-center">
                <img src={laptop} className="w-[101px] h-[121px]" alt="" />
                <p>Laptops</p>
                <span className="rounded-2xl bg-[#FFE3E3] px-4 py-1">-25%</span>
              </div>
              <div className="w-[140px] md:w-[188px] h-[300px] md:h-full flex-none border border-gray-300 flex flex-col gap-3 pt-4 items-center">
                <img src={camera} className="w-[101px] h-[121px]" alt="" />
                <p>GoPro Cameras</p>
                <span className="rounded-2xl bg-[#FFE3E3] px-4 py-1">-25%</span>
              </div>
              <div className="w-[140px] md:w-[188px] h-[300px] md:h-full flex-none border border-gray-300 flex flex-col gap-3 pt-4 items-center">
                <img src={headPhone} className="w-[101px] h-[121px]" alt="" />
                <p>Headphones</p>
                <span className="rounded-2xl bg-[#FFE3E3] px-4 py-1">-25%</span>
              </div>
              <div className="w-[140px] md:w-[188px] h-[300px] md:h-full flex-none border border-gray-300 flex flex-col gap-3 pt-4 items-center">
                <img src={mob} className="w-[101px] h-[121px]" alt="" />
                <p>Canon Cameras</p>
                <span className="rounded-2xl bg-[#FFE3E3] px-4 py-1">-25%</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default HomePage;
