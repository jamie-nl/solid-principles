interface Driveable {
  drive(): void;
}

interface Refuelable {
  refuel(): void;
}

interface Chargeable {
  charge(): void;
}

class ElectricCar implements Driveable, Chargeable {
  drive(): void {
    console.log('Electric car is driving');
  }

  charge(): void {
    console.log('Electric car is charging');
  }
}

class PetrolCar implements Driveable, Refuelable {
  drive(): void {
    console.log('Petrol car is driving');
  }

  refuel(): void {
    console.log('Petrol car is refueling');
  }
}

const electricCar = new ElectricCar();
const petrolCar = new PetrolCar();

electricCar.drive();
electricCar.charge();

petrolCar.drive();
petrolCar.refuel();