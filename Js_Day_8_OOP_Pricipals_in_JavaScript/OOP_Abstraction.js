class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error("Cannot instantiate abstract class");
      }
    }
  
    area() {
      throw new Error("Method 'area()' must be implemented.");
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const circle = new Circle(5);
  console.log("Circle Area:", circle.area());
  