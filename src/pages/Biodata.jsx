import React from "react";
import Header from "../components/Header";
import BiodataCard from "../components/BiodataCard";
import {
  FiChevronRight,
  FiHome,
  FiLinkedin,
  FiMail,
  FiMap,
  FiPhone,
  FiUser,
} from "react-icons/fi";
import dataBio from "../constans/dataBio";
import { FaFirefoxBrowser } from "react-icons/fa";
import ModalMenu from "../components/ModalMenu";

export default function Biodata() {
  const handleIcons = (name) => {
    switch (name) {
      case "phone":
        return <FiPhone />;
      case "email":
        return <FiMail />;
      case "linkedin":
        return <FiLinkedin />;
      case "web":
        return <FaFirefoxBrowser />;
      case "alamat":
        return <FiMap />;
      default:
        return <FiChevronRight />;
    }
  };

  return (
    <div className="w-screen  flex flex-col p-[30px] bg-[#212121] text-orange-400 overflow-hidden relative max-w-[500px] mx-auto">
      <Header title={"Biodata"} />
      <div className="flex flex-col mt-[50px] justify-center items-center relative ">
        <img
          className="rounded-full object-cover"
          src="https://media.licdn.com/dms/image/D5603AQG4pQDbqDx9lw/profile-displayphoto-shrink_200_200/0/1708912675746?e=1720656000&v=beta&t=vimzuNOaQF0k73xl4RpBuUhQw0Q2sGK-bNSXIDF4FWs"
          alt="alim"
        />
        <div className="border-orange-400 w-[220px] h-[220px] border-[3px] rounded-full border-dotted absolute"></div>
      </div>
      <div className="mt-6 gap-10 flex flex-col mb-[100px] ">
        {dataBio.map((data) => (
          <BiodataCard
            key={data.id}
            label={data.label}
            value={data.value}
            icons={data.icons && handleIcons(data.icons)}
            link={data.link}
          />
        ))}
      </div>
      <ModalMenu />
    </div>
  );
}
