import { AreaCalculator } from './solid/area-calculator';
import { Circle } from './solid/circle';
import { Square } from './solid/square';
import { Shape } from './interfaces/shape.interface';
import { ShapesPrinter } from './solid/shapes-printer';
import { Cube } from './solid/cube';

let areaCalculator = new AreaCalculator();
let circle = new Circle(10);
let square = new Square(10);
let cube = new Cube(10);
const shapesPrinter = new ShapesPrinter();

const shapes: Shape[] = [circle, square, cube];
let sum = areaCalculator.sum(shapes);

console.log(shapesPrinter.json(sum));
console.log(shapesPrinter.csv(sum));