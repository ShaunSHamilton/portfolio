import React from "react";
import "./App.css";
import RandPoundApp from "./RandPoundApp.png";
import GardenPlanner from "./GardenPlanner.png";
import PotterPlayer from "./PotterPlayer.png";
import NetskipCode from "./NetskipCode.png";
import UltimateGuitarCode from "./UltimateGuitarCode.png";
import MarkDown from "./MarkDown.png";
import RandomQuoteMachine from "./RandomQuoteMachine.png";
import EnergyTracker from "./EnergyTracker.png";
import JavaScriptCalc from "./JavaScriptCalc.png";
import {
  faRaspberryPi,
  faGithub,
  faNode,
  faNodeJs,
  faNpm,
  faFacebook,
  faFreeCodeCamp,
  faUbuntu,
  faLinkedin,
  faCss3,
  faJsSquare,
  faReact,
  faHtml5,
  faBootstrap,
  faPython,
  faMarkdown,
  faCodepen,
  faGit,
  faGitter,
  faTrello,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTypescript } from "./faTypescript";
import { faMATLAB } from "./faMATLAB";
import { faRust } from "./faRust";

const App = () => {
  const [colours, setColours] = React.useState([]);
  const [selected, setSelected] = React.useState(1);

  const handleDefault = () => {
    setColours([]);
    setSelected(1);
  };
  const handlePro = () => {
    setColours(["#FFF"]);
    setSelected(2);
  };
  const handleRetro = () => {
    setColours([
      "#FC600A",
      "#FCCC1A",
      "#B2D732",
      "#347C98",
      "#4424D6",
      "#C21460",
    ]);
    setSelected(3);
  };
  return (
    <div className="App">
      <Nav
        handleDefault={handleDefault}
        handlePro={handlePro}
        handleRetro={handleRetro}
        selected={selected}
      />
      <About anim={selected === 3} colours={colours} />
      <ProjectDeck />
      <Certifications />
      <Modules />
      <Contact />
    </div>
  );
};

//------------------------------------------------------
// NAVBAR
//------------------------------------------------------

const Nav = (props) => {
  const [isToggled, setIsToggled] = React.useState(false);

  const toggleNav = () => setIsToggled(!isToggled);
  return (
    <div className="pos-f-t fixed-top" id="navbar">
      <div
        className={"collapse " + (isToggled ? "show" : "")}
        id="navbarToggleExternalContent"
      >
        <div className="p-4">
          <a
            className="nav-link h3"
            tabIndex="5"
            href="#about"
            onClick={toggleNav}
          >
            About
          </a>
          <a
            className="nav-link h3"
            tabIndex="6"
            href="#projects"
            onClick={toggleNav}
          >
            Projects
          </a>
          <a
            className="nav-link h3"
            tabIndex="5"
            href="#certifications"
            onClick={toggleNav}
          >
            Certifications
          </a>
          <a
            className="nav-link h3"
            tabIndex="5"
            href="#modules"
            onClick={toggleNav}
          >
            University Modules
          </a>
          <a
            className="nav-link h3"
            tabIndex="7"
            href="#contact"
            onClick={toggleNav}
          >
            Contact
          </a>
        </div>
      </div>
      <nav className="navbar navbar-dark justify-content-space-between">
        <div className="btn-group">
          <button
            type="button"
            tabIndex="1"
            id="btn-default"
            className={
              "btn btn-secondary" + (props.selected === 1 ? " active" : "")
            }
            onClick={props.handleDefault}
          >
            Default
          </button>
          <button
            type="button"
            tabIndex="2"
            id="btn-pro"
            className={
              "btn btn-secondary" + (props.selected === 2 ? " active" : "")
            }
            onClick={props.handlePro}
          >
            Professional
          </button>
          <button
            type="button"
            tabIndex="3"
            id="btn-retro"
            className={
              "btn btn-secondary" + (props.selected === 3 ? " active" : "")
            }
            onClick={props.handleRetro}
          >
            Retro
          </button>
        </div>
        <button
          className="navbar-toggler"
          tabIndex="4"
          type="button"
          onClick={toggleNav}
          aria-expanded={isToggled}
          aria-label="Toggle navigation"
          data-toggle="show"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
};

//-----------------------------------------
// ABOUT SECTION
//-----------------------------------------

const About = (props) => {
  return (
    <div id="about">
      <header className="App-header">
        <Canvas colours={props.colours} />
        <div id="name">Shaun Hamilton</div>
        <div
          className={
            "container-fluid row justify-content-center" +
            (props.anim ? " anim" : "")
          }
        >
          <div id="JavaScript" className="svg-holder col tool">
            <FontAwesomeIcon className="svg Js" icon={faJsSquare} />
            <span className="tooltiptext">JavaScript</span>
          </div>
          <div id="BootStrap" className="svg-holder col tool">
            <FontAwesomeIcon className="svg Boot" icon={faBootstrap} />
            <span className="tooltiptext">BootStrap</span>
          </div>
          <div id="Node" className="svg-holder col tool">
            <FontAwesomeIcon
              className={"svg Node" + (props.anim ? " white" : "")}
              icon={faNode}
            />
            <span className="tooltiptext">Node</span>
          </div>
          <div id="CSS" className="svg-holder col tool">
            <FontAwesomeIcon className="svg Css" icon={faCss3} />
            <span className="tooltiptext">CSS</span>
          </div>
          <div id="TypeScript" className="svg-holder col tool">
            <FontAwesomeIcon className="svg Ts" icon={faTypescript} />
            <span className="tooltiptext">TypeScript</span>
          </div>
          <div id="CodePen" className="svg-holder col tool">
            <FontAwesomeIcon className="svg Codepen" icon={faCodepen} />
            <span className="tooltiptext">CodePen</span>
          </div>
          <div id="Python" className="svg-holder col tool">
            <FontAwesomeIcon className="svg Py" icon={faPython} />
            <span className="tooltiptext">Python</span>
          </div>
          <div id="Raspberry" className="svg-holder col tool">
            <FontAwesomeIcon className="svg Raspberry" icon={faRaspberryPi} />
            <span className="tooltiptext">RaspberryPi</span>
          </div>
          <div id="Rust" className="svg-holder col tool">
            <FontAwesomeIcon
              className={"svg Rust" + (props.anim ? " white" : "")}
              icon={faRust}
            />
            <span className="tooltiptext">Rust</span>
          </div>
          <div id="React" className="svg-holder col tool">
            <FontAwesomeIcon className="svg React" icon={faReact} />
            <span className="tooltiptext">React</span>
          </div>
          <div id="Git" className="svg-holder col tool">
            <FontAwesomeIcon className="svg Git" icon={faGit} />
            <span className="tooltiptext">Git</span>
          </div>
          <div id="HTML" className="svg-holder col tool">
            <FontAwesomeIcon className="svg Html" icon={faHtml5} />
            <span className="tooltiptext">HTML</span>
          </div>
          <div id="Ubuntu" className="svg-holder col tool">
            <FontAwesomeIcon className="svg Html" icon={faUbuntu} />
            <span className="tooltiptext">Ubuntu</span>
          </div>
          <div id="MarkDown" className="svg-holder col tool">
            <FontAwesomeIcon className="svg Md" icon={faMarkdown} />
            <span className="tooltiptext">MarkDown</span>
          </div>
          <div id="Npm" className="svg-holder col tool">
            <FontAwesomeIcon className="svg Npm" icon={faNpm} />
            <span className="tooltiptext">NPM</span>
          </div>
          <div id="Trello" className="svg-holder col tool">
            <FontAwesomeIcon className="svg Trello" icon={faTrello} />
            <span className="tooltiptext">Trello</span>
          </div>
          <div id="NodeJs" className="svg-holder col tool">
            <FontAwesomeIcon className="svg NodeJs" icon={faNodeJs} />
            <span className="tooltiptext">NodeJs</span>
          </div>
          <div id="Gitter" className="svg-holder col tool">
            <FontAwesomeIcon className="svg Gitter" icon={faGitter} />
            <span className="tooltiptext">Gitter</span>
          </div>
          <div id="MATLAB" className="svg-holder col tool">
            <FontAwesomeIcon className="svg MATLAB" icon={faMATLAB} />
            <span className="tooltiptext">MATLAB</span>
          </div>
        </div>
        <p id="para">
          Mechanical Engineering Student, Student Ambassador, and freeCodeCamp
          Moderator
        </p>
      </header>
    </div>
  );
};

//-----------------------------------------
// PROJECT SECTION
//-----------------------------------------

const ProjectDeck = () => {
  const projects = [
    {
      title: "Potter's Player",
      text: "Full-Stack MERN application to play Potter's Wheel Sermons",
      img: PotterPlayer,
      href: "https://potter-player.glitch.me",
    },
    {
      title: "Garden Planner",
      text:
        "React App to find out when to sow and harvest fruits and vegetables",
      img: GardenPlanner,
      href: "https://sky020.github.io/Garden-Planner/",
    },
    {
      title: "Ultimate Guitar Scraper",
      text:
        "Python script that uses Selenium to automatically add UG tabs to my playlist",
      img: UltimateGuitarCode,
      href: "https://github.com/Sky020/UltimateGuitarScraper",
    },
    {
      title: "NetSkip Browser Extension",
      text: "Browser extension that skips the intros of Netflix series",
      img: NetskipCode,
      href: "https://github.com/Sky020/NetSkip",
    },
    {
      title: "Rand-Pound Exchange Tracker",
      text:
        "Python web scraper with BeautifulSoup, and App that tracks the ZAR to GBP exchange rate",
      img: RandPoundApp,
      href: "https://github.com/Sky020/Rand-Pound-Exchanger",
    },
    {
      title: "MarkDown Previewer",
      text: "React with Marked text input that translates MarkDown",
      img: MarkDown,
      href: "https://codepen.io/sky020/full/XWmbpzL",
    },
    {
      title: "Random Quote Generator",
      text:
        "Quote generator that collects data from JSON API using React and jQuery",
      img: RandomQuoteMachine,
      href: "https://codepen.io/sky020/full/xxGjWGJ",
    },
    {
      title: "Energy Tracker Dashboard",
      text: "Basic multi-page HTML, CSS, and JavaScript webpage",
      img: EnergyTracker,
      href: "https://sky020.github.io/Energy-App/",
    },
    {
      title: "JavaScript Calculator",
      text: "Calculator made using React",
      img: JavaScriptCalc,
      href: "https://codepen.io/sky020/full/rNOpOoY",
    },
  ];
  return (
    <div
      className="card-deck justify-self-center align-items-center justify-content-center"
      id="projects"
    >
      <header className="row justify-content-center">
        {projects.map((project, i) => (
          <ProjectCard
            title={project.title}
            text={project.text}
            img={project.img}
            href={project.href}
            key={i}
          />
        ))}
      </header>
    </div>
  );
};

const ProjectCard = (props) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };
  const handleUnhover = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={
        "card shadow col-10 m-2 m-sm-4 col-md-5 m-md-3 col-lg-3 m-lg-4" +
        (isHovered ? " hovered-img" : "")
      }
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
    >
      <div className="card-holder">
        <img className="card-img-top" src={props.img} alt="Card Cap"></img>
      </div>
      <div className="card-body">
        <h1 className="card-title">{props.title}</h1>
        <p className="card-text">{props.text}</p>
        <a href={props.href} className="btn btn-purple">
          View
        </a>
      </div>
    </div>
  );
};

//--------------------------------------------
// CERTIFICATIONS SECTION
//--------------------------------------------
const Certifications = () => {
  const CERTIFICATIONS = [
    {
      title: "Introduction to Symbolic Math with MATLAB",
      description: "",
      link:
        "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=d4d5c4af-9f94-420b-b5f8-be2ce01c2bd7",
      dateAquired: "08/2020",
    },
    {
      title: "Statistical Methods with MATLAB",
      description: "",
      link:
        "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=0959300c-223d-47b3-8e85-5ba145f9e289",
      dateAquired: "08/2020",
    },
    {
      title: "Solving Ordinary Differential Equations with MATLAB",
      description: "",
      link:
        "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=5b6e5907-d335-4866-b668-3f0c2b610b15",
      dateAquired: "07/2020",
    },
    {
      title: "Machine Learning Onramp",
      description: "",
      link:
        "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=277f921a-b717-40f1-9bce-5b80b3cbd67e",
      dateAquired: "02/2020",
    },
    {
      title: "MATLAB Fundamentals",
      description: "",
      link:
        "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=0a6892ed-9ceb-46fc-98e3-d62d073e92ed",
      dateAquired: "11/2019",
    },
    {
      title: "Simulink Onramp",
      description: "",
      link:
        "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=063c785c-e8bf-40d3-afe3-5add336e81d9",
      dateAquired: "11/2019",
    },
    {
      title: "Deep Learning Onramp",
      description: "",
      link: "https://www.google.com",
      dateAquired: "03/2019",
    },
    {
      title: "ICDL",
      description: "International Drivers License",
      link: "",
      dateAquired: "04/2014",
    },
    {
      title: "Google Analytics",
      description: "",
      link:
        "https://analytics.google.com/analytics/academy/certificate/kcl0ND6-QYSvm8ytIBkVog",
      dateAquired: "05/2020",
    },
    {
      title: "Responsive Web Design",
      description: "",
      link:
        "https://www.freecodecamp.org/certification/sky020/responsive-web-design",
      dateAquired: "08/2019",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      description: "",
      link:
        "https://www.freecodecamp.org/certification/sky020/javascript-algorithms-and-data-structures",
      dateAquired: "10/2019",
    },
    {
      title: "Front End Libraries",
      description: "",
      link:
        "https://www.freecodecamp.org/certification/sky020/front-end-libraries",
      dateAquired: "07/2020",
    },
    {
      title: "APIs and Microservices",
      description: "",
      link:
        "https://www.freecodecamp.org/certification/sky020/apis-and-microservices",
      dateAquired: "07/2020",
    },
  ];
  return (
    <div
      id="certifications"
      className="row w-100 m-1 justify-content-center overflow-hidden"
    >
      <h2 className="heading-2">Certifications</h2>
      {CERTIFICATIONS.sort(
        (a, b) => a.dateAquired.slice(0, 2) - b.dateAquired.slice(0, 2)
      ).map((cert, i) => (
        <CertCard
          title={cert.title}
          description={cert.description}
          link={cert.link}
          dateAquired={cert.dateAquired}
          key={i}
        />
      ))}
    </div>
  );
};

const CertCard = (props) => {
  return (
    <div className="list-group m-1 col-lg-5">
      <a
        href={props.link}
        className="list-group-item list-group-item-action flex-column align-items-start active"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1 title">{props.title}</h5>
          <small>{props.dateAquired}</small>
        </div>
        <p className="mb-1">{props.description}</p>
        <small>...</small>
      </a>
    </div>
  );
};
//--------------------------------------------
// UNIVERSITY MODULES SECTION
//--------------------------------------------
const Modules = () => {
  const MODULES = [
    {
      title: "",
      description: "",
    },
  ];
  return (
    <div>
      {MODULES.map((module, i) => (
        <p key={i}>{module.title}</p>
      ))}
    </div>
  );
};
//--------------------------------------------
// CONTACT SECTION
//--------------------------------------------

const Contact = () => {
  return (
    <div className="container-fluid con-1" id="contact">
      <header className="header">
        <div className="con-2 flex-wrap">
          <div className="flex-sm-row">
            <a href="https://www.github.com/sky020" className="icon-btn">
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
              href="https://www.facebook.com/shaun.s.hamilton"
              className="icon-btn"
            >
              <div className="holder">
                <FontAwesomeIcon icon={faFacebook} className="icon FB" />{" "}
                Facebook
              </div>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;

//-----------------------------------
//Canvas
//-----------------------------------
const Canvas = (props) => {
  const [colours, setColours] = React.useState([]);
  function loaded() {
    let canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      width = (canvas.width = window.innerWidth),
      height = (canvas.height = window.innerHeight),
      particles = [],
      particleNum = 30;
    window.onresize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    function randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function randomColour(colours) {
      return colours[Math.floor(Math.random() * colours.length)];
    }
    if (colours.length > 0) {
      for (let i = 0; i < particleNum; i++) {
        particles.push(
          new Particle(
            canvas,
            canvas.width / 2,
            canvas.height / 2,
            Math.random() * 8 + 2,
            Math.random() * Math.PI * 2,
            randomIntFromRange(1, 4),
            randomColour(colours)
          )
        );
      }
    }

    function draw() {
      for (let i = 0; i < particleNum; i++) {
        let p = particles[i];
        p.update();
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2);
        ctx.shadowColor = p.colour;
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.globalAlpha = "1";
        ctx.fillStyle = p.colour;
        ctx.fill();
        ctx.restore();
      }
    }
    render();
    function render() {
      ctx.fillStyle = "hsla(260,40%,5%,0.2)";
      ctx.fillRect(0, 0, width, height);
      draw();
      requestAnimationFrame(render);
    }
  }

  React.useEffect(() => {
    setColours(props.colours);
    colours.length > 0 && loaded();
  }, [props.colours, colours]);
  return (
    <div id="easle" className="background">
      {colours.length > 0 && <canvas id="canvas" className="canvas"></canvas>}
    </div>
  );
};

class Vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  clone() {
    return new Vector2D(this.x, this.y);
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  mult(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  setFromScalarAngle(scalar, angle) {
    this.x = Math.cos(angle) * scalar;
    this.y = Math.sin(angle) * scalar;
  }
}
class Particle {
  constructor(canvas, x, y, scalar, direction, radius, colour) {
    this.canvas = canvas;
    this.position = new Vector2D(x, y);
    this.velocity = new Vector2D();
    this.velocity.setFromScalarAngle(scalar, direction);
    this.radius = radius;
    this.colour = colour;
    this.range = 100;
  }
  update() {
    this.position.add(this.velocity);
    if (this.position.x - this.range > this.canvas.width) {
      this.position.x = this.canvas.width / 2;
      this.position.y = this.canvas.height / 2;
    }
    if (this.position.x + this.range < 0) {
      this.position.x = this.canvas.width / 2;
      this.position.y = this.canvas.height / 2;
    }
    if (this.position.y - this.range > this.canvas.height) {
      this.position.x = this.canvas.width / 2;
      this.position.y = this.canvas.height / 2;
    }
    if (this.position.y + this.range < 0) {
      this.position.x = this.canvas.width / 2;
      this.position.y = this.canvas.height / 2;
    }
  }
}
