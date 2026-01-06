import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Category from "../Components/Category";
import TopBar from "../Components/Filter";
import ListBar from "../Components/ListBar";
import ListSideBar from "../Components/ListSideBar";
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";
import ListView from "../Components/ListView";
import GridView from "../Components/GridView";


function ListPage() {
  const [view, setView] = useState(false);
  const handleView = () => {
    setView(!view);
  };

   const [brandName , setName ] = useState("")
  
   
 console.log(brandName);
 


  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-200 ">
        <TopBar />
        <ListBar />
        <div className="w-full bg-gray-200 lg:w-[90%]  mt-3 m-auto flex gap-4">
          <ListSideBar setData={setName}/>
          <div className=" w-full">
            <div className="h-[62px] p-3 rounded-md w-full  flex items-center justify-between bg-white border border-gray-200">
              <p>
                12,911 items in{" "}
                <span className="font-bold">Mobile accessory</span>
              </p>
              <div className="flex justify-between gap-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="font-bold" />
                  <p>Verified Only</p>
                </div>
                <div>
                  <select
                    name="featured"
                    id=""
                    className="h-[40px] ring-1 rounded-md py-1 px-2"
                  >
                    <option value="Featured">Featured</option>
                  </select>
                </div>
                <div className="flex items-center ring-1 rounded-md p-2">
                  <div className="cursor-pointer" onClick={handleView}>
                    <MenuIcon />
                  </div>
                  <div className="cursor-pointer" onClick={handleView}>
                    <GridViewIcon />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[32px] w-[90%] border">
              <p>{brandName}</p>
            </div>

            <div className="w-full h-[400px] border">
              {view ? <ListView /> : <GridView />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListPage;
