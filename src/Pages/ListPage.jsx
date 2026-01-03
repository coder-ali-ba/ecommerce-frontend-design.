import React from "react";
import Navbar from "../Components/Navbar";
import Category from "../Components/Category";
import TopBar from "../Components/Filter";
import ListBar from "../Components/ListBar";
import ListSideBar from "../Components/ListSideBar";
import ListFilter from "../Components/ListFilter";

function ListPage() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-200 ">
        <TopBar />
        <ListBar />
        <div className="w-full bg-gray-200 lg:w-[90%]  mt-3 m-auto flex gap-4">
          <ListSideBar />
          <div className=" w-full">
            <ListFilter />
          </div>
        </div>
      </div>
    </>
  );
}

export default ListPage;
