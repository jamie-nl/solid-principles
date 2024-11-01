import { Shape } from '../interfaces/shape.interface';

export class Square implements Shape {
  length: number;

  constructor(length: number) {
    this.length = length;
  }

  get area() {
    return Math.pow(this.length, 2);
  }
}