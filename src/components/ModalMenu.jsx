import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ModalMenu() {
  const [show, setShow] = useState(false);

  const handleShowMenu = () => {
    setShow(!show);
  };
  return (
    <>
      {show && (
        <div className="w-screen h-screen fixed flex top-0 left-0 flex-col justify-center items-center z-[200] bg-[#212121] opacity-95 sm:max-w-[500px] mx-auto">
          <Link
            to={"/biodata"}
            className="w-full h-16 flex justify-center items-center text-orange-400 font-bold"
            onClick={handleShowMenu}
          >
            Biodata
          </Link>
          <Link
            to={"/skill"}
            className="w-full h-16 flex justify-center items-center text-orange-400 font-bold"
            onClick={handleShowMenu}
          >
            Skill
          </Link>
          <a
            href={"https://wa.me/6281934572861?text=assamualaikum"}
            target="_blank"
            className="w-full h-16 flex justify-center items-center text-orange-400 font-bold"
            onClick={handleShowMenu}
          >
            Contact
          </a>
          <a
            href={"https://www.linkedin.com/in/alim-assidik-960b401b2/"}
            target="_blank"
            className="w-full h-16 flex justify-center items-center text-orange-400 font-bold"
            onClick={handleShowMenu}
          >
            LInkedIn
          </a>
          <a
            href={"https://github.com/alimassidik210/"}
            target="_blank"
            className="w-full h-16 flex justify-center items-center text-orange-400 font-bold"
            onClick={handleShowMenu}
          >
            Github
          </a>
          <a
            href={"https://stackblitz.com"}
            target="_blank"
            className="w-full h-16 flex justify-center items-center text-orange-400 font-bold"
            onClick={handleShowMenu}
          >
            Stackblitz
          </a>
        </div>
      )}
      <button
        className="w-[80px] h-[80px] bg-orange-400 text-gray-800 rounded-full fixed -bottom-4 -right-4 items-center justify-center flex z-[250]"
        onClick={handleShowMenu}
      >
        <FiMenu />
      </button>
    </>
  );
}
