import React from 'react';
import './App.css';
import { faGithub, faFacebook, faFreeCodeCamp, faLinkedin, faCss3, faJsSquare, faReact, faHtml5, faBootstrap, faPython, faMarkdown, faCodepen, faGit, faGitter, faTrello } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTypescript } from './faTypescript';

const App = () => {
  const [colours, setColours] = React.useState([])
  const [selected, setSelected] = React.useState(1)

  const handleDefault = () => {
    setColours([]);
    setSelected(1)
  }
  const handlePro = () => {
    setColours(["#FFF"]);
    setSelected(2);
  }
  const handleRetro = () => {
    setColours(["#FC600A", "#FCCC1A", "#B2D732", "#347C98", "#4424D6", "#C21460"]);
    setSelected(3);
  }
  return (
    <div className="App">
      <Nav handleDefault={handleDefault} handlePro={handlePro} handleRetro={handleRetro} selected={selected} />
      <About colours={colours} />
      <ProjectDeck />
      <Contact />
    </div >
  );
}

//------------------------------------------------------
// NAVBAR
//------------------------------------------------------

const Nav = (props) => {
  const [isToggled, setIsToggled] = React.useState(false);

  const toggleNav = () => setIsToggled(!isToggled);
  return (
    <div className="pos-f-t fixed-top">
      <div className={"collapse " + (isToggled ? 'show' : '')} id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <a className="nav-link h3 text-success" href="#about" onClick={toggleNav}>About</a>
          <a className="nav-link h3 text-success" href="#projects" onClick={toggleNav}>Projects</a>
          <a className="nav-link h3 text-success" href="#contact" onClick={toggleNav}>Contact</a>
        </div>
      </div>
      <nav className="navbar navbar-dark justify-content-space-between bg-dark">
        <div className="btn-group">
          <button type="button" id="btn-default" className={"btn btn-secondary" + (props.selected === 1 ? " active" : "")} onClick={props.handleDefault}>Default</button>
          <button type="button" id="btn-pro" className={"btn btn-secondary" + (props.selected === 2 ? " active" : "")} onClick={props.handlePro}>Professional</button>
          <button type="button" id="btn-retro" className={"btn btn-secondary" + (props.selected === 3 ? " active" : "")} onClick={props.handleRetro}>Retro</button>
        </div>
        <button className="navbar-toggler" type="button" onClick={toggleNav} aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  )
}

//-----------------------------------------
// ABOUT SECTION
//-----------------------------------------

const About = (props) => {
  // Get all icons
  // const icons = ["BootStrap", "JavaScript", "CSS", "TypeScript", "CodePen", "Git", "HTML", "MarkDown", "React", "Python", "Trello", "Gitter"];

  // React.useEffect(() => {
  //   for (let i in icons) {
  //     let ele = document.getElementById(icons[i])
  //     console.log(i)
  //     let top = Math.sin(Math.random() * Math.PI) * i * 80;
  //     let left = Math.cos(Math.random() * Math.PI) * i * 80;
  //     ele.style.top = `${top}px`;
  //     ele.style.left = `${left}px`;
  //   }
  // });
  return (
    <div id="about">
      <header className="App-header">
        <Canvas colours={props.colours} />
        <div id="name">Shaun Hamilton</div>
        <div className="container-fluid row justify-content-center border-primary">
          <div id="JavaScript" className="svg-holder"><FontAwesomeIcon className="svg Js" icon={faJsSquare} /></div>
          <div id="React" className="svg-holder"><FontAwesomeIcon className="svg React" icon={faReact} /></div>
          <div id="Python" className="svg-holder"><FontAwesomeIcon className="svg Py" icon={faPython} /></div>
          <div id="BootStrap" className="svg-holder"><FontAwesomeIcon className="svg Boot" icon={faBootstrap} /></div>
          <div id="CSS" className="svg-holder"><FontAwesomeIcon className="svg Css" icon={faCss3} /></div>
          <div id="TypeScript" className="svg-holder"><FontAwesomeIcon className="svg Ts" icon={faTypescript} /></div>
          <div id="CodePen" className="svg-holder"><FontAwesomeIcon className="svg Codepen" icon={faCodepen} /></div>
          <div id="Git" className="svg-holder"><FontAwesomeIcon className="svg Git" icon={faGit} /></div>
          <div id="HTML" className="svg-holder"><FontAwesomeIcon className="svg Html" icon={faHtml5} /></div>
          <div id="MarkDown" className="svg-holder"><FontAwesomeIcon className="svg Md" icon={faMarkdown} /></div>
          <div id="Trello" className="svg-holder"><FontAwesomeIcon className="svg Trello" icon={faTrello} /></div>
          <div id="Gitter" className="svg-holder"><FontAwesomeIcon className="svg Gitter" icon={faGitter} /></div>
        </div>
        <p>
          Mechanical Engineering Student, Student Ambassador, and freeCodeCamp Moderator
        </p>
      </header>
    </div>
  )
}

//-----------------------------------------
// PROJECT SECTION
//-----------------------------------------

const ProjectDeck = () => {
  return (
    <div className="card-deck" id="projects">
      <ProjectCard href={"https://codepen.io/sky020/full/XWmbpzL"} img={"https://codepen.io/sky020/pen/XWmbpzL/image/large.png"} title={"MarDown Previewer"} />
      <ProjectCard href={"https://codepen.io/sky020/full/xxGjWGJ"} img={"https://codepen.io/sky020/pen/xxGjWGJ/image/large.png"} title={"Random Quote Generator"} />
      <ProjectCard href={"https://codepen.io/sky020/full/ExVKBJd"} img={"https://codepen.io/sky020/pen/ExVKBJd/image/large.png"} title={"D3 Bar Chart"} />
    </div>
  )
}

const ProjectCard = (props) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = () => {
    setIsHovered(true);
  }
  const handleUnhover = () => {
    setIsHovered(false);
  }
  return (
    <div className={"card shadow m-sm-4" + (isHovered ? " hovered-img" : "")} onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
      <img className={"card-img-top"} src={props.img} alt="Card image cap"></img>
      <div className={"card-body"}>
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">
          Some quick example text to build on the card title
          and make up the bulk of the card's content.
          </p>
        <a href={props.href} className="btn btn-primary">View on CodePen</a>
      </div>
    </div>
  )
}

//--------------------------------------------
// CONTACT SECTION
//--------------------------------------------

const Contact = () => {
  return (
    <div className="container-fluid" id="contact">
      <div className="col">
        <div className="row-lg"><a href="https://www.github.com/sky020" className="icon-btn"><div className="holder"><FontAwesomeIcon icon={faGithub} className="icon GH" /> GitHub</div></a></div>
        <div className="row-lg"><a href="https://www.freecodecamp.org/sky020" className="icon-btn"><div className="holder"><FontAwesomeIcon icon={faFreeCodeCamp} className="icon fCC" /> freeCodeCamp</div></a></div>
        <div className="row-lg"><a href="https://www.linkedin.com/in/shaun-hamilton-411636114" className="icon-btn"><div className="holder"><FontAwesomeIcon icon={faLinkedin} className="icon Li" /> LinkedIn</div></a></div>
        <div className="row-lg"><a href="https://www.facebook.com/shaun.s.hamilton" className="icon-btn"><div className="holder"><FontAwesomeIcon icon={faFacebook} className="icon FB" /> Facebook</div></a></div>
      </div>
    </div>
  )
}

export default App;

//-----------------------
//Canvas
//-----------------------
const Canvas = (props) => {
  const [colours, setColours] = React.useState([]);
  function loaded() {
    let canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight,
      particles = [],
      particleNum = 50;
    ctx.clearRect(0, 0, width, height);
    window.onresize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    function randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function randomColour(colours) {
      return colours[Math.floor(Math.random() * colours.length)]
    }
    if (colours.length > 0) {
      for (let i = 0; i < particleNum; i++) {
        particles.push(new Particle(
          canvas,
          canvas.width / 2,
          canvas.height / 2,
          Math.random() * 8 + 2,
          Math.random() * Math.PI * 2,
          randomIntFromRange(1, 4),
          randomColour(colours),
        ));
      }
    }

    function draw() {
      for (let i = 0; i < particleNum; i++) {
        let p = particles[i];
        p.update();
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2)
        ctx.shadowColor = p.colour;
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.globalAlpha = '1';
        ctx.fillStyle = p.colour;
        ctx.fill();
        ctx.restore();
      }
    }
    if (colours.length > 0) {
      render();
    }

    function render() {
      ctx.fillStyle = 'hsla(260,40%,5%,0.2)';
      ctx.fillRect(0, 0, width, height);
      draw();
      requestAnimationFrame(render);
    }
  }

  React.useEffect(() => {
    setColours(props.colours);
    colours.length > 0 && loaded()
  })
  return (
    <div id="easle" className="background">
      {colours.length > 0 && <canvas id="canvas" className="canvas"></canvas>}
    </div>
  )
}

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
    };
    if (this.position.x + this.range < 0) {
      this.position.x = this.canvas.width / 2;
      this.position.y = this.canvas.height / 2;
    };
    if (this.position.y - this.range > this.canvas.height) {
      this.position.x = this.canvas.width / 2;
      this.position.y = this.canvas.height / 2;
    };
    if (this.position.y + this.range < 0) {
      this.position.x = this.canvas.width / 2;
      this.position.y = this.canvas.height / 2;
    };
  }
}