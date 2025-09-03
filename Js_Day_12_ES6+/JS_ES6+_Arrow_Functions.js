// Normal function
function add(a, b) {
    return a + b;
  }
  
  // Arrow function (shorter)
  const addArrow = (a, b) => a + b;
  
  console.log("Normal function:", add(5, 3)); // 8
  console.log("Arrow function:", addArrow(5, 3)); // 8
  
  // Arrow function with one parameter
  const square = n => n * n;
  console.log("Square of 4:", square(4)); // 16
  