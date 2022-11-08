import React from "react";
import { ProjectCard } from "./project-card";

export const ProjectDeck = () => {
  const projects = [
    {
      title: "Project Euler in Rust",
      text: "In-Editor app creating using ShaunOS to interactively solve the freeCodeCamp Project Euler challenges in Rust",
      img: () =>
        "https://github.com/freeCodeCamp/euler-rust/raw/main/.vscode/euler-rust-gitpod.png",
      href: "https://github.com/freeCodeCamp/euler-rust",
    },
    {
      title: "Rust in Replit",
      text: "Interactive beginner's Rust course taught using the Replit IDE",
      img: () =>
        "https://www.freecodecamp.org/news/content/images/size/w2000/2021/11/rust-and-sunset.png",
      href: "https://github.com/freeCodeCamp/rust-in-replit",
    },
    {
      title: "freeCodeCamp - Courses",
      text: "A VSCode extension to create and run courses offered by freeCodeCamp",
      img: () =>
        "https://github.com/freeCodeCamp/freecodecamp-courses/raw/main/images/open-course.png",
      href: "https://github.com/freeCodeCamp/freecodecamp-courses",
    },
    {
      title: "ShaunOS",
      text: "A template for freeCodeCamp's external courses",
      img: () =>
        "https://github.com/freeCodeCamp/euler-rust/raw/main/.vscode/euler-rust-gitpod.png",
      href: "https://github.com/freeCodeCamp/external-project",
    },
    {
      title: "Logover",
      text: "An NPM package for configurable logging in JavaScript and Node.js",
      img: () =>
        "https://github.com/ShaunSHamilton/logover/blob/main/test/show.png",
      href: "https://github.com/ShaunSHamilton/logover",
    },
    {
      title: "Key Code",
      text: "A VSCode extension to help you learn and practice keyboard shortcuts",
      img: () =>
        "https://github.com/ShaunSHamilton/key-code/blob/main/images/key-code-1.png",
      href: "https://github.com/ShaunSHamilton/key-code",
    },
  ];
  return (
    <div id="projects">
      {projects.map((project, i) => (
        <ProjectCard
          title={project.title}
          text={project.text}
          img={project.img}
          href={project.href}
          key={i}
        />
      ))}
    </div>
  );
};
