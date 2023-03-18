import React from "react";
import { skills } from "./skills-list";

interface Props {}

const Skills = (props: Props) => {
  return (
    <div className="container px-4 xl:px-0 mx-auto py-12 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl underline underline-offset-4 font-display font-bold">
          Skills
        </h2>
      </div>
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <div
            className="w-full sm:w-1/3 px-4 mb-8 flex flex-col justify-center items-center text-center"
            key={skill.id}
          >
            {skill.icon({
              className: "text-4xl mb-2",
            })}
            <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
            <p className="text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
