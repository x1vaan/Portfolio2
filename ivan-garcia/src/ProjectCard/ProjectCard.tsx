import React from "react";
import cssC from './ProjectCard.module.css'

interface Props {
    name : string,
    description: string,
    technologies: string[],
    image: string,
    link : string
}

export default function ProjectCard ({name,description,technologies,image,link}:Props): JSX.Element {
    return (
        <div className={cssC.containerP}>
        <a href={link}> <img src={require(`../images/${image}`)} alt="Image not found" className={cssC.image}/> </a>
        <p className={cssC.name}>{name}</p>
         <div className={cssC.description}>
            <p className={cssC.text}>{description}</p>
         </div>
         <div className={cssC.containerTechnologies}>
         <p className={cssC.technologies}>{technologies.join(' ')}</p>
         </div>
        </div>
    )
}