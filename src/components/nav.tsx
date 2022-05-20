import { useState } from "react";

export const Nav = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleNav = () => setIsToggled(!isToggled);
  return (
    <nav>
      <div className={`nav-cont ${isToggled ? "show" : "hide"}`}>
        <ul className="nav-list">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          {/* <li>
            <a>Certifications</a>
          </li> */}
          <li>
            <a>Modules</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <button className="nav-toggle" onClick={toggleNav}>
        <span>{isToggled ? "--" : "="}</span>
        <span>{isToggled ? "--" : "="}</span>
      </button>
    </nav>
  );
};
