import { Shape } from '../interfaces/shape.interface';

export class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}