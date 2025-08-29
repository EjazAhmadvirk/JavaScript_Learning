// String creation
let str = "  JavaScript is awesome!  ";
console.log("Original String:", `"${str}"`);

// 1. length
console.log("Length:", str.length);

// 2. toUpperCase(), convert to uppercase
console.log("Uppercase:", str.toUpperCase());

// 3. toLowerCase(), convert to lowercase
console.log("Lowercase:", str.toLowerCase());

// 4. charAt(), return the character at the specified index
console.log("charAt(4):", str.charAt(4));

// 5. indexOf(), return the index of the first occurrence of a substring
console.log("indexOf('is'):", str.indexOf("is"));

// 6. lastIndexOf(), return the index of the last occurrence of a substring
console.log("lastIndexOf('a'):", str.lastIndexOf("a"));

// 7. slice(), return a new string
console.log("slice(2, 12):", str.slice(2, 12));

// 8. substring(), return a new string
console.log("substring(2, 12):", str.substring(2, 12));

// 9. substr(), return a new string
console.log("substr(2, 5):", str.substr(2, 5));

// 10. replace(), replace a substring with a new substring
console.log("replace('awesome', 'fun'):", str.replace("awesome", "fun"));

// 11. replaceAll(), replace all occurrences of a substring with a new substring
let newStr = "apple-banana-apple";
console.log("replaceAll('apple', 'mango'):", newStr.replaceAll("apple", "mango"));

// 12. trim(), remove whitespace from both ends of a string
console.log("trim():", `"${str.trim()}"`);

// 13. split(), split a string into an array of substrings
console.log("split(' '):", str.trim().split(" "));

// 14. includes(), check if a string contains a substring
console.log("includes('JavaScript'):", str.includes("JavaScript"));

// 15. startsWith(), check if a string starts with a substring
console.log("startsWith('Java'):", str.trim().startsWith("Java"));

// 16. endsWith(), check if a string ends with a substring  
console.log("endsWith('!'):", str.trim().endsWith("!"));

// 17. Template Literals
let name = "Ejaz";
let greet = `Hello, ${name}! Welcome to JavaScript.`;
console.log("Template Literal:", greet);

// 18. Escape Characters
let escaped = "He said, \"JavaScript is fun!\"\nLet's code.";
console.log("Escaped String:\n", escaped);
