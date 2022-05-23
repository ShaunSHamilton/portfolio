// import {
//   faJsSquare,
//   faBootstrap,
//   faNode,
//   faCss3,
//   faCodepen,
//   faPython,
//   faRaspberryPi,
//   faRust,
//   faReact,
//   faGit,
//   faHtml5,
//   faUbuntu,
//   faMarkdown,
//   faNpm,
//   faTrello,
//   faNodeJs,
//   faGitter,
// } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMATLAB } from "../faMATLAB";
// import { faTypescript } from "../faTypescript";
// import { Canvas } from "./canvas";

import { Web3 } from "./web3";

export const About = () => {
  return (
    <div id="about">
      <header className="about-header">
        {/* <Canvas colours={props.colours} /> */}
        <h2 className="name">Shaun Hamilton</h2>

        <Web3 />

        <p className="para">
          <b>Software Developer</b> at <em>freeCodeCamp</em>,{" "}
          <b>Mechanical Engineer</b> by <em>education</em>, and <b>Musician</b>{" "}
          by <em>practice</em>.
        </p>
      </header>
    </div>
  );
};
