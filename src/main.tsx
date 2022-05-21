import { useState } from "react";

import { About } from "./components/about";
// import { Certifications } from "./components/certifications";
import { Contact } from "./components/contact";
import { Modules } from "./components/modules";
import { Nav } from "./components/nav";
import { ProjectDeck } from "./components/project-deck";

export const Main = () => {
  // const [colours, setColours] = useState([]);
  // const [selected, setSelected] = useState(1);

  // const handleDefault = () => {
  //   setColours([]);
  //   setSelected(1);
  // };
  // const handlePro = () => {
  //   setColours(["#FFF"]);
  //   setSelected(2);
  // };
  // const handleRetro = () => {
  //   setColours([
  //     "#FC600A",
  //     "#FCCC1A",
  //     "#B2D732",
  //     "#347C98",
  //     "#4424D6",
  //     "#C21460",
  //   ]);
  //   setSelected(3);
  // };
  return (
    <div className="main">
      <Nav
      // handleDefault={handleDefault}
      // handlePro={handlePro}
      // handleRetro={handleRetro}
      // selected={selected}
      />
      <About
      // anim={selected === 3} colours={colours}
      />
      <ProjectDeck />
      {/* <Certifications /> */}
      <Modules />
      <Contact />
    </div>
  );
};
