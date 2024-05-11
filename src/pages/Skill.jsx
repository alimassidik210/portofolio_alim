import React from "react";
import Header from "../components/Header";
import ModalMenu from "../components/ModalMenu";
import SkillCard from "../components/SkillCard";
import dataSkill from "../constans/dataSkill";

export default function Skill() {
  return (
    <div className="w-screen min-h-screen flex flex-col p-[30px] relative bg-[#212121]  overflow-hidden  sm:max-w-[490px] mx-auto">
      <Header title={"Skill"} />
      <div className="flex flex-col gap-4 mt-12">
        {dataSkill &&
          dataSkill.map((data) => (
            <SkillCard
              key={data.id}
              title={data.title}
              content={data.content}
              image={data.image}
              link={data.link}
            />
          ))}
      </div>
      <ModalMenu />
    </div>
  );
}
