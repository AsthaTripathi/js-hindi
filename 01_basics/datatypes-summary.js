//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

/*JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable before using it. 
You can assign different types of values to a variable during its lifetime.*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// Stack(Primitive - u get a copy) , Heap(Non Primitve - u get a reference i.e u get actual value or original value)

let myYoutubeName = "asthatripathidotcom";

let anotherName = myYoutubeName;
anotherName = "astha code"
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo=  userOne

userTwo.email = "hite@google.com"

console.log(userOne.email);
console.log(userTwo.email);