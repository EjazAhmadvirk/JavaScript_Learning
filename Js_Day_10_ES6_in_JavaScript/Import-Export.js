// file1.js
export const pi = 3.14;
export function add(a, b) {
  return a + b;
}

// file2.js
import { pi, add } from "./file1.js";
console.log(pi); // 3.14
console.log(add(2, 3)); // 5
