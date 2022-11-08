import React from "react";

export const About = () => {
  return (
    <div id="about">
      <header className="about-header">
        {/* <Canvas colours={props.colours} /> */}
        <h2 className="name">Shaun Hamilton</h2>

        {/* <Web3 /> */}

        <p className="para">
          <b>Software Developer</b> at <em>freeCodeCamp</em>,{" "}
          <b>Mechanical Engineer</b> by <em>education</em>, and <b>Musician</b>{" "}
          by <em>practice</em>.
        </p>
      </header>
    </div>
  );
};
