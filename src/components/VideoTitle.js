import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-[10%] px-24 absolute bg-gradient-to-r from black ">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className=" py-6 w-1/4 text-lg text-white">{overview}</p>
      <div className="">
        <button className=" bg-white   p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>

        <button className=" mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
