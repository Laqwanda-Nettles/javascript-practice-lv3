// Assignment: Basic Exercises for .map() Function in Node.js

// Instructions:
// 1. This assignment includes three examples and ten problems to help you practice using the .map() function in JavaScript.
// 2. Write your solutions directly in this file.
// 3. Run the file using Node.js to test your solutions.

// Example 1: Multiply Each Element by 2
// Given an array of numbers, use .map() to create a new array where each element is multiplied by 2.
// Explanation: The .map() function iterates over each element of the 'numbers' array, multiplies it by 2, and creates a new array with the updated values.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Example 1 - Doubled Numbers:", doubledNumbers);

// Example 2: Convert Strings to Uppercase
// Given an array of strings, use .map() to create a new array where each string is converted to uppercase.
// Explanation: The .map() function iterates over each element of the 'words' array, converts it to uppercase using .toUpperCase(), and creates a new array with the modified strings.
const words = ["hello", "world", "javascript", "node"];
const uppercasedWords = words.map((word) => word.toUpperCase());
console.log("Example 2 - Uppercased Words:", uppercasedWords);

// Example 3: Extract Names from Objects
// Given an array of objects representing people, use .map() to create a new array containing only the names of the people.
// Explanation: The .map() function iterates over each object in the 'people' array, extracts the 'name' property, and creates a new array of names. The .join() function is then used to convert the array of names into a single string.
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const names = people.map((person) => person.name).join(", ");
console.log("Example 3 - Names:", names);

// Problems:

// Problem 1: Multiply Each Element by 3
const numbers1 = [2, 4, 6, 8, 10];
// TODO: Given an array of numbers, use .map() to create a new array where each element is multiplied by 3.
const multipyBy3 = numbers1.map((number) => number * 3);
console.log("Problem 1- Muliply by 3:", multipyBy3);

// Problem 2: Convert Strings to Lowercase
const strings1 = ["HELLO", "WORLD", "JAVASCRIPT", "NODE"];
// TODO: Given an array of strings, use .map() to create a new array where each string is converted to lowercase.
const lowercasedStrings = strings1.map((string) => string.toLowerCase());
console.log("Problem 2 - Lowercased Strings: ", lowercasedStrings);

// Problem 3: Extract Ages from Objects
const people1 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
// TODO: Given an array of objects representing people, use .map() to create a new array containing only the ages of the people.
const ages = people1.map((person) => person.age).join(", ");
console.log("Problem 3 - Ages: ", ages);

// Problem 4: Append "!" to Each String
const strings2 = ["hello", "world", "javascript", "node"];
// TODO: Given an array of strings, use .map() to create a new array where each string has "!" appended to the end.
const append = strings2.map((str) => str + "!");
console.log("Problem 4 - Appending !: ", append);

// Problem 5: Calculate Squares of Numbers
const numbers2 = [1, 2, 3, 4, 5];
// TODO: Given an array of numbers, use .map() to create a new array where each element is squared.
const squared = numbers2.map((num) => num * num);
console.log("Problem 5 - Squared Numbers: ", squared);

// Problem 6: Extract First Letters from Strings
const strings3 = ["apple", "banana", "cherry", "date"];
// TODO: Given an array of strings, use .map() to create a new array containing the first letter of each string.
const extract = strings3.map((str) => str.split("").shift());
console.log("Problem 6 - Extract First Letter: ", extract);

// Problem 7: Convert Objects to Strings
const products = [
  { name: "Laptop", price: 999 },
  { name: "Phone", price: 499 },
  { name: "Tablet", price: 299 },
];
// TODO: Given an array of objects representing products, use .map() to create a new array where each object is converted to a string in the format "Product: [name], Price: [price]".
const productStr = products.map(
  (product) => `Product: ${product.name}, Price: ${product.price}`
);
console.log("Problem 7 - Convert Object to String: ", productStr);

// Problem 8: Add 10 to Each Element
const numbers3 = [5, 10, 15, 20, 25];
// TODO: Given an array of numbers, use .map() to create a new array where each element is increased by 10, and use .join(", ") to convert the array into a string. Given an array of numbers, use .map() to create a new array where each element is increased by 10.
const addTen = numbers3.map((num) => num + 10).join(", ");
console.log("Problem 8 - Adding 10: ", addTen);

// Problem 9: Create Full Names from Objects
const people2 = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Emily", lastName: "Jones" },
];
// TODO: Given an array of objects representing people with "firstName" and "lastName" properties, use .map() to create a new array containing their full names, and use .join(", ") to convert the array into a single string of names. Given an array of objects representing people with "firstName" and "lastName" properties, use .map() to create a new array containing their full names.
const fullName = people2
  .map((person) => person.firstName + " " + person.lastName)
  .join(", ");
console.log("Problem 9 - Full Name: ", fullName);
// Problem 10: Convert Fruit to HTML List Items
const fruits = ["apple", "banana", "cherry", "date"];
// TODO: Given an array of fruit names, use .map() to create a new array where each fruit is converted into an HTML list item in the format "<li>[fruit]</li>", and use .join("\n") to combine them into a single string separated by line breaks. Given an array of fruit names, use .map() to create a new array where each fruit is converted into an HTML list item in the format "<li>[fruit]</li>".
const fruitList = fruits.map((fruit) => `<li>${fruit}</li>`).join("\n");
console.log("Problem 10 - List of Fruit: ", fruitList);
