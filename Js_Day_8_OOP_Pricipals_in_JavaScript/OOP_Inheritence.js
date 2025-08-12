class Vehicle {
    constructor(brand) {
      this.brand = brand;
    }
  
    drive() {
      console.log(`${this.brand} is moving.`);
    }
  }
  
  class Car extends Vehicle {
    honk() {
      console.log(`${this.brand} says: Beep beep!`);
    }
  }
  
  const myCar = new Car("Honda");
  myCar.drive();
  myCar.honk();
  