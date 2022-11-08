import React from "react";
import { useState } from "react";

export const Nav = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleNav = () => setIsToggled(!isToggled);
  return (
    <nav>
      <div className={`nav-cont ${isToggled ? "show" : "hide"}`}>
        <ul className="nav-list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          {/* <li>
            <a>Certifications</a>
          </li> */}
          <li>
            <a href="#modules">Modules</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <button className="nav-toggle" onClick={toggleNav} tabIndex={1}>
        <span>{isToggled ? "--" : "="}</span>
        <span>{isToggled ? "--" : "="}</span>
      </button>
    </nav>
  );
};
