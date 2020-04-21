import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <canvas id="canvas" className="canvas"></canvas>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Portfolio in Progress...
        </p>
      </header>
      <ProjectDeck />
    </div >
  );
}

const Nav = () => {
  const [isToggled, setIsToggled] = React.useState(false);
  const toggleNav = () => setIsToggled(!isToggled);
  return (
    <div className="pos-f-t fixed-top">
      <div className={"collapse " + (isToggled ? 'show' : '')} id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <a className="nav-link h3 text-success" href="#">About</a>
          <a className="nav-link h3 text-success" href="#">Projects</a>
          <a className="nav-link h3 text-success" href="#">Contact</a>
        </div>
      </div>
      <nav className="navbar navbar-dark justify-content-end bg-dark">
        <button className="navbar-toggler" type="button" onClick={toggleNav} aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  )
}

const ProjectDeck = () => {
  return (
    <div className="card-deck">
      <ProjectCard src={"https://codepen.io/sky020/pen/XWmbpzL/image/large.png"} title={"MarDown Previewer"} />
      <ProjectCard src={"https://codepen.io/sky020/pen/xxGjWGJ/image/large.png"} title={"Random Quote Generator"} />
      <ProjectCard />
    </div>
  )
}

const ProjectCard = (props) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = () => {
    setIsHovered(true);
    console.log(isHovered)
  }
  const handleUnhover = () => {
    setIsHovered(false);
  }
  return (
    <div className="card shadow m-sm-4" onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
      <img className={"card-img" + (isHovered ? "" : "-top")} src={props.src} alt="Card image cap"></img>
      <div className={"card" + (isHovered ? " d-none" : "-body")}>
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">
          Some quick example text to build on the card title
          and make up the bulk of the card's content.
          </p>
        <a href="https://codepen.io/sky020/full/xxGjWGJ" className="btn btn-primary">View on CodePen</a>
      </div>
    </div>
  )
}

export default App;

//-----------------------
//Canvas
//-----------------------
class Vector2 {
  /**
   * コンストラクター
   * @param {number} x
   * @param {number} y
   */
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
    return new Vector2(this.x, this.y);
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
  /**
   * @param {canvas} canvas
   * @param {number} x
   * @param {number} y
   * @param {number} scalar
   * @param {number} direction
   * @param {number} radius
   * @param {string} color
   */
  constructor(canvas, x, y, scalar, direction, radius, color) {
    this.canvas = canvas;
    this.position = new Vector2(x, y);
    this.velocity = new Vector2();
    this.velocity.setFromScalarAngle(scalar, direction);
    this.radius = radius;
    this.color = color;
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

window.onload = function () {
  var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    particles = [],
    particleNum = 80,
    colors = ["#0952BD", "#A5BFF0", "#118CD6", "#1AAEE8", "#F2E8C9"];

  window.onresize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  for (let i = 0; i < particleNum; i++) {
    particles.push(new Particle(
      canvas,
      canvas.width / 2,
      canvas.height / 2,
      Math.random() * 8 + 2,
      Math.random() * Math.PI * 2,
      randomIntFromRange(5, 7),
      randomColor(colors),
    ));
  }

  function draw() {
    for (let i = 0; i < particleNum; i++) {
      var p = particles[i];
      p.update();
      ctx.save();
      ctx.beginPath();
      ctx.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2)
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 5;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.globalAlpha = '1'
      ctx.fillStyle = p.color;
      ctx.fill();
      ctx.restore();
    }
  }

  render();

  function render() {
    ctx.fillStyle = 'hsla(260,40%,5%,.2)';
    ctx.fillRect(0, 0, width, height);
    draw();
    requestAnimationFrame(render);
  }
}