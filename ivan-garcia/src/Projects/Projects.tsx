import React from "react";
import Projectcss from './Projects.module.css'
import projects from "../projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import { link } from "fs";

export default function Project (): JSX.Element {

  return (
    <div id="projects" className={Projectcss.project}>
      <p className={Projectcss.projects}>Projects</p>
       {
        projects.map(project => {
          return <ProjectCard 
          name={project.name} 
          description={project.description} 
          technologies={project.technologies} 
          image={project.image}
          link={project.link}
          key={project.name}
          />
        })
       }
    </div>
  )
}