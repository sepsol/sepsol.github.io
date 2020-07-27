import React from 'react';

import './App.css';
import {
  Github,
  Gitlab,
  Linkedin,
  Instagram,
  Twitter,
} from '@icons-pack/react-simple-icons';

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#work">WORK</a></li>
        </ul>
        <ul>
          <li><a href="#">CONTACT</a></li>
          <li><a href="#">RESUME</a></li>
        </ul>
      </nav>
      
      <header id="home">
        <h1>
          Hi, 👋<br/>
          I'm Sepehr,<br/>
          web developer.
        </h1>
        <h3>Get in touch 👉 <a href="mailto:sepsol@techie.com" target="_blank">sepsol@techie.com</a></h3>
      </header>
      
      <section id="about"></section>
      
      <section id="skills"></section>
      
      <section id="work"></section>
      
      <footer>
        <ul>
          <li><a class="social github" target="_blank" href="https://github.com/sepsol"><Github color="#000" size={24}/></a></li>
          <li><a class="social gitlab" target="_blank" href="https://gitlab.com/sepsol"><Gitlab color="#000" size={24}/></a></li>
          <li><a class="social linkedin" target="_blank" href="https://www.linkedin.com/in/sepsol/"><Linkedin color="#000" size={24}/></a></li>
          <li><a class="social instagram" target="_blank" href="https://www.instagram.com/mr_sepsol/"><Instagram color="#000" size={24}/></a></li>
          <li><a class="social twitter" target="_blank" href="https://twitter.com/mr_sepsol"><Twitter color="#000" size={24}/></a></li>
        </ul>
        <p>Designed and built by Sepehr Soltanieh</p>
      </footer>
      
    </div>
  );
}

export default App;
