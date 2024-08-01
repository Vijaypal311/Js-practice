// Write a for loop that prints numbers from 1 to 10.

/*for(let i = 1 ; i <= 10 ; i++){
    console.log(i);
}*/

// Write a for loop that prints only even numbers between 1 and 20.

/*for(let i =1 ; i <= 20 ; i++){
    if(i%2==0){
        console.log(i);
    }
}*/

// Given an array const arr = [1, 2, 3, 4, 5], write a for loop that prints each element of the array.

/*const arr = [1, 2, 3, 4, 5]

for(let i = 0 ; i < arr.length ; i++){
    console.log(arr[i]);
}*/

// Write a for loop to find the sum of all elements in the array const nums = [10, 20, 30, 40, 50].

/*const nums = [10, 20, 30, 40, 50]

let sum = 0;

for (let i = 0; i < nums.length; i++) {

    sum += nums[i];

}
console.log(sum);*/

// Write a nested for loop to print a 5x5 grid of asterisks (*).

/*for(let i = 0 ; i < 5 ; i++){
    let row = ''
    for(let j = 0 ; j < 5 ; j++){
        row += " *"
    }
    console.log(row);
}*/

// Write a for loop that prints numbers from 1 to 10, but stops if it encounters a number greater than 5.

/*for(let i = 1 ; i <= 10 ; i++){
    if(i > 5){
        break
    }
    console.log(i);
}*/

// Write a for loop that prints numbers from 1 to 10, but skips the number 5.

/*for(let i = 1 ; i <= 10 ; i++){
    if(i === 5){
        continue
    }
    console.log(i);
}*/

// Write a for loop that prints numbers from 10 to 1 in descending order.

/*for(let i = 10 ; i >= 1 ; i--){
    console.log(i);
}*/

// Given an object const obj = {a: 1, b: 2, c: 3}, write a for...in loop to print each key and value.

/*const obj = {a: 1, b: 2, c: 3}

for(const key in obj){

    console.log(key + " :", obj[key]);
}*/

// Given an array of objects const users = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 35}], write a for loop that prints each user's name.

/*const users = [{ name: 'Alice', age: 25 },
               { name: 'Bob', age: 30 },
               { name: 'Charlie', age: 35 }]

for(let i = 0 ; i < users.length ; i++){

    console.log(users[i].name);
}*/

// Write a for loop that prints all numbers from 1 to 50 that are divisible by 5.

/*for (let i = 1; i <= 50; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}*/

// Write a nested for loop to print the multiplication table (from 1 to 10).

/*for (let i = 1; i <= 10; i++) {
    console.log(`Table Of ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }

}*/

// Given an array const arr = [1, 2, 3, 4, 5], write a for loop to print the elements of the array in reverse order.

/*const arr = [1, 2, 3, 4, 5]

for (let i = arr.length; i >= 0; i--) {

    console.log(arr[i]);
}*/

// Given an array of numbers [2, 4, 6, 8, 10], write a for loop that prints each number doubled.

/*const arr = [2, 4, 6, 8, 10]

for (let i = 0; i < arr.length; i++) {

    console.log(arr[i] * 2);
}*/

// Write a for loop that calculates the factorial of a number n. For example, if n is 5, the result should be 120 (i.e., 5 × 4 × 3 × 2 × 1).

/*let num = 5;

let fact = 1;

for (let i = 1; i <= num; i++) {

    fact = fact * i;
}
console.log(fact);*/

// Write a for loop that finds the largest number in an array [3, 7, 2, 8, 5].

/*const arr = [3, 7, 2, 8, 5];
let max = arr[0]; // Initialize max with the first element

for (let i = 1; i < numbers.length; i++) {
    if (arr[i] > max) {
        max = arr[i]; // Update max if the current number is larger
    }
}

console.log(max); // Output the largest number*/
