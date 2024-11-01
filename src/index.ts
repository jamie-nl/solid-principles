import { AreaCalculator } from "./area-calculator";
import { Circle } from "./circle";
import { Square } from "./square";
import { Shape } from "../interfaces/shape.interface";

let areaCalculator = new AreaCalculator();
let circle = new Circle(10);
let square = new Square(10);

const shapes: Shape[] = [circle, square];

let sum = areaCalculator.sum(shapes);
console.log("sum = ", sum);