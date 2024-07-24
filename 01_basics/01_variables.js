const accountId = 123; // const cannot be changed once it declared.

let accountEmail = "Vijaypal@gmail.com";

var accountPassword = "12345";  

accountCity = "Pune"; 

let accountState;

/* 
Prefer Not to use var
because of issue in block scope and functional scope
*/


console.log();

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);  // this is use to print all values at same time.