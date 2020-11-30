import React, { useState } from 'react';
import Hamburger from './Hamburger';

import './Header.scss';

function Header() {
  const [toggled, setToggled] = useState(false);

  function handleToggle() {
    setToggled(!toggled);
  }

  function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setToggled(false);
  }
  function goToAbout() {
    const about = document.getElementById('about');
    about.scrollIntoView({ block: 'start', behavior: 'smooth' });
    setToggled(false);
  }
  function goToSkills() {
    const skills = document.getElementById('skills');
    skills.scrollIntoView({ block: 'start', behavior: 'smooth' });
    setToggled(false);
  }
  function goToWork() {
    const works = document.getElementById('works');
    works.scrollIntoView({ block: 'start', behavior: 'smooth' });
    setToggled(false);
  }

  return (
    <header className="top-bar">
      <nav className="container no-select">
        <div className="nav-top">
          <button onClick={goToTop} className="site-logo">
            SEPSOL
          </button>
          <Hamburger onClick={handleToggle} toggled={toggled} />
        </div>
        <ul className={toggled ? 'nav-links nav-links-active' : 'nav-links'}>
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
              className="resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`nav-bg ${toggled ? '' : 'nav-bg-deactive'}`}
        onClick={handleToggle}
      ></div>
    </header>
  );
}

export default Header;
