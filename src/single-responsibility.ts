class Kettle {
  boilWater(waterAmount: number): void {
    console.log(`Boiling ${waterAmount}ml of water...`);
  }
}

class Teapot {
  brewTea(teaType: string): void {
    console.log(`Brewing ${teaType} tea...`);
  }
}

class Cup {
  pour(teaType: string): string {
    console.log(`Pouring ${teaType} tea into a cup...`);
    return(`Cup of ${teaType} tea!`);
  }
}

function serveTea(waterAmount: number, teaType: string): void {
  const kettle = new Kettle();
  const teapot = new Teapot();
  const cup = new Cup();

  kettle.boilWater(waterAmount);
  teapot.brewTea(teaType);
  const pouredTea = cup.pour(teaType);

  console.log(pouredTea);
}

serveTea(250, 'green');
serveTea(275, 'black');