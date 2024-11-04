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
    console.log(`Pouring tea into a cup...`);
    return(`Cup of ${teaType} tea!`);
  }
}

function serveTea(waterAmount: number, teaType: string) {
  const kettle = new Kettle();
  const teapot = new Teapot();
  const cup = new Cup();

  kettle.boilWater(waterAmount);
  teapot.brewTea(teaType);
  const cupOfTea = cup.pour(teaType);

  console.log(cupOfTea);
}

serveTea(250, 'green');
serveTea(275, 'herbal');