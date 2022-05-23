import { useState, useEffect } from "react";
import Particle from "./particle";

export const Canvas = (props) => {
  const [colours, setColours] = useState([]);
  function loaded() {
    let canvas = document.getElementById("canvas") as HTMLCanvasElement,
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
        ctx.globalAlpha = 1;
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

  useEffect(() => {
    setColours(props.colours);
    colours.length > 0 && loaded();
    // eslint-disable-next-line
  }, [props.colours, colours]);
  return (
    <div id="easle" className="background">
      {colours.length > 0 && <canvas id="canvas" className="canvas"></canvas>}
    </div>
  );
};
