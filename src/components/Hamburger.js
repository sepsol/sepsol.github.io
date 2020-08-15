import React from "react";
import "./Hamburger.css";

function Hamburger() {
  function handleAnimation(e) {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("nav-links-active");
    e.target.classList.toggle("burger-active");
  }
  return (
    <div className="burger" onClick={handleAnimation}>
      <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
    </div>
  );
}

export default Hamburger;
