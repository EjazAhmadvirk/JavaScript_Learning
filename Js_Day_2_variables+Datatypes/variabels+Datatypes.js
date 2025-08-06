// variabels+Datatypes.js
// This script demonstrates the use of different variable types in JavaScript.
// age is integer Datatype
let age = 20;

// name is string Datatype
let name = "John Doe";

// isStudent is boolean Datatype
let isStudent = true;

// height is float Datatype
let height = 5.9; // in feet

// subjects is array Datatype
// we can store multiple values in an array. we will study these later in coming chapters
let subjects = ["Math", "Science", "History"];

// address is object Datatype
// we can store key-value pairs in an object
// we will study these later in coming chapters
let address = {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
};


console.log("Age:", age); // Output: 20
console.log("Name:", name); // Output: John Doe
console.log("Is Student:", isStudent); // Output: true
console.log("Height:", height); // Output: 5.9
console.log("Subjects:", subjects); // Output: ["Math", "Science", "History"]
console.log("Address:", address);// Output: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" }
console.log("Address City:", address.city);// Output: Anytown
console.log("Address State:", address.state);// Output: CA