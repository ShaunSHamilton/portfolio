import React from "react";

import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Nav } from "./components/nav";

export const Main = () => {
  return (
    <div className="main">
      <Nav />
      <About />
      <Contact />
    </div>
  );
};
