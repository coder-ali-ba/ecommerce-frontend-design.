import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Category from "../Components/Category";
import TopBar from "../Components/Filter";
import ListBar from "../Components/ListBar";
import shirt from "../assets/ce60bd07ba64362f07075659795d0e6c24963920.jpg";
import tShi from "../assets/361ff6150b669765823c4c4c5af81ab06e2a1158.jpg";
import Shi from "../assets/06b8fd3662c57b197df41225b5846b233d3a1058.jpg";
import nik from "../assets/6a90c22a9f3dac9e0b97dd076154a67e0ea941a5.jpg";
import MessageIcon from "@mui/icons-material/Message";
import { Heart, HeartIcon, Link } from "lucide-react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import jer from "../assets/b8478718292fe0d58fea5b0a42c117e22f308f6e.png";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

function ItemDetails() {
  const [imageUrl, setImageUrl] = useState("");
  const [current, setCurrent] = useState(0);

  const [activeTab, setActiveTab] = useState("Description");

  const tabs = ["Description", "Reviews", "Shipping", "About seller"];

  const setNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const setPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const images = [
    {
      id: "1",
      url: shirt,
    },
    {
      id: "1",
      url: tShi,
    },
    {
      id: "1",
      url: Shi,
    },
    {
      id: "1",
      url: nik,
    },
    {
      id: "1",
      url: shirt,
    },
  ];

  return (
    <div>
      <Navbar />
      <TopBar />
      <ListBar />

      <div className="bg-gray-200 w-full flex flex-col lg:pr-4 items-center pb-4">
        {/* Photos */}
        <div className="bg-white wd-full lg:w-[90%]   pb-5 border border-gray-300 rounded-md flex justify-center md:justify-around gap-3 flex-wrap">
          <div className=" h-full hidden md:block w-[350px] p-3 ">
            <img
              src={imageUrl ? imageUrl : tShi}
              className="w-[380px] h-[380px] rounded-md border border-gray-300"
              alt=""
            />
            <div className=" flex justify-around w-[328px] mt-6">
              <img
                src={tShi}
                className="w-[50px] h-[50px] border border-gray-300 rounded"
                onClick={() => setImageUrl(tShi)}
                alt=""
              />
              <img
                src={shirt}
                className="w-[50px] h-[50px] border border-gray-300 rounded"
                onClick={() => setImageUrl(shirt)}
                alt=""
              />
              <img
                src={Shi}
                className="w-[50px] h-[50px] border border-gray-300 rounded"
                onClick={() => setImageUrl(Shi)}
                alt=""
              />
              <img
                src={nik}
                className="w-[50px] h-[50px] border border-gray-300 rounded"
                onClick={() => setImageUrl(nik)}
                alt=""
              />
              <img
                src={shirt}
                className="w-[50px] h-[50px] border border-gray-300 rounded"
                onClick={() => setImageUrl(shirt)}
                alt=""
              />
              <img
                src={tShi}
                className="w-[50px] h-[50px] border border-gray-300 rounded"
                onClick={() => setImageUrl(tShi)}
                alt=""
              />
            </div>
          </div>
          {/* Small */}
          <div className="bg-gray-500">
            <div
              className="block md:hidden w-[328px]  h-[350px] shrink-0 bg-cover bg-center flex items-end justify-end"
              style={{ backgroundImage: `url(${images[current].url})` }}
            >
              <div className="">
                <ArrowRightAltIcon
                  className="transition-transform rotate-z-180"
                  fontSize="large"
                  onClick={setNext}
                />
                <ArrowRightAltIcon fontSize="large" onClick={setPrev} />
              </div>
            </div>
          </div>

          <div className="w-[328px]  h-[580px]  pt-2">
            <p className="text-green-400 hidden md:block">✓ In stock</p>
            <p className="font-semibold mt-2 hidden md:block">
              Mens Long Sleeve T-shirt Cotton Base <br /> Layer Slim Muscle
            </p>
            <span className="flex mt-2">
              <p className="text-yellow-500">★★★★</p>
              <p className="text-gray-300">★</p>
              <li className="ml-8 text-sm text-gray-500 mt-[2px]">
                <MessageIcon fontSize="small" /> 32 reviews
              </li>
              <li className="ml-8 text-sm text-gray-500 mt-[2px]">
                <MessageIcon fontSize="small" /> 154 solds
              </li>
            </span>
            <div className="flex md:hidden  w-[328px] h-[40px] mt-6 mb-2 gap-1">
              <button className="bg-[#127FFF] w-[280px] h-[40px] rounded-md text-white cursor-pointer">
                send inquiry
              </button>
              <button className="h-full text-blue-500 hover:text-red-500 p-1 border border-b-gray-400 rounded-sm">
                <Heart size={18} />
              </button>
            </div>
            <div className="h-[72px] w-full hidden  md:flex gap-6 pl-4 items-center bg-[#FFF0DF] mt-2">
              <div className=" text-center border-l-2 pl-3 border-gray-500">
                <p className="font-bold text-red-600">$98.00</p>
                <p className="text-gray-500">50-100pcs</p>
              </div>
              <div className=" text-center border-l-2 pl-3 border-gray-500">
                <p className="font-bold text-red-600">$98.00</p>
                <p className="text-gray-500">50-100pcs</p>
              </div>
              <div className=" text-center border-l-2 pl-3 border-gray-500">
                <p className="font-bold text-red-600">$98.00</p>
                <p className="text-gray-500">50-100pcs</p>
              </div>
            </div>
            <div className="h-[296px] w-full  mt-2">
              <div className="hidden md:flex gap-26 border-b-2 border-gray-400 pt-3 pb-2">
                <p className="text-gray-400">Price:</p>
                <p>Negotiable</p>
              </div>
              <div className="flex gap-21 mt-3 pb-4 border-b-2 border-gray-400">
                <div className="flex flex-col gap-3 ">
                  <p className="text-gray-400">Type</p>
                  <p className="text-gray-400">Material</p>
                  <p className="text-gray-400">Design</p>
                </div>
                <div className="flex flex-col gap-3 ">
                  <p>Classic Shoes</p>
                  <p>Plastic materials</p>
                  <p>Modern nice</p>
                </div>
              </div>
              <p className="md:hidden">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum expedita fugit, veniam suscipit voluptas accusamus?{" "}
                <br />
                <a href="" className="text-blue-500 cursor-pointer">
                  See more
                </a>
              </p>

              <div className="hidden md:flex gap-10 mt-3 pb-4 border-b-2 border-gray-400">
                <div className="flex flex-col gap-3">
                  <p className="text-gray-400">Customization</p>
                  <p className="mt-6 text-gray-400"> Protection</p>
                  <p className="text-gray-400">Warranty</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p>
                    {" "}
                    Customized logo and <br /> design custom packages
                  </p>
                  <p> Refund Policy</p>
                  <p>2 Years full warranty</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-full w-[350px] hidden md:block">
            <div className="h-[360px] w-[320px] border border-gray-400 rounded-md mx-auto mt-4 pt-3">
              <div className="w-[250px] pb-5 flex gap-2  border-b-1  m-auto">
                <p className="bg-green-300 h-[48px] w-[48px] rounded text-4xl font-bold text-gray-500 text-center">
                  R
                </p>
                <p>
                  Supplier <br /> Guanjoi Trading LLC
                </p>
              </div>
              <div className="flex gap-2 items-center ml-9  pt-4">
                <img src={jer} alt="" className="h-[30px] w-[52px]" />
                <p className="text-xl"> Germany , Berlin</p>
              </div>
              <div className="flex gap-5 items-center ml-8 pt-4">
                <VerifiedUserOutlinedIcon fontSize="large" />{" "}
                <p className="text-xl">Verified Seller</p>
              </div>

              <div className="flex gap-5 items-center ml-8 pt-4">
                <LanguageOutlinedIcon fontSize="large" />{" "}
                <p className="text-xl">Worldwide Shipping</p>
              </div>

              <button className="w-[85%] bg-blue-600 p-2 rounded-md text-white  mt-4 ml-6">
                Send inquiry
              </button>
              <button className="w-[85%]  p-2 rounded-md  border  mt-4 ml-6">
                Send inquiry
              </button>
            </div>
            <div className="w-[166px] hidden  md:flex gap-2 border border-blue-400 rounded text-blue-500 mt-6 ml-20 py-1 pl-3 ">
              <HeartIcon size={24} /> Save for later
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[92%] hidden mx-auto p-4 md:grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* LEFT SIDE */}
          <div className="md:col-span-3 border  border-gray-300 rounded-md p-4 bg-white">
            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-300 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 text-sm font-medium ${
                    activeTab === tab
                      ? "border-b-2 border-blue-500 text-blue-600"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <p className="text-sm text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quisquam exercitationem vel voluptas ab molestiae nisi architecto
              quos mollitia adipisci deserunt consequuntur rerum, tenetur
              accusantium reiciendis velit aut quasi laudantium reprehenderit
              nemo ipsam illum illo. Et numquam eos culpa fuga! Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Fugit accusamus
              tempora aperiam ipsa voluptas non dolorem commodi quasi animi
              facere, optio saepe modi nesciunt veniam.
            </p>

            {/* Table */}
            <div className="border border-gray-300 overflow-hidden w-[567px] mb-4">
              {[
                ["Model", "#8786867"],
                ["Style", "Classic style"],
                ["Certificate", "ISO-898921212"],
                ["Size", "34mm x 450mm x 19mm"],
                ["Memory", "36GB RAM"],
              ].map(([key, value]) => (
                <div
                  key={key}
                  className="flex w-[567px] text-sm border-b border-b-gray-400 last:border-b-0"
                >
                  <div className="w-2/3 bg-gray-50 px-3 py-2 ">{key}</div>
                  <div className="w-2/3 px-3 py-2 text-gray-600">{value}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✔ Some great feature name here</li>
              <li>✔ Lorem ipsum dolor sit amet, consectetur</li>
              <li>✔ Duis aute irure dolor in reprehenderit</li>
              <li>✔ Another cool feature</li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="border border-gray-300 h-fit rounded-md p-4 bg-white">
            <h3 className="font-semibold mb-4 text-sm">You may like</h3>

            {[
              {
                desc: "Men Blazers Sets Elegant Formal",
                image: shirt,
              },
              {
                desc: "Men Shirt Sleeve Polo Contrast",
                image: tShi,
              },
              {
                desc: "Apple Watch Series Space Gray",
                image: Shi,
              },
              {
                desc: "Basketball Crew Socks Long Stuff",
                image: nik,
              },
              {
                desc: "New Summer Men's castrol T-Shirts",
                image: shirt,
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3  mb-4 last:mb-0">
                <div className="w-14 h-14 bg-white rounded border p-1 border-gray-300">
                  <img src={item.image} className="w-full h-full" alt="" />
                </div>
                <div>
                  <p className="text-sm">{item.desc}</p>
                  <p className="text-xs text-gray-500">$7.00 - $99.50</p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}

export default ItemDetails;
