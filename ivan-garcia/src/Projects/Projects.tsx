import React from "react";
import Projectcss from './Projects.module.css'
import projects from "../works";

export default function Project (): JSX.Element {

  return (
    <div>
      <p className={Projectcss.projects}>Projects</p>
    </div>
  )
}