import React from "react";
import logo from "../assets/logo-symbol.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AppleIcon from '@mui/icons-material/Apple';
import UAE from '../assets/5b7e05677ed6e6d0ff7b7df11d34540f89efa0eb.png'

function Footer() {
  return (
    <>
    <div className="w-full h-[300px] bg-white hidden md:flex ">
      <div className="h-full w-1/4 flex flex-col justify-center gap-4 pl-12 ">
        <span className="flex items-center ">
          <img src={logo} alt="" />
          <p className="text-xl font-bold text-blue-400">Brand</p>
        </span>
        <p>
          Best information about the company gies here but now lorem ipsum is
        </p>
        <span>
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </span>
      </div>
      <div className="h-full w-2/4 pt-16">
        <table className="m-auto border-collapse text-left">
          <thead>
            <tr className="text-gray-900">
              <th className="px-6 py-3 font-semibold">About</th>
              <th className="px-6 py-3 font-semibold">Partnership</th>
              <th className="px-6 py-3 font-semibold">Information</th>
              <th className="px-6 py-3 font-semibold">For Users</th>
            </tr>
          </thead>

          <tbody className="text-gray-600">
            <tr className="hover:text-blue-600 cursor-pointer">
              <td className="px-6 py-2">sd</td>
              <td className="px-6 py-2">sd</td>
              <td className="px-6 py-2">dsd</td>
              <td className="px-6 py-2">sdsd</td>
            </tr>

            <tr className="hover:text-blue-600 cursor-pointer">
              <td className="px-6 py-2">sd</td>
              <td className="px-6 py-2">sd</td>
              <td className="px-6 py-2">dsd</td>
              <td className="px-6 py-2">sdsd</td>
            </tr>

            <tr className="hover:text-blue-600 cursor-pointer">
              <td className="px-6 py-2">sd</td>
              <td className="px-6 py-2">sd</td>
              <td className="px-6 py-2">dsd</td>
              <td className="px-6 py-2">sdsd</td>
            </tr>

            <tr className="hover:text-blue-600 cursor-pointer">
              <td className="px-6 py-2">sd</td>
              <td className="px-6 py-2">sd</td>
              <td className="px-6 py-2">dsd</td>
              <td className="px-6 py-2">sdsd</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="h-full  w-1/4 pt-19">
        <p className="font-bold">Get App</p>
        <button className="bg-[#1C1C1C] leading-tight flex text-white py-1 px-3 rounded-md gap-1 mt-3">
          <AppleIcon fontSize="large"/>
          <div>
            <p className="leading-tight text-xs">Download on the</p>App Store
          </div>
        </button>
        <button className="bg-[#1C1C1C] leading-tight flex text-white py-1 px-3 rounded-md gap-1 mt-3">
          <AppleIcon fontSize="large"/>
          <div>
            <p className="leading-tight text-xs">Download on the</p>Google Play
          </div>
        </button>
      </div>
    </div>
    <div className="w-full bg-[#EFF2F4] py-4">
    <div className="w-[90%] h-[20px] m-auto flex justify-between"> 
      <div className="text-gray-400">@2023 ecommerce</div>
      <div className="flex items-center gap-2">
        <img src={UAE} alt="" className="w-[24px] h-[17px]"/>English 
      </div>
    </div>
    </div>
    </>
  );
}

export default Footer;
