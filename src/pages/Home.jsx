import React from "react";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen  flex flex-col p-[30px] bg-[#212121] text-orange-400 overflow-hidden relative max-w-[500px] mx-auto">
      <h1 className="text-[36px] font-light">Hello...</h1>

      <div className="my-8 relative flex flex-col items-center">
        <div className="bg-[url(https://media.licdn.com/dms/image/D5603AQG4pQDbqDx9lw/profile-displayphoto-shrink_200_200/0/1708912675746?e=1720656000&v=beta&t=vimzuNOaQF0k73xl4RpBuUhQw0Q2sGK-bNSXIDF4FWs)] w-[500px] h-[500px] bg-cover rounded-full "></div>

        <div className="border-orange-400 border-[6px] w-[530px] h-[530px] rounded-full absolute -top-[15px] "></div>
      </div>
      <div className="mb-[100px]">
        <h1 className="text-[36px] font-light">
          Saya <br /> Alim Assidik
        </h1>
        <p className="text-[16px] font-light">Seorang Web Developer</p>
        <Link
          to={"/biodata"}
          className="w-[80px] h-[80px] bg-orange-400 text-gray-800 rounded-full fixed -bottom-4 -right-4 items-center justify-center flex"
        >
          <FiPlay className="text-[42px]" />
        </Link>
      </div>
    </div>
  );
}
