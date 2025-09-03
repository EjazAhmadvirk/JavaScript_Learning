// Array Destructuring
const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(first, second, third); // 10 20 30

// Object Destructuring
const person = {
  name: "Ejaz",
  age: 22,
  country: "Pakistan"
};

const { name: personName, age: personAge } = person;
console.log(personName, personAge); // Ejaz 22
