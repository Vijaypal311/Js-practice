// 1 . Write a function to calculate the sum of two numbers.

/*const sum = ((num1, num2) => num1 + num2)

console.log(sum(5, 5));*/

// 2. Write a function to find the maximum of three numbers.

/*function maxOfThree(num1 , num2 , num3){
    if(num1>num2 && num1>num3){
        console.log(`${num1} is the largest number.`);
    }
    else if(num2>num1 && num2>num3){
        console.log(`${num2} is the largest number.`);
    }
    else{
        console.log(`${num3} is the largest number.`);
    }
}

maxOfThree(5,9,7);*/

// 3. Write a function to determine if a number is even.

/*function evenNumber(num) {
    if (num % 2 == 0) {
        console.log(`${num} is a even number`);
    } else {
        console.log(`${num} is not a even number`);
    }
}

evenNumber(4);*/

// 4. Write a function to calculate the average of an array of numbers.

/*let marks = [50,70,85,45,65]

let sum = 0;

for(let i = 0; i < marks.length ; i++){

    sum += marks[i]/5;
}

console.log(sum);*/

/*function average(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {

        sum += marks[i] / 5;

    }
    console.log(`${sum} %`);
}

average([50, 70, 85, 45, 85]);*/

// 5. Write a function to return the nth Fibonacci number.

/*function fibonacciIterator(num) {

    if (num === 0 || num === 1) {
        return num;
    }

    let a = 0, b = 1;

    for (let i = 2; i <= num; i++) {

        let next = a + b;
        a = b;
        b = next;
    }
    return b;
}

console.log(fibonacciIterator(10));*/

// 6 . write a function to print the Fibonacci series.

/*function fibonacciSeries(num) {

    let a = 0, b = 1;
    console.log(a);

    if (num > 1) {
        console.log(b);
    }

    for (let i = 2; i < num; i++) {

        let next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
}
fibonacciSeries(10);*/

// 7 . Write a function to find the index of the maximum value in an array.

/*function maxIndex(arr) {

    let max_Index = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > arr[max_Index]) {
            max_Index = i;
        }
    }
    return max_Index;
}

const array = [3, 5, 7, 23, 8, 15, 10];
const index = maxIndex(array);
console.log("Index of maximum value:", index);*/

// 8 . Write a function to remove all instances of a specified value from an array.

/*function removeAllInstances(arr, valueToRemove) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== valueToRemove) {

            result.push(arr[i]);
        }
    }
    return result;

}

const array = [1, 2, 3, 4, 2, 5];
const valueToRemove = 2;
const newArray = removeAllInstances(array, valueToRemove);
console.log(newArray);*/

// 9 . Write a function to reverse a string.

/*function reverseStr(str) {

    return str.split('').reverse('').join('');
}

console.log(reverseStr("Vijay"));*/

// 10 . Write a function to convert a string to lowercase.

/*function lowercaseString(str) {

    return str.toLowerCase();
}

console.log(lowercaseString("VIJAY"));*/

// 11 . Write a loop to print numbers from 1 to 10.

/*for(let i = 1 ; i <= 10 ; i++){
    console.log(i);
}*/

// 12 . Write a loop to calculate the factorial of a number.

/*let num = 5;

let fact = 1;

for (let i = 1; i <= num; i++) {

    fact = fact * i;
}

console.log(fact);*/

// 13 . Write a function to merge two objects.

/*function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

// Example usage
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);*/

// 14 . Write a function to count the number of elements in an array greater than a specified value.

/*function greaterElements(arr, value) {

    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > value) {
            count++;
        }
    }
    return count;
}

const myArray = [5, 7, 8, 1, 4];
const specifiedValue = 1;
const result = greaterElements(myArray, specifiedValue);
console.log(result);*/

// 15 . Write a function to add an element to the beginning of an array.

/*let arr = [5, 7, 8, 1, 4]

let result = arr.unshift(10);

console.log(arr);*/


/*function addElement(arr , value){

    return arr.unshift(value);
}

let arr = [5, 7, 8, 1, 4];

let result = addElement(arr , 9)

console.log(arr);*/

// 16 . Write a function to count the number of vowels in a string.

/*function vowelsInstring(str){

    let vowels = "aeiouAEIOU";

    let count = 0;

    for(let char of str){

        if(vowels.includes(char)){
            count++
        }
    }
    return count;
}

let char1 =  "vijay";

console.log(vowelsInstring(char1));*/

// 17 . Write a loop to sum the numbers from 1 to `n`.

/*let num = 10

let sum = 0;

for (let i = 0; i <= num; i++) {

    sum = sum + i;

}
console.log(sum);*/

// 18 . Write a function to check if an object contains a specific property.

/*function hasProperty(obj, prop) {

    return prop in obj;
}

let object2 = {
    name: "Vijay",
    rollno: 17
}

let result = hasProperty(object2, "same");

console.log(result);*/

// 19 . Write a function to merge two sorted arrays into a single sorted array.

/*function mergeTwoSortedArray (arr1 , arr2){

    let merged = [...arr1,...arr2];

    return merged.sort((a,b) => a - b);
}

let array1 = [4,7,5,1,2]
let array2 = [8,6,2,1,4]

let result = mergeTwoSortedArray(array1 , array2);

console.log(result);*/

// 20 . Write a function to remove the last element of an array and return it.

/*function removeLastArray(arr){

    return arr.pop();
}

const removeLastArray = ((arr) => arr.pop());

let arr1 = [1,2,3,4,5,6];

removeLastArray(arr1);

console.log(arr1);*/

// 21 . Write a function to replace all instances of a substring in a string.

/*function replaceAString(str, search, replacedStr) {

     return str.split(search).join(replacedStr);

}

let strr = "Hello World";

let searchThis = "World";

let replaceWith = "Vijay";

let result = replaceAString(strr, searchThis, replaceWith);

console.log(result);*/

/*const replaceAString = ((str, search, replacedStr) => str.split(search).join(replacedStr))

let strr = "Hello World";

let searchThis = "World";

let replaceWith = "Vijay";

let result = replaceAString(strr, searchThis, replaceWith);

console.log(result);*/

// 22 . Write a loop to print the first `n` prime numbers.

/*let num = 20

for (let i = 1; i <= num; i++) {

    if (i % 2 == 1) {

        console.log(i);
    }
}*/

// 23 . Write a function to get the keys of an object as an array.

/*const returnKeysAsArray = ((obj) => Object.keys(obj));

let obj1 = {
    name : "Vijay",
    rollno: 21,
    div: "A"
}

let result = returnKeysAsArray(obj1);

console.log(result);*/



















