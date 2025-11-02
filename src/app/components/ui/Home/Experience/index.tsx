"use client";

import React from "react";
import ExperienceCard from "../../ExperienceCard";
import useWindowSize from "@/app/hooks/useWindowSize";
import { GoDot } from "react-icons/go";
import { experiences } from "@/app/data/data";

const Experience = () => {
  const width = useWindowSize();

  return (
    <div
      id="experience"
      className="bg-gradient-to-b from-gradient2 to-secondary-background min-h-[100vh] py-4 flex justify-center flex-wrap "
    >
      <h2 className="pt-16 basis-full">
        <span>Experience</span>
      </h2>
      <div
        className={`flex justify-center items-start min-h-screen py-8 px-4 ${
          width && width > 1024 ? "gap-8 max-w-7xl mx-auto" : ""
        }`}
      >
        {width && width > 1024 ? (
          <>
            <div className="flex flex-col gap-6 w-1/2">
              {experiences
                .filter((_, i) => i % 2 === 0)
                .map((item, i) => (
                  <ExperienceCard key={i} {...item} />
                ))}
            </div>
            <div className="w-px bg-dark-blue mx-4 h-full" />
            <div className="flex flex-col gap-6 w-1/2">
              {experiences
                .filter((_, i) => i % 2 === 1)
                .map((item, i) => (
                  <ExperienceCard key={i} {...item} />
                ))}
            </div>
          </>
        ) : (
          <>
            <div className="w-[3px] bg-dark-blue h-full" />
            <div className="flex flex-col gap-6">
              {experiences.map((item, i) => (
                <ExperienceCard key={i} {...item} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Experience;
