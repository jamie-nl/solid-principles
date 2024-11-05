interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  constructor(private side: number) {}

  area(): number {
    return this.side * this.side;
  }
}

function printArea(shape: Shape) {
  console.log(`Area: ${shape.area()}`);
}

const rectangle = new Rectangle(4, 5);
const square = new Square(5);

printArea(rectangle);
printArea(square);