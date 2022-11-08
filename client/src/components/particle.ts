import Vector2D from "./vector-2d";

export default class Particle {
  position: Vector2D;
  canvas: HTMLCanvasElement;
  velocity: Vector2D;
  radius: number;
  colour: string;
  range: number;
  constructor(
    canvas: HTMLCanvasElement,
    x: number,
    y: number,
    scalar: number,
    direction: number,
    radius: number,
    colour: string
  ) {
    this.canvas = canvas;
    this.position = new Vector2D(x, y);
    this.velocity = new Vector2D(0, 0);
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
