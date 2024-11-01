import { Shape } from '../interfaces/shape.interface';

export class Cube implements Shape {
  length: number;

  constructor(length: number) {
    this.length = length;
  }

  get area() {
    return 6 * Math.pow(this.length, 2);
  }
}