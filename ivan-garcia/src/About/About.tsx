import React from "react";
import { Link } from "react-scroll";
import Ivan from '../images/Ivan.jpg'
import Aboutcss from './About.module.css'

export default function About (): JSX.Element {
    return (
        <div id="about" className={Aboutcss.container}>
            <p className={Aboutcss.aboutme}>About Me</p>
        <p className={Aboutcss.about}>
         Hi! My name is Ivan, I am a 20 years old Junior Full Stack developer from Argentina.<br/>
         <br/>
        I'm a Positive, empathic and curious person, always trying to 
        get better. I like outdoor activites, photography and swimming. <br/>
        I started programming in May 2022 when i entered in a Full 
        Stack Developer Bootcamp and gain experience working on some projects. <br/>
        I'm currently looking for a job where i can grow professionally, learn and improve. If you want
        to hire me, <Link to="contactme" smooth={true} duration={500}><span className={Aboutcss.get}>Get in Touch</span></Link> with me.
        
        </p>
        <div className={Aboutcss.divphoto}>
         <div className={Aboutcss.content}>
         <img src={Ivan} alt="Image not Found"/>
         <h2>Ivan Garcia <br/> <span>Full Stack/Backend Developer</span> </h2>
        <Link to="contactme" smooth={true} duration={500}> <p>Hire me</p> </Link>
         </div>
        </div>
       <p className={Aboutcss.stack}>
        Technologies that i have been working with:
       </p>

        <ul className={Aboutcss.stacklist}>
            <li>JavaScript (ES6+)</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>Express.js</li>
            <li>React</li>
            <li>PostgreSQL</li>
            <li>Redux</li>
            <li>MongoDB</li>
        </ul>

        </div>
    )
}