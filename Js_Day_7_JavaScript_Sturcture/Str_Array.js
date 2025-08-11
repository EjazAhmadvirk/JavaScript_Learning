let fruits = ["apple", "banana", "mango"];
fruits.push("orange");   // Add
fruits[0] = "grape";     // Update
console.log(fruits);     // ["grape", "banana", "mango", "orange"]


/*
These are the properties of the array:
1. length
2. push
3. pop
4. shift
5. unshift
6. splice
7. slice
8. concat

These are the methods of the array:
1. push
2. pop
3. shift
4. unshift
5. splice
6. slice
7. concat
8. indexOf

you can use propertiese as 
console.log(fruits.length);

you can use methods as
fruits.push("orange");  // Add
fruits.pop();           // Remove
fruits.shift();         // Remove
fruits.unshift("grape"); // Add
fruits.splice(1, 2);    // Remove
fruits.slice(1, 3);     // Remove
fruits.concat(["pineapple", "watermelon"]); // Add





*/

fruits.push("orange");  // Add
console.log(fruits);
fruits.pop();           // Remove
console.log(fruits);
fruits.shift();         // Remove
console.log(fruits);
fruits.unshift("grape"); // Add
console.log(fruits);
fruits.splice(1, 2);    // Remove
console.log(fruits);
fruits.slice(1, 3);     // Remove
fruits.concat(["pineapple", "watermelon"]); // Add
