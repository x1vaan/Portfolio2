import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';
import About from './About/About';
import Project from './Projects/Projects';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
