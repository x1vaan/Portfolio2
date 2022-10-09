import React from "react";
import Projectcss from './Projects.module.css'
import Videogame from '../images/Videogames-App.png'
import FitFocus from '../images/Fit-Focus.png'

export default function Project (): JSX.Element {

  return (
    <div>
      <p className={Projectcss.projects}>Projects</p>

      <div className={Projectcss.container}>
            <a href="https://videogames-project-topaz.vercel.app/"><p className={Projectcss.name}>Videogames-App</p></a> 
             <p className={Projectcss.des}>
              A web app for visualizing and interact with information of 100 games, <span>consuming</span> the RAWG <span>API.</span>  
             <span> Manipulating database</span> storing the information of each game, can <span>create</span> a new videogame, seachbar 
             and sorting filters.
             </p>
        </div>     
    
        <div className={Projectcss.container}>
           <a href="https://pf-app-five.vercel.app/"><p className={Projectcss.name}>Fit-Focus</p></a>  
             <p className={Projectcss.des}>
              A web app to do exercises and keep an <span>active lifestyle</span>, with a 
              <span> Personalized Routine</span>, news, tips and more!. 
              </p>
        </div>     
       <a href="https://videogames-project-topaz.vercel.app/">
       <img src={Videogame} alt="Image not found" className={Projectcss.videogamesapp}/>
       </a>
       <a href="https://pf-app-five.vercel.app/">
       <img src={FitFocus} alt="Image not found" className={Projectcss.fitfocus}/>
       </a>
       
       <ul className={Projectcss.listvideogames}>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>PostgreSQL</li>
        <li>React</li>
        <li>Redux</li>
        <li>CSS</li>
       </ul>

       <ul className={Projectcss.listfitfocus}>
       <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>JWT Auth</li>
       </ul>
    </div>
  )
}