import Images from "../Images";
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
      title: "Ultimate Guitar Scraper",
      text: "Python script that uses Selenium to automatically add UG tabs to my playlist",
      img: () =>
        window.innerWidth < 380 || window.innerWidth > 992
          ? Images.UltimateGuitarCode_small
          : window.innerWidth < 768
          ? Images.UltimateGuitarCode_large
          : Images.UltimateGuitarCode_medium,
      href: "https://github.com/ShaunSHamilton/UltimateGuitarScraper",
    },
    {
      title: "NetSkip Browser Extension",
      text: "Browser extension that skips the intros of Netflix series",
      img: () =>
        window.innerWidth < 380 || window.innerWidth > 992
          ? Images.NetskipCode_small
          : window.innerWidth < 768
          ? Images.NetskipCode_large
          : Images.NetskipCode_medium,
      href: "https://github.com/ShaunSHamilton/NetSkip",
    },
  ];
  return (
    <div className="projects">
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
