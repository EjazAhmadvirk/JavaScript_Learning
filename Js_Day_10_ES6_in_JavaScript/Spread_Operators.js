// Spread
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

// Rest
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
