import React from "react";
import ProjectCard from "../../ProjectCard";
import { projects } from "@/app/data/data";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-gradient2 min-h-[100vh] py-4 lg:px-4 lg:grid lg:grid-cols-2 gap-4 max-w-[1374px] mx-auto"
    >
      <h2 className="pt-16 lg:col-span-2">
        <span>Projects</span>
      </h2>
      {projects.map((item, i) => {
        return (
          <ProjectCard
            key={i}
            title={item.title}
            image={item.image}
            description={item.description}
            tech={item.tech}
            link={item.link}
            github={item.github}
          />
        );
      })}
    </div>
  );
};

export default Projects;
