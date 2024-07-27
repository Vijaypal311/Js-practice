// What is a JavaScript Object?
// A JavaScript object is a collection of key-value pairs.
// Keys are strings or symbols, while values can be any data type (numbers, strings, booleans, other objects, functions, etc.).
// Objects are used to represent real-world entities or data structures.



// singleton objects are created using new keyword.
// Constructor Function

function Person(firstName, lastName, age, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
  }
  
  let person = new Person("Jane", "Smith", 25, "Los Angeles");
  

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Vijay",
    "full name": "Vijay Pal",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "vijay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "vijay@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "vijay@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

// What is this keyword in an object?
// this refers to the current object within a method.
// It can be used to access properties and methods of the object.
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// ------------------------Objects in depth--------------

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vijay",
            lastname: "pal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "vijay"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

