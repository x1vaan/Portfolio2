import React from "react";
import Ivan from '../images/Ivan.jpg'
import Aboutcss from './About.module.css'

export default function About (): JSX.Element {
    return (
        <div>
            <p className={Aboutcss.aboutme}>About Me</p>
        <p className={Aboutcss.about}>
         Hi! My name is Ivan and i am a Junior Full Stack developer from Argentina.<br/>
         <br/>
        I'm a Positive, empathic and curious person,always trying to 
        get better. I like outdoor activites, photography and swimming. <br/>
        I started programming in May 2022 when i entered in a Full 
        Stack Developer Bootcamp and gain experience working on some projects. <br/>
        I'm currently looking for a job to grow as a professional, learn and improve. If you want
        to hire me, Get in Touch with me.
        
        </p>
       <img src={Ivan} alt="Image not Found" className={Aboutcss.photo}/>
       <p className={Aboutcss.stack}>
        Technologies that i have been working with:
       </p>

        <ul className={Aboutcss.stacklist}>
            <li>JavaScript (ES6+)</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>React</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
        </ul>

        </div>
    )
}