import { Shape } from '../interfaces/shape.interface';

export class AreaCalculator {
  public sum(shapes: Shape[]): number {
    let sum = 0;

    for (let i = 0; i < shapes.length; i++) {
      let shape: Shape = shapes[i];
      sum += shape.area;
    }
    return Math.round(sum);
  }
}