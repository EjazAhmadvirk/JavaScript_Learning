class Car {
    brand;     // public by default
    #speed;    // private field
  
    constructor(brand, speed) {
      this.brand = brand;
      this.#speed = speed;
    }
  
    startEngine() {
      console.log(`${this.brand} engine started at ${this.#speed} km/h`);
    }
  
    getSpeed() {
      return this.#speed; // controlled access
    }
  }
  
  const myCar = new Car("Toyota", 180);
  myCar.startEngine();
  console.log("Speed:", myCar.getSpeed()); // ✅ Works
  // console.log(myCar.#speed); ❌ Error (private)
  