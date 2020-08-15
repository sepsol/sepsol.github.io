import React from "react";
import Hamburger from "./Hamburger";
import "./Header.css";

function Header() {
  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  return (
    <header>
      <nav className="no-select">
        <button onClick={goToTop}>SEPSOL</button>
        <ul>
          <li>
            <button onClick={goToAbout}>About</button>
          </li>
          <li>
            <button onClick={goToSkills}>Skills</button>
          </li>
          <li>
            <button onClick={goToWork}>Works</button>
          </li>
          <li>
            <a
              href="https://app.box.com/s/73tauyvan7s4hg3l5g0vmi79zb4sbndz"
              target="_blank"
              rel="noopener noreferrer"
              id="resume"
            >
              Resume
            </a>
          </li>
        </ul>
        <Hamburger />
      </nav>
    </header>
  );
}

export default Header;
