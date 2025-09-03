// Using var (old way) - function scoped
var x = 10;
if (true) {
  var x = 20; // re-declares x
  console.log("Inside if block (var):", x); // 20
}
console.log("Outside if block (var):", x); // 20 -> overwritten

// Using let (new way) - block scoped
let y = 10;
if (true) {
  let y = 20; // new variable inside block
  console.log("Inside if block (let):", y); // 20
}
console.log("Outside if block (let):", y); // 10

// Using const - block scoped, cannot be reassigned
const PI = 3.1416;
// PI = 3.14; ❌ Error: Assignment to constant variable
console.log("Constant PI:", PI);
