import React from "react";
import Skill from "../shared/Skill/Skill";
import { skills as mySkills } from "@/utils/data";
import Title from "../shared/Title/Title";
import Discription from "../shared/Description/Discription";

const Skills = () => {
  return (
    <div
      className="flex justify-center items-center relative z-10 flex-col"
      id="Skills"
    >
      <div className="relative flex flex-col  justify-between items-center w-full max-w-[1100px] gap-3">
        <Title label=" Skills" />
        {/* description */}
        <Discription text="Here are some of my skills on which I have been working on for the
          past 1.5 years."/>
        
        {/* skills container */}
        <div className="w-full flex flex-wrap mt-7 gap-7 justify-center">
          {mySkills.map((skills) => (
            <Skill key={skills} skills={skills} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
