import React, { useEffect } from "react";
import "./Hamburger.css";

function Hamburger() {
  function handleAnimation(e) {
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
