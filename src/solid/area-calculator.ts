import { Shape } from '../interfaces/shape.interface';
import { Square } from './square';
import { Circle } from './circle';

export class AreaCalculator {
  public sum(shapes: Shape[]): number {
    let sum = 0;

    for (let i = 0; i < shapes.length; i++) {
      let shape: Shape = shapes[i];
      if (shape instanceof Square) {
        sum += Math.pow(shape.getLength(), 2);
      }
      if (shape instanceof Circle) {
        sum += Math.PI * Math.pow(shape.getRadius(), 2);
      }
    }
    return Math.round(sum);
  }
}