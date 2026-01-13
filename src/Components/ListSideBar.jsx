import React, { useEffect, useRef } from "react";
import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ListSideBar({
  setData,
  setApp,
  setHuawei,
  setPocco,
  setLenovo,
  setMetallic,
  setPlastic,
  setRam,
  setPower,
  setMemory,
}) {
  const [open, setOpen] = useState(true);
  const [openBrand, setopenBrand] = useState(true);
  const [openFeatures, setOpenFeatures] = useState(true);
  const [openRange, setOpenRange] = useState(true);
  const [openCondition, setOpenCondition] = useState(true);
  const [openRating, setOpenRating] = useState(true);

  const [min, setMin] = useState(200);
  const [max, setMax] = useState(999999);

  const MIN_LIMIT = 0;
  const MAX_LIMIT = 999;

  //  BRANDS
  const handleSamsung = (e) => {
    if (e.target.checked) {
      setData("Samsung");
    } else {
      setData("");
    }
  };

  const handleApple = (e) => {
    if (e.target.checked) {
      setApp("Apple");
    } else {
      setApp("");
    }
  };

  const handlehuawei = (e) => {
    if (e.target.checked) {
      setHuawei("Huawei");
    } else {
      setHuawei("");
    }
  };

  const handlePocco = (e) => {
    if (e.target.checked) {
      setPocco("Pocco");
    } else {
      setPocco("");
    }
  };

  const handleLenovo = (e) => {
    if (e.target.checked) {
      setLenovo("Lenovo");
    } else {
      setLenovo("");
    }
  };

  //FEATURES

  const handleMetallic = (e) => {
    if (e.target.checked) {
      setMetallic("Metallic");
    } else {
      setMetallic("");
    }
  };

  const handlePlastic = (e) => {
    if (e.target.checked) {
      setPlastic("Plastic Cover");
    } else {
      setPlastic("");
    }
  };

  const handleRam = (e) => {
    if (e.target.checked) {
      setRam("8GB Ram");
    } else {
      setRam("");
    }
  };

  const handlePower = (e) => {
    if (e.target.checked) {
      setPower("Super power");
    } else {
      setPower("");
    }
  };

  const handleMemory = (e) => {
    if (e.target.checked) {
      setMemory("Large memory");
    } else {
      setMemory("");
    }
  };

  return (
    <div className="w-[240px]   hidden md:block mb-4">
      <div className=" border-y-1 border-gray-400 pt-4 pb-4">
        <div
          className="flex justify-between  cursor-pointer "
          onClick={() => setOpen(!open)}
        >
          <h3 className="font-semibold">Category</h3>
          <KeyboardArrowUpIcon
            className={`transition-transform duration-300 ${
              open ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>

        {open && (
          <ul className="mt-2 space-y-3 text-gray-700">
            <li>Mobile accessory</li>
            <li>Electronics</li>
            <li>Smartphones</li>
            <li>Modern tech</li>
            <li className="text-blue-500 cursor-pointer">See all</li>
          </ul>
        )}
      </div>
      {/* BRAND */}
      <div className="  border-y-1 border-gray-400 pt-4 pb-4">
        <div
          className="flex justify-between  cursor-pointer "
          onClick={() => setopenBrand(!openBrand)}
        >
          <h3 className="font-semibold">Brands</h3>
          <KeyboardArrowUpIcon
            className={`transition-transform duration-300 ${
              openBrand ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>

        {openBrand && (
          <ul className="mt-2 space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <input type="checkbox" onClick={handleSamsung} />
              <p className="mt-[-7px]">Samsung</p>
            </li>
            <li className="flex items-center gap-3">
              <input type="checkbox" onClick={handleApple} />
              <p className="mt-[-7px]">Apple</p>
            </li>
            <li className="flex items-center gap-3">
              <input type="checkbox" onClick={handlehuawei} />
              <p className="mt-[-7px]">Huawei</p>
            </li>
            <li className="flex items-center gap-3">
              <input type="checkbox" onClick={handlePocco} />
              <p className="mt-[-7px]">Pocco</p>
            </li>
            <li className="flex items-center gap-3">
              <input type="checkbox" onClick={handleLenovo} />
              <p className="mt-[-7px]">Lenovo</p>
            </li>
            <li className="text-blue-500 cursor-pointer">See all</li>
          </ul>
        )}
      </div>
      {/* FEATURES */}
      <div className=" border-y-1 border-gray-400 pt-4 pb-4">
        <div
          className="flex justify-between  cursor-pointer "
          onClick={() => setOpenFeatures(!openFeatures)}
        >
          <h3 className="font-semibold">Features</h3>
          <KeyboardArrowUpIcon
            className={`transition-transform duration-300 ${
              openFeatures ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>

        {openFeatures && (
          <ul className="mt-2 space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <input type="checkbox" onClick={handleMetallic} />
              <p className="mt-[-7px]">Metallic</p>
            </li>
            <li className="flex items-center gap-3">
              <input type="checkbox" onClick={handlePlastic} />
              <p className="mt-[-7px]">Plastic cover</p>
            </li>
            <li className="flex items-center gap-3">
              <input type="checkbox" onClick={handleRam} />
              <p className="mt-[-7px]">8GB Ram</p>
            </li>
            <li className="flex items-center gap-3">
              <input type="checkbox" onClick={handlePower} />
              <p className="mt-[-7px]">Super power</p>
            </li>
            <li className="flex items-center gap-3">
              <input type="checkbox" onClick={handleMemory} />
              <p className="mt-[-7px]">Large memory</p>
            </li>
            <li className="text-blue-500 cursor-pointer">See all</li>
          </ul>
        )}
      </div>

      <div className=" border-y-1  border-gray-400 p-3">
        {/* Header */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpenRange(!openRange)}
        >
          <h3 className="font-semibold">Price range</h3>
          <KeyboardArrowUpIcon
            className={`transition-transform duration-300 ${
              openRange ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>

        {openRange && (
          <div className="mt-4">
            {/* Slider */}
            <div className="relative h-6">
              {/* Track */}
              <div className="absolute top-1/2 w-full h-1 bg-blue-200 rounded -translate-y-1/2" />

              {/* Range fill */}
              <div
                className="absolute top-1/2 h-1 bg-blue-600 rounded -translate-y-1/2 "
                style={{
                  left: `${(min / MAX_LIMIT) * 100}%`,
                  right: `${100 - (max / MAX_LIMIT) * 0}%`,
                }}
              />

              {/* Min */}
              <input
                type="range"
                min={MIN_LIMIT}
                max={MAX_LIMIT}
                value={min}
                onChange={(e) =>
                  setMin(Math.min(Number(e.target.value), max - 1))
                }
                className="absolute bottom-1 w-full pointer-events-none appearance-none  bg-transparent"
              />

              {/* Max */}
              <input
                type="range"
                min={MIN_LIMIT}
                max={MAX_LIMIT}
                value={max}
                onChange={(e) =>
                  setMax(Math.max(Number(e.target.value), min + 1))
                }
                className="absolute bottom-1 w-full appearance-none bg-transparent "
              />
            </div>

            {/* Values */}
            <div className="flex justify-between gap-2 text-sm text-gray-600 mt-3">
              <div>
                <div>Min</div>
                <div className="bg-white px-3 py-1 w-[111px] h-[40px] flex items-center rounded-md border border-gray-300">
                  {min}
                </div>
              </div>
              <div>
                <div>Max</div>
                <div className="bg-white px-3 py-1 w-[111px] h-[40px] flex items-center rounded-md border border-gray-300">
                  {max}
                </div>
              </div>
            </div>
            <button className="bg-white w-[228px] h-[40px] rounded-md border border-gray-300 mt-2 text-blue-600 cursor-pointer">
              Apply
            </button>
          </div>
        )}
      </div>

      <div className=" pt-4 pb-4 border-y-1 border-gray-400">
        <div
          className="flex justify-between  cursor-pointer "
          onClick={() => setOpenCondition(!openCondition)}
        >
          <h3 className="font-semibold">Conditions</h3>
          <KeyboardArrowUpIcon
            className={`transition-transform duration-300 ${
              openCondition ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
        {openCondition && (
          <ul className="mt-2 space-y-3 text-gray-700">
            <li>
              <input type="radio" name="condition" className="bg-blue-800" />{" "}
              Any
            </li>
            <li>
              <input type="radio" name="condition" /> Refurbished
            </li>
            <li>
              <input type="radio" name="condition" /> Brand New
            </li>
            <li>
              <input type="radio" name="condition" /> Old items
            </li>
            <li className="text-blue-500 cursor-pointer">See all</li>
          </ul>
        )}
      </div>

      <div className="border-y-1 pt-4 pb-4  border-gray-400">
        <div
          className="flex justify-between "
          onClick={() => setOpenRating(!openRating)}
        >
          <h1 className="font-semibold ">Rating</h1>
          <KeyboardArrowUpIcon
            className={`transition-transform duration-300 ${
              openRating ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
        {openRating && (
          <div>
            <div>
              <label className="custom-radio">
                <input type="radio" name="option" />
                <span className="box"></span>
                <span className="ml-3 text-[#FF9017] text-xl"> ★ ★ ★ ★ ★</span>
                <span className=" text-gray-400 text-xl"> </span>
              </label>
            </div>
            <div>
              <label className="custom-radio">
                <input type="radio" name="option" />
                <span className="box"></span>
                <span className="ml-3 text-[#FF9017] text-xl"> ★ ★ ★ ★</span>
                <span className=" text-gray-400 text-xl"> ★ </span>
              </label>
            </div>
            <div>
              <label className="custom-radio">
                <input type="radio" name="option" />
                <span className="box"></span>
                <span className="ml-3 text-[#FF9017] text-xl"> ★ ★ ★</span>
                <span className=" text-gray-400 text-xl"> ★ ★ </span>
              </label>
            </div>
            <div>
              <label className="custom-radio flex items-center ">
                <input type="radio" name="option" />
                <span className="box"></span>
                <span className="ml-3 text-[#FF9017] text-xl"> ★ ★</span>
                <span className=" text-gray-400 text-xl"> ★ ★ ★ </span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListSideBar;
