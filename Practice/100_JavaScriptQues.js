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
