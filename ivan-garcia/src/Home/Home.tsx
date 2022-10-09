import React from "react";
import NavBar from "../NavBar/NavBar";
import Homecss from "./Home.module.css"
import { GoMarkGithub } from 'react-icons/go'
import {RiLinkedinFill,RiInstagramLine} from 'react-icons/ri'
import {AiOutlineDownload} from 'react-icons/ai'
import About from "../About/About";
import Project from "../Projects/Projects";
import Contact from "../Contact/Contact";


export default function Home (): JSX.Element {
    return (
       <div>
         <NavBar/>
         <p className={Homecss.hello}>Hello, my name is</p>
         <p className={Homecss.name}>Sergio Ivan Garcia.</p>
         <p className={Homecss.callme}>(But you can call me Ivan :p)</p>
         <p className={Homecss.area}>I am a Junior Full Stack Developer who wants to specialize on</p>
         <p className={Homecss.area2}> <span className={Homecss.back}>Back-end Development.</span> Currently living in 
         <span className={Homecss.location}> Buenos Aires, Argentina.</span>
         </p>

         <a href="https://github.com/x1vaan"><GoMarkGithub className={Homecss.github}/></a>
         <a href="https://www.linkedin.com/in/sergio-ivan-garcia/"><RiLinkedinFill className={Homecss.linkedin}/></a>
         <a href="https://www.instagram.com/_garciaivann/"><RiInstagramLine className={Homecss.instagram}/></a>
         <button className={Homecss.cv}><AiOutlineDownload className={Homecss.download}/> Get CV</button>
         
         <About/>
         <Project/>
         <Contact/>
       </div> 
    )
}