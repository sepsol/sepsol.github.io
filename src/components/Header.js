import React from 'react';
import './Header.css';



function Header() {

  function goToHome() {
    const home = document.getElementById("home");
    home.scrollIntoView({ behavior: "smooth" });
  }
  function goToAbout() {
    const about = document.getElementById("about");
    about.scrollIntoView({ behavior: "smooth" });
  }
  function goToSkills() {
    const skills = document.getElementById("skills");
    skills.scrollIntoView({ behavior: "smooth" });
  }
  function goToWork() {
    const work = document.getElementById("work");
    work.scrollIntoView({ behavior: "smooth" });
  }
  
  return(
    <header>
      <nav>
        <ul>
          <li onClick={goToHome}>Home</li>
          <li onClick={goToAbout}>About</li>
          <li onClick={goToSkills}>Skills</li>
          <li onClick={goToWork}>Works</li>
        </ul>
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="https://app.box.com/s/73tauyvan7s4hg3l5g0vmi79zb4sbndz" target="_blank">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}



export default Header;