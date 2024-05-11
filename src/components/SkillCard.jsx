import React from "react";
import { Link } from "react-router-dom";

export default function SkillCard({ title, image, content, link, multiLink }) {
  return (
    <div className="bg-white w-full flex flex-col gap-2 p-[20px] rounded-lg shadow-lg">
      <h1 className="text-[16px] font-bold capitalize">{title}</h1>
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] object-cover rounded-lg"
      />
      <p className="font-light">{content}</p>
      {link && (
        <Link
          to={link}
          className="h-10 bg-orange-400 rounded-full w-[180px] flex flex-col justify-center items-center mx-auto"
        >
          Lihat Portofolio
        </Link>
      )}
      {multiLink && (
        <div className="mt-4 text-sky-500 flex flex-wrap justify-between">
          {multiLink.map((i) => {
            return (
              <a
                href={i.url}
                id={i.id}
                target="_blak"
                className="mitalic hover:text-neutral-500"
              >
                {i.name}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
