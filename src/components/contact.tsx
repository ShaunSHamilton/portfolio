import {
  faGithub,
  faFreeCodeCamp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  return (
    <div className="container-fluid con-1" id="contact">
      <h2 className="heading-2">Contact</h2>
      <header className="header">
        <div className="con-2 flex-wrap">
          <div className="flex-sm-row">
            <a
              href="https://www.github.com/ShaunSHamilton"
              className="icon-btn"
            >
              <div className="holder">
                <FontAwesomeIcon icon={faGithub} className="icon GH" /> GitHub
              </div>
            </a>
          </div>
          <div className="flex-sm-row">
            <a href="https://www.freecodecamp.org/sky020" className="icon-btn">
              <div className="holder">
                <FontAwesomeIcon icon={faFreeCodeCamp} className="icon fCC" />{" "}
                freeCodeCamp
              </div>
            </a>
          </div>
          <div className="flex-sm-row">
            <a
              href="https://www.linkedin.com/in/shaun-hamilton-411636114"
              className="icon-btn"
            >
              <div className="holder">
                <FontAwesomeIcon icon={faLinkedin} className="icon Li" />{" "}
                LinkedIn
              </div>
            </a>
          </div>
          <div className="flex-sm-row">
            <a
              href="https://www.freecodecamp.org/news/author/shaun/"
              className="icon-btn"
            >
              <div className="holder">
                <FontAwesomeIcon icon={faFreeCodeCamp} className="icon fCC" />{" "}
                freeCodeCamp News
              </div>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};
