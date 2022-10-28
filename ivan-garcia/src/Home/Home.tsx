import React, {useState, ChangeEvent} from "react";
import NavBar from "../NavBar/NavBar";
import Homecss from "./Home.module.css"
import { GoMarkGithub } from 'react-icons/go'
import {RiLinkedinFill,RiInstagramLine} from 'react-icons/ri'
import {AiOutlineDownload} from 'react-icons/ai'
import About from "../About/About";
import Project from "../Projects/Projects";
import Contact from "../Contact/Contact";


export default function Home (): JSX.Element {
  const [language, setlanguage] = useState('Spanish');

  const onchange = (e: ChangeEvent<HTMLSelectElement>) => {
      setlanguage(e.target.value)
  }
  
    return (
       <div className={Homecss.container}>
         <p className={Homecss.hello}>Hello, my name is</p>
         <p className={Homecss.name}>Sergio Ivan Garcia.</p>
         <p className={Homecss.callme}>(But you can call me Ivan :p)</p>
         <p className={Homecss.area}>
          I am a Junior Full Stack Developer who wants to specialize on<br/>
          <span className={Homecss.back}>Back-end Development. </span>
          Currently living in <span className={Homecss.location}> Buenos Aires, Argentina.</span>
          </p>
         <a href="https://github.com/x1vaan"><GoMarkGithub className={Homecss.github}/></a>
         <a href="https://www.linkedin.com/in/sergio-ivan-garcia/"><RiLinkedinFill className={Homecss.linkedin}/></a>
         <a href="https://www.instagram.com/_garciaivann/"><RiInstagramLine className={Homecss.instagram}/></a>
         <a 
         href={ language === 'Spanish' ? "Sergio Ivan Garcia CV - Full Stack - Backend Developer.pdf" : "Sergio Ivan Garcia CV PT.pdf" } 
         download={language === 'Spanish' ? "Sergio Ivan Garcia CV - Full Stack - Backend Developer.pdf" : "Sergio Ivan Garcia CV PT.pdf"}
         >
          <button className={Homecss.cv}><AiOutlineDownload className={Homecss.download}/> Get CV</button>
          </a> 
         <select name="selectlanguage" id="selectlanguage" onChange={onchange} className={Homecss.select}>
          <option value="Spanish">Spanish</option>
          <option value="Portuguese">Portuguese</option>
         </select>
       </div> 
    )
}