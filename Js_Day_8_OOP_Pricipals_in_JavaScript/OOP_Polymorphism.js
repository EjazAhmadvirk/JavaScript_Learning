class Dog {
    speak() {
      return "Woof!";
    }
  }
  
  class Cat {
    speak() {
      return "Meow!";
    }
  }
  
  const animals = [new Dog(), new Cat()];
  animals.forEach(animal => {
    console.log(animal.speak());
  });
  