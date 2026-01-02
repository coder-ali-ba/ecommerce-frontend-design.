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
import home from "../assets/e569161444be4cfea24366cb3d27cb335105ed84.jpg";
import chair from "../assets/4450cf999324f0c42ef6175c1e8fd94fcdaea111.png";
import vase from "../assets/e7609aa3afe3483e736054358d53f2f8797b4546.png";
import pot from "../assets/a542fa1c1ebac249f8cba9ff49b0a3c5c89dfbc7.png";
import bed from "../assets/de013dbdda0ec19b2f735896bd129bb83cae628f.png";
import mix from "../assets/67ecd6b2d628afe6f0f52ecee5cf9460f0d0d69d.png";
import blend from "../assets/649567d50c25ac335a1e2cc7d8d3584a3592fbbf.png";
import tab from "../assets/a3565d31ff34eb5b476f6a97fc3fde243beb9597.jpg";
import phol from "../assets/37fcfe74e17c636fb7cc35743a81e426e6e52604.png";
import music from "../assets/2899a4374c8412945ece65003461e7d1b12857d0.png";
import shirt from '../assets/66ac8758b171e503e38e7b8c0a5fa03996d5d467.png'
import ind from '../assets/b564a957ce3a966c5d76f6c21ddcaeba336dd251.png'
import SearchIcon from '@mui/icons-material/Search';
import cols from '../assets/4b08c60c3829236b56ad902eb0d7bc9954d83888.png'
import plane from '../assets/1d9d9dbe3e097f229ff7711c3aefb5b0673a2278.png'
import mon from '../assets/0c52058c7fecb736fb193ed3a0a046668cf87a58.png'
import InventoryIcon from '@mui/icons-material/Inventory';
import SendIcon from '@mui/icons-material/Send';
import SecurityIcon from '@mui/icons-material/Security';
import RegionSuppliers from "../Components/RegionSuppliers";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";
import COAT from '../assets/a14ab6ac18aa7b0da8ec069e90fab9443221e2f2.jpg'
import JAC from '../assets/b720dd65fcc6274edfb7e97f682185ec460b6d4f.png'
import POCK from '../assets/3e0d988a895e1e83befccaeafc962783f0de80c5.png'
import BAG from '../assets/deea14d78e68b15c28eb29234224b8b2f71d5eb5.png'
import JEANS from '../assets/8ef134a2fbdc1fec81bd703736016e62fddab16b.png'
import HEAD from '../assets/37220adadb935c4b51e951193ddd1064f61e7b77.png'



function HomePage() {
  return (
    <>
      <Navbar />
      <TopBar />

      <div className="w-full bg-gray-300 pt-4 ">
        {/* HERO SECTION */}
        <div className="flex items-center justify-center ">
          <div className="bg-white w-full lg:w-[90%] lg:mr-3 md:p-2 h-[400px] flex">
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
        <div className="w-full lg:w-[91%] lg:pr-3 mt-4 m-auto ">
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

        {/* Home ANd OutDOORS */}
        <div className="bg-white  w-full lg:w-[89.8%] md:h-[254px] lg:ml-16 mt-4 md:flex overflow-hidden flex-none">
          <div
            className="md:w-[275px] md:h-full pl-6 pt-4  pb-2 `]    flex-none "
            style={{
              backgroundImage: `url(${home})`,
              backgroundSize: "cover",
            }}
          >
            <h1 className="font-bold text-xl">
              {" "}
              Home and <br className="hidden md:block" /> outdoor{" "}
            </h1>
            <button className="bg-white cursor-pointer px-4 py-2 hidden md:block rounded-md mt-4">
              {" "}
              Source now{" "}
            </button>
          </div>

          <div className="overflow-x-auto scrollbar-hide max-[768px]:flex">
            <div className=" flex">
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={chair}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={chair}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={vase}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={vase}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={pot}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={pot}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={bed}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={bed}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className=" flex">
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={mix}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={mix}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={blend}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={blend}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={tab}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={tab}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={phol}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={phol}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="bg-white px-4 py-2  md:hidden rounded-md mt-4 text-blue-600">
            {" "}
            Source now =>{" "}
          </button>
        </div>

        {/* Consumer Electronics */}

        <div className="bg-white  w-full lg:w-[89.8%] md:h-[254px] lg:ml-16 mt-4 md:flex overflow-hidden flex-none">
          <div
            className="md:w-[275px] md:h-full pl-6 pt-4  pb-2 `]    flex-none "
            style={{
              backgroundImage: `url(${music})`,
              backgroundSize: "cover",
            }}
          >
            <h1 className="font-bold text-xl">
              Consumer <br className="hidden md:block" /> electronics and{" "}
              <br className="hidden md:block" /> gadgets
            </h1>
            <button className="bg-white cursor-pointer px-4 py-2 hidden md:block rounded-md mt-4">
              Source now
            </button>
          </div>

          <div className="overflow-x-auto scrollbar-hide max-[768px]:flex">
            <div className=" flex">
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={watch}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={watch}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={camera}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={camera}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={pot}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={pot}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={bed}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={bed}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className=" flex">
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={mix}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={mix}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={blend}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={blend}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={tab}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={tab}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[140px] md:w-[235px] md:h-[127px] pb-3 flex flex-col items-center border md:block border-gray-300 pl-2 pt-2 pr-2">
                <img
                  src={phol}
                  className="w-[66px] h-[69px] mt-2 md:hidden"
                  alt=""
                />
                <p className="text-xl">Soft Chairs</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xl text-gray-500">
                    From <br className="hidden md:flex" />
                    USD 19
                  </p>
                  <img
                    src={phol}
                    className="w-[66px] h-[69px] hidden md:flex mt-2"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="bg-white px-4 py-2  md:hidden rounded-md mt-4 text-blue-600">
            Source now =>
          </button>
        </div>

        {/* Send Quotes SECT */}
        <div className="flex justify-center mt-4 w-full ">
          <div className="bg-gradient-to-r from-[#2C7CF1] to-[#00D1FF80] w-full lg:w-[90%] lg:mr-3   h-[446px] flex justify-between items-center">
            <div className="h-[290px] flex ml-[40px] items-start">
              <div>
                <h1 className="text-3xl font-bold text-white">
                  An easy way to send <br /> requests to all suppliers
                </h1>
                <p className="mt-4 text-gray-100">
                  Lorem, ipsum dolor sit amet consectetur adipisicing <br />{" "}
                  elit. Possimus, voluptate odio. Iste, dignissimos.
                </p>
                <button className="bg-[#127FFF] mt-3 cursor-pointer  md:hidden text-white px-4
                py-2 rounded-md">Send inquiry</button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="lg:w-[491px]  md:w-[350px] h-[346px] mr-[40px] rounded-md p-4 bg-white">
                <h1 className="text-2xl font-bold mt-2">Send quotes to suppliers</h1>
                <input type="text" placeholder="What item you need?" className="h-[40px] w-[90%] border border-gray-300 pl-3 mt-4 rounded-md text-xl text-black" />
                <textarea name="" className=" h-[73px] w-[90%] border border-gray-300 pl-3 mt-4 rounded-md text-xl text-black" id="" placeholder="Type for more detail"></textarea>
                <div
                className="flex gap-2">
                   <div className="w-[206px] h-[40px] text-center pt-1.5 mt-3 rounded-md border border-gray-300">Quantity</div>
                <select name="quantity" className="h-[40px] w-[111px] border border-gray-300 rounded-md mt-3 pl-3 pr-3" id="">
                  <option value="Pcs">Pcs</option>
                </select>
                </div>
                <button className="bg-[#127FFF] mt-4 cursor-pointer  text-white px-4
                py-2 rounded-md">Send inquiry</button>
              </div>
            </div>
          </div>
        </div>

        {/* RECOMMENDED ITEMS */}
        <div className="flex justify-center mt-4 pb-2 w-full">
          <div className=" w-full lg:w-[90%] lg:pt-3 lg:pb-3 lg:mr-3 ">
            <h1 className="text-xl font-bold">Recommended Items</h1>
            <div className="flex w-full gap-4 justify-center mt-2 md:justify-between flex-wrap">
              <div className="w-[220px] h-[310px] bg-white border-2 rounded-md border-gray-200">
                <img src={shirt} className="w-[150px] h-[170px] m-auto mt-4" alt="" />
                <p className="font-bolder ml-4 text-xl mt-6">$10.30</p>
                <p className="text-lg mt-2 text-gray-500 ml-4">T-shirts with multiple colors,for men</p>
              </div>
              <div className="w-[220px] h-[310px] bg-white border-2 rounded-md border-gray-200">
                <img src={COAT} className="w-[150px] h-[170px] m-auto mt-4" alt="" />
                <p className="font-bolder ml-4 text-xl mt-6">$10.30</p>
                <p className="text-lg mt-2 text-gray-500 ml-4">Jeans shorts for menblue color</p>
              </div>
              <div className="w-[220px] h-[310px] bg-white border-2 rounded-md border-gray-200">
                <img src={JAC} className="w-[150px] h-[170px] m-auto mt-4" alt="" />
                <p className="font-bolder ml-4 text-xl mt-6">$10.30</p>
                <p className="text-lg mt-2 text-gray-500 ml-4">Brown winter coatmedium size</p>
              </div>
              <div className="w-[220px] h-[310px] bg-white border-2 rounded-md border-gray-200">
                <img src={POCK} className="w-[150px] h-[170px] m-auto mt-4" alt="" />
                <p className="font-bolder ml-4 text-xl mt-6">$10.30</p>
                <p className="text-lg mt-2 text-gray-500 ml-4">Leather wallet</p>
              </div>
              <div className="w-[220px] h-[310px] bg-white border-2 rounded-md border-gray-200">
                <img src={BAG} className="w-[150px] h-[170px] m-auto mt-4" alt="" />
                <p className="font-bolder ml-4 text-xl mt-6">$10.30</p>
                <p className="text-lg mt-2 text-gray-500 ml-4">Jeans bag for travelfor men</p>
              </div>
            
              <div className="w-[220px] h-[310px] bg-white border-2 rounded-md border-gray-200">
                <img src={JEANS} className="w-[150px] h-[170px] m-auto mt-4" alt="" />
                <p className="font-bolder ml-4 text-xl mt-6">$10.30</p>
                <p className="text-lg mt-2 text-gray-500 ml-4">T-shirts with multiple colors,for men</p>
              </div>
              <div className="w-[220px] h-[310px] bg-white border-2 rounded-md border-gray-200">
                <img src={HEAD} className="w-[150px] h-[170px] m-auto mt-4" alt="" />
                <p className="font-bolder ml-4 text-xl mt-6">$10.30</p>
                <p className="text-lg mt-2 text-gray-500 ml-4">Headset for gamingwith mic</p>
              </div>
              <div className="w-[220px] h-[310px] bg-white border-2 rounded-md border-gray-200">
                <img src={BAG} className="w-[150px] h-[170px] m-auto mt-4" alt="" />
                <p className="font-bolder ml-4 text-xl mt-6">$10.30</p>
                <p className="text-lg mt-2 text-gray-500 ml-4">Smartwatchsilver color modern</p>
              </div>
              <div className="w-[220px] h-[310px] bg-white border-2 rounded-md border-gray-200">
                <img src={pot} className="w-[150px] h-[170px] m-auto mt-4" alt="" />
                <p className="font-bolder ml-4 text-xl mt-6">$10.30</p>
                <p className="text-lg mt-2 text-gray-500 ml-4">T-shirts with multiple colors,for men</p>
              </div>
              <div className="w-[220px] h-[310px] bg-white border-2 rounded-md border-gray-200">
                <img src={shirt} className="w-[150px] h-[170px] m-auto mt-4" alt="" />
                <p className="font-bolder ml-4 text-xl mt-6">$10.30</p>
                <p className="text-lg mt-2 text-gray-500 ml-4">T-shirts with multiple colors,for men</p>
              </div>
            </div>
          </div>
        </div>
      

        {/* OUR EXTRA SERVICES */}
        <h1 className="hidden md:block text-xl font-bold lg:ml-18 mt-3">Our extra services</h1>
        <div className="hidden  md:flex justify-center mt-4 w-full bg-gray-300"> 

          <div className="flex  md:justify-around lg:justify-between flex-wrap w-full gap-2 lg:w-[90%] xl:h-[256px] lg:mr-3">
            <div>
              <div className="w-[280px] h-[200px] bg-white rounded-md">
                <img src={ind} className="w-full h-[65%] rounded-t-md" alt="" />
                <p className="text-md ml-6 mt-2"> Source from <br /> Industry Hubs</p>
                <div className="flex justify-center items-center w-[55px] h-[55px] bg-[#D1E7FF] rounded-full border-3 border-white relative bottom-20 left-48">
                  <SearchIcon fontSize="large" />
                </div>
              </div>
            </div>

            <div>
              <div className="w-[280px] h-[200px] bg-white rounded-md">
                <img src={cols} className="w-full h-[65%] rounded-t-md" alt="" />
                <p className="text-md ml-6 mt-2"> Source from <br /> Industry Hubs</p>
                <div className="flex justify-center items-center w-[55px] h-[55px] bg-[#D1E7FF] rounded-full border-3 border-white relative bottom-20 left-48">
                  <InventoryIcon fontSize="large" />
                </div>
              </div>
            </div>

            <div>
              <div className="w-[280px] h-[200px] bg-white rounded-md">
                <img src={plane} className="w-full h-[65%] rounded-t-md" alt="" />
                <p className="text-md ml-6 mt-2"> Source from <br /> Industry Hubs</p>
                <div className="flex justify-center items-center w-[55px] h-[55px] bg-[#D1E7FF] rounded-full border-3 border-white relative bottom-20 left-48">
                  <SendIcon fontSize="large"/>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[280px] h-[200px] bg-white rounded-md">
                <img src={mon} className="w-full h-[65%] rounded-t-md" alt="" />
                <p className="text-md ml-6 mt-2"> Source from <br /> Industry Hubs</p>
                <div className="flex justify-center items-center w-[55px] h-[55px] bg-[#D1E7FF] rounded-full border-3 border-white relative bottom-20 left-48">
                  <SecurityIcon />
                </div>
              </div>
            </div>

          </div>
        </div>
 
        <RegionSuppliers />
        <Subscribe />
        <Footer />

      </div>
      
    </>
  );
}


export default HomePage;
