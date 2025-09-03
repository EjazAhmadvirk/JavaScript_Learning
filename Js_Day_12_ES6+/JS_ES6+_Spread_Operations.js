// Spread operator (...) to copy/merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [...arr1, ...arr2];
console.log("Combined array:", combined); // [1, 2, 3, 4, 5]

// Spread operator for objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const mergedObj = { ...obj1, ...obj2 };
console.log("Merged Object:", mergedObj); // { a: 1, b: 2, c: 3 }

// Rest operator (...) for function arguments
const sum = (...nums) => nums.reduce((total, n) => total + n, 0);
console.log("Sum of numbers:", sum(1, 2, 3, 4)); // 10
