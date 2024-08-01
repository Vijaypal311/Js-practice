// Write a JavaScript function to calculate the sum of two numbers. 

let a = 6, b = 8;

let sum = a + b;

// console.log(sum);

function sumOfnum(a, b) {
    return a + b;
}

// console.log(sumOfnum(5,8));

// Write a JavaScript program to find the maximum number in an array.

const arr = [5, 8, 7, 4, 1];

let maxNum = arr[0];

// function maxArr(arr) {
//     return Math.max(...arr)
// }

// console.log(maxArr(arr));

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
        maxNum = arr[i];
    }

}

// console.log(maxNum);

// Check Even or Odd

// let num = 6;

// if (num%2==0) {
//     console.log(`The Number is even ${num}`);
// } else {
//     console.log(`The Number is odd ${num}`);
// }


//  Find the Largest Number

// function largeNum(a,b,c){
//     if (a>b && a>c) {
//         console.log(`${a} is largest number`);
//     }
//     else if(b>c && b>a) {
//         console.log(`${b} is largest number`);
//     }
//     else
//     {
//         console.log(`${c} is largest number`);
//     }
// }

// largeNum(5,10,12);

// Factorial of a Number

// function factorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     console.log(fact);
// }

// factorial(5);

// Write a function that takes a string as an argument and returns the reversed string.

// function reverseString(str) {
//     return str.split('').reverse('').join('')
// }

// console.log(reverseString("vijay"));

// Write a function that takes a string as an argument and returns true if the string is a palindrome, and false otherwise.

// function isPalindrome(str) {
//     if (str === str.split('').reverse('').join('')) {
//         return true;
//     } else {
//         return false;
//     }  
// }

// console.log(isPalindrome("madam"));

// Write a function that takes an array of numbers and returns the smallest number in the array.

// let arr1 = [4, 8, 2, 7, 5]

// function minValue(arr1) {

//     return Math.min(...arr1)
// }

// console.log(minValue(arr1));

// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

function filterEvenNumbers(numbers) { 

    return numbers.filter(num => num % 2 === 0); 
  
  }

  console.log(filterEvenNumbers([1,2,3,4,5]));





