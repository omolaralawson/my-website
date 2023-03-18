import { Link } from "gatsby";
import React from "react";
import { projects } from "./project-list";

interface Props {}

const Projects = (props: Props) => {
  return (
    <div className="container mx-auto py-20 border-b border-slate-300">
      <div className="text-center mb-12">
        <h2 className="text-4xl mb-2 font-display font-bold">My Projects</h2>
        <p>Take a look at my recent work.</p>
      </div>
      <div className="flex flex-wrap">
        {projects.map((project) => (
          <Link
            to={project.slug}
            className="w-1/3 group px-4 mb-12 flex flex-col justify-center items-centerr"
            key={project.id}
          >
            <img className="mb-4" src={project.image} alt={project.title} />
            <h3 className="font-semibold group-hover:text-pink-900 group-hover:underline text-lg mb-4">
              {project.title}
            </h3>
            <p className="text-sm">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
