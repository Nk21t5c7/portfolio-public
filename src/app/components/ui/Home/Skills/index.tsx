import React from "react";
import SkillCard from "../../SkillCard";
import { skillsCards } from "@/app/data/data";

const Skills = () => {
  return (
    <div className="bg-gradient-to-b from-gradient2 to-secondary-background min-h-[100vh] p-4">
      <div
        id="skills"
        className=" py-4  max-w-[1374px] mx-auto md:grid md:grid-cols-2 gap-4 min-h-[100vh] content-center"
      >
        <h2 className="pt-16 col-span-2">
          <span>Skills</span>
        </h2>
        {skillsCards.map((skill) => {
          return (
            <SkillCard
              key={skill.title}
              skillTitle={skill.title}
              skillIcon={skill.icon}
              skillArray={skill.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
