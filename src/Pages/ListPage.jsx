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
import ClearIcon from '@mui/icons-material/Clear';



function ListPage() {
  const [view, setView] = useState(false);
  const handleView = () => {
    setView(!view);
  };
          //  SET BRANDS
   const [brandName , setName ] = useState("")
   const [brandApple , setBrandApple ] = useState("")
   const [brandHuawei , setBrandHuawei ] = useState("")
   const [brandPocco , setBrandPocco ] = useState("")
   const [brandLenovo , setBrandLenovo ] = useState("")
    
         //SET FEATURES
  
   const[featMetallic , setFeatMetallic] = useState("")
   const[featPlastic , setFeatPlastic] = useState("")
   const[featRam , setFeatRam] = useState("")
   const[featPower , setFeatPower] = useState("")
   const[featMemory , setFeatMemory] = useState("")
   

 


  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-200 ">
        <TopBar />
        <ListBar />
        <div className="w-full bg-gray-200 lg:w-[90%]  mt-3 m-auto flex gap-4">
          <ListSideBar 
          setData={setName} 
          setApp={setBrandApple} 
          setHuawei={setBrandHuawei} 
          setPocco={setBrandPocco} 
          setLenovo={setBrandLenovo}
          setMetallic={setFeatMetallic}
          setPlastic={setFeatPlastic}
          setRam={setFeatRam}
          setPower={setFeatPower}
          setMemory={setFeatMemory}
          />
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


             {/* UPPER FILTERS DESC */}
            <div className=" w-[90%] mt-4  mb-4 hidden md:flex flex-wrap items-center gap-4">
              { brandName && 
                              <div className="flex items-center h-full justify-between  border w-fit px-2 border-blue-500 rounded ">
                   <p className="">{brandName}</p>
                   <p><ClearIcon fontSize="small" className="pb-1 "/></p>
                 </div>
                 
              }  
              {
                brandApple && 
                <div className="flex items-center h-full justify-between  border w-fit px-2 border-blue-500 rounded ">
                   <p className="">{brandApple}</p>
                   <p><ClearIcon fontSize="small" className="pb-1 "/></p>
                 </div>
                 
              }      

              {
                brandHuawei && 
                <div className="flex items-center h-full justify-between  border w-fit px-2 border-blue-500 rounded ">
                   <p className="">{brandHuawei}</p>
                   <p><ClearIcon fontSize="small" className="pb-1 "/></p>
                 </div>
                 
              }    

              {
                brandPocco && 
                <div className="flex items-center h-full justify-between  border w-fit px-2 border-blue-500 rounded ">
                   <p className="">{brandPocco}</p>
                   <p><ClearIcon fontSize="small" className="pb-1 "/></p>
                 </div>
                 
              }   

              {
                brandLenovo && 
                <div className="flex items-center h-full justify-between  border w-fit px-2 border-blue-500 rounded ">
                   <p className="">{brandLenovo}</p>
                   <p><ClearIcon fontSize="small" className="pb-1 "/></p>
                 </div>
                 
              }      
              {
                featMetallic && 
                <div className="flex items-center h-full justify-between  border w-fit px-2 border-blue-500 rounded ">
                   <p className="">{featMetallic}</p>
                   <p><ClearIcon fontSize="small" className="pb-1 "/></p>
                 </div>
                 
              }  
              {
                featPlastic && 
                <div className="flex items-center h-full justify-between  border w-fit px-2 border-blue-500 rounded ">
                   <p className="">{featPlastic}</p>
                   <p><ClearIcon fontSize="small" className="pb-1 "/></p>
                 </div>
                 
              }  
              {
                featRam && 
                <div className="flex items-center h-full justify-between  border w-fit px-2 border-blue-500 rounded ">
                   <p className="">{featRam}</p>
                   <p><ClearIcon fontSize="small" className="pb-1 "/></p>
                 </div>
                 
              } 
              {
                featPower && 
                <div className="flex items-center h-full justify-between  border w-fit px-2 border-blue-500 rounded ">
                   <p className="">{featPower}</p>
                   <p><ClearIcon fontSize="small" className="pb-1 "/></p>
                 </div>
                 
              }   
              {
                featMemory && 
                <div className="flex items-center h-full justify-between  border w-fit px-2 border-blue-500 rounded ">
                   <p className="">{featMemory}</p>
                   <p><ClearIcon fontSize="small" className="pb-1 "/></p>
                 </div>
                 
              }            
            </div>



            <div className="w-full  ">
              {view ? <ListView /> : <GridView />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListPage;
