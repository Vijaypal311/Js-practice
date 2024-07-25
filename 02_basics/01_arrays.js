//  In JavaScript, an array is one of the most commonly used data types.
//  It stores multiple values and elements in one variable. 
//  These values can be of any data type — meaning you can store a string,
//  number, boolean, and other data types in one variable.

// Array

const arr = [1,2,3,4,5]
const arr1 = [6,7,8,9,10]

// console.log(arr[0]);

// Array Methods

// arr.push(5) // adds the new element at the end of an array 
// arr.pop()  // removes the element from the end of an array
// const newArr = arr.concat(arr1);  // Concatenate two arrays
// const newArr = arr1.slice(1, 2)  // Creates a new array containing a portion of the original array.
// Does not modify the original array.

// const newArr = arr1.splice(3 , 3 , "a", "b")  Modifies the original array by adding, removing, or replacing elements.
// Returns an array containing the removed elements (if any).

// arr.unshift(5) Inserts new elements at the start of an array, and returns the new length of the array.

// arr.shift() Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// console.log(arr.includes(5)) The includes() method in JavaScript is used to determine whether an array contains a specific value.

// console.log(arr.reverse());

// const new_array = [1,2,3,4,5,[6,7,8,9,10]]

// const new_mod_array = new_array.flat(1);  // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// console.log(new_mod_array);

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1,score2,score3)); Returns a new array from a set of elements.

const name = "Vijay";

// console.log(Array.from(name)); Creates an array from an iterable object.