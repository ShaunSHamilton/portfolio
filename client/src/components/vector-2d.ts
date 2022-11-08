export default class Vector2D {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  set(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this;
  }
  clone() {
    return new Vector2D(this.x, this.y);
  }
  add(v: Vector2D) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  sub(v: Vector2D) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  mult(v: Vector2D) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  setFromScalarAngle(scalar: number, angle: number) {
    this.x = Math.cos(angle) * scalar;
    this.y = Math.sin(angle) * scalar;
  }
}
