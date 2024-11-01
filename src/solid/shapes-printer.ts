export class ShapesPrinter {
  json(sum: number): string {
    return `{shapesSum: ${sum}`;
  }

  csv(sum: number): string {
    return `shapesSum,${sum}`;
  }
}