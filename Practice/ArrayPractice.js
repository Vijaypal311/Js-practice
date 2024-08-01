// Easy JavaScript Array Questions.

// Basic Operations:

// Create an array:

// 1. How do you create an empty array?

const arr = [];

// 2. How do you create an array with pre-filled values?

const fruits = ["apple", "banana", "orange"];

// Access elements:

// 1. How do you access the first element of an array?

// console.log(fruits[0]);

// 2. How do you access the last element of an array?

// const lastIndex = fruits.length - 1;

// const lastFruit = fruits[lastIndex];

// console.log(lastFruit);

// 3. What happens if you try to access an index that is out of bounds?

// console.log(fruits[7]); // It returns the value undefined.

// Modify elements:

// 1. How do you change the value of an element at a specific index?

// fruits[2] = "Mango"

// console.log(fruits);

// 2. How do you add an element to the end of an array?

// fruits.push("kiwi");

// console.log(fruits);

// 3. How do you remove the last element from an array?

// console.log(fruits.pop());

// Array length:

// 1. How do you find the number of elements in an array?

// console.log(fruits.length);

// Additional Questions
// Check if an element exists:

// How can you check if a specific value exists in an array?

// console.log(fruits.includes("banana")); // includes is case sensitive.

// Find the index of an element:

// How can you find the index of a specific value in an array?

// console.log(fruits.indexOf("banana"));

// Reverse an array:

// How can you reverse the order of elements in an array?

// console.log(fruits.reverse());

// Sort an array:

// How can you sort an array in ascending order?

// console.log(fruits.sort());

// How can you sort an array in descending order?

// let arr1 = [1, 4, 3, 2, 5]

// console.log(arr1.sort((a, b) => b - a));

// Create a copy of an array:

// How can you create a copy of an array without modifying the original array?

// const originalArray = [1, 2, 3, 4, 5];
// const copyArray = [...originalArray];

// console.log(copyArray); // Output: [1, 2, 3, 4, 5]

// copyArray[0] = 10; // Modify the copy
// console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
