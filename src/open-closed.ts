abstract class Coffee {
  abstract brew(): string;
}

class Espresso extends Coffee {
  brew(): string {
    return 'Brewing espresso...';
  }
}

class DoubleEspresso extends Coffee {
  brew(): string {
    return 'Brewing double espresso...';
  }
}

class CoffeeMaker {
  brewCoffee(coffee: Coffee): void {
    console.log(coffee.brew());
  }
}

const coffeeMaker = new CoffeeMaker();

const espresso = new Espresso();
const doubleEspresso = new DoubleEspresso();

coffeeMaker.brewCoffee(espresso);
coffeeMaker.brewCoffee(doubleEspresso);