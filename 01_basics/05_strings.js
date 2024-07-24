// String
// The String object is used to represent and manipulate a sequence of characters.

// let substring = "JavaScript".substring(4, 10);

// console.log(substring);

// uppercase Convert

let one = "vijaykumar"

console.log(one.toUpperCase());

// String Concatenation

let two = "Hello";
let three = "World";

console.log("hello" + " " + "World");

// Finding a Substring

let four = "JavaScript";

console.log(four.substring(4, 10));

// String Length

let five = "VijayKumar";

console.log(five.length);

// Accessing Characters

let six = "JavaScript";

console.log(six.charAt(0));

// Replacig String

let seven = "Hello, World!"

console.log(seven.replace("World", "JavaScript"));

// Substring Extaction

let str = "JavaScript";
let substring = str.substring(4); // Extract from index 4 to the end
console.log(substring);

// Trimming WhiteSpaces

let nine = "  Hello World   "

console.log(nine.trim());

// Spliting the String

let ten = "Apple,Banana,Cherry"

console.log(ten.split(','));

// Character unicode

let eleven = "JavaScript";

console.log(eleven.charCodeAt(0));

// Convert To LowerCase

let twelve = "HELLO WORLD"

console.log(twelve.toLowerCase());

// Finding the Index 

let thirteen = "Hello World";

console.log(thirteen.indexOf("World"));

// Repeating the String

let fourteen = "HI ";

console.log(fourteen.repeat(3));

// String Start With 

let fifteen = "JavaScript";

console.log(fifteen.startsWith("Java"));

// String ends With 

let sixteen = "JavaScript";

console.log(sixteen.endsWith("Script"));

// Slice

let str1 = "JavaScript";
let substring1 = str1.slice(3); // Extract from index 3 (4th character) to the end
console.log(substring1); // "aScript"

// convert to primitive Value

let strObj = new String("Hello World");
let primitiveValue = strObj.valueOf();
console.log(primitiveValue); // "Hello World"

// Includes the substring

let strr = "Hello, World!";
let containsHello = strr.includes("Hello");
console.log(containsHello); // true

// last index

let st = "Hello, World!";
let lastIndex = st.lastIndexOf("o");
console.log(lastIndex); // 8
