import React from "react";

export default function Header({ title }) {
  return (
    <div className="flex w-full px-[30px] h-[50px] bg-orange-400  items-center absolute max-w-[500px] mx-auto top-0 left-0">
      <h1 className="text-[16px] font-bold text-gray-800 capitalize">
        {title}
      </h1>
    </div>
  );
}
