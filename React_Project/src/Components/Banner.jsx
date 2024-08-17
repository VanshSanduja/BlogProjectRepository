import React from "react";
import bannerImage from "../Images/banner-image.jpg";

function Banner() {
  return (
    <div
      className="h-[400px] flex flex-row md:px-32 px-5 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="justify-center items-center mt-[130px]">
        <h1 className="text-7xl text-blue-300 mb-2">NovelNest</h1>
        <p className="text-2xl text-[#fff]">The Reader's Club - Read the right thing</p>
      </div>
    </div>
  );
}

export default Banner;
