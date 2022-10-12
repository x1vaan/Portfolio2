import React,{useState} from "react";
import Navcss from './NavBar.module.css';
import logo from '../images/tg.svg';
import { Link } from 'react-scroll';

 
export default function NavBar (): JSX.Element {
  const [buttonState, setButtonState] = useState<string>('desactive')
  const onclick = ()  => {
       buttonState === 'active' ? setButtonState('desactive') : setButtonState('active') 
  }
   return (
    <nav className={Navcss.nav}>
      <img src={logo} alt="Image not found" className={Navcss.img}/>
      <a href="#" className={Navcss.button} onClick={onclick}>
     <span className={Navcss.bar}></span>
     <span className={Navcss.bar}></span>
     <span className={Navcss.bar}></span>
      </a>

      <div className={buttonState === 'active' ? Navcss.navlistactive : Navcss.navlist}>
      <ul className={Navcss.list}>
       <Link to="about" smooth={true} duration={500}> <li>About</li></Link>  
       <Link to="projects" smooth={true} duration={500}> <li>Projects</li></Link>  
       <Link to="contactme" smooth={true} duration={500}> <li>Contact</li></Link>  
      </ul>
      </div>

    </nav>
   )
}