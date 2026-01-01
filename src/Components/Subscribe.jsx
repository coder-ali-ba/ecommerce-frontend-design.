import React from "react";

function Subscribe() {
  return (
    <div className="w-full py-18 text-center bg-[#EFF2F4] hidden md:block">
      <h1 className="text-xl font-bold">Subscribe on our newsletter</h1>
      <p>
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <div>
        <input type="text" className="h-[40px] w-[274px] mr-2 mt-4 bg-white" />
        <button className="bg-blue-600 h-[40px] rounded-md text-white py-2 px-4">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
