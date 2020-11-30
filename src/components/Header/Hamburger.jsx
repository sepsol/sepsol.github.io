import React from 'react';
import './Hamburger.scss';

function Hamburger({ onClick, toggled }) {
  return (
    <div
      onClick={onClick}
      className={toggled ? 'burger burger-active' : 'burger'}
    >
      <div className="lines line-1"></div>
      <div className="lines line-2"></div>
      <div className="lines line-3"></div>
    </div>
  );
}

export default Hamburger;
