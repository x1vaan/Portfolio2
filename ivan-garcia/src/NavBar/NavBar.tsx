import React from "react";
import Navcss from './NavBar.module.css'
import logo from '../images/tg.svg'

export default function NavBar (): JSX.Element {
   return (
    <nav className={Navcss.nav}>
      <img src={logo} alt="Image not found" className={Navcss.img}/>
      <ul className={Navcss.list}>
         <li>About</li>
         <li>Projects</li>
         <li>Contact</li>
      </ul>
    </nav>
   )
}