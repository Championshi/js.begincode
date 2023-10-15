//data types are of two types according how it stored in memory and how it can be excess
//1.primitive datatypes
//2. non-primitive datatypes

// Primitive -> 7 types:- string, Number, Boolean, null, undefined, symbol,BigInt;
//examples:-
const score = 100;
const ScoreValue = 100.3; //its a number in js not float or double it treat it as number thats all;

const isLoggedIn = false;
const outsidetemp = null;
let userEmail;// it gives undefined value bcz i have passed nothing in it this only function is created

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id == anotherid);


// 2.non-primitive(refrence) -> Arrays, Objects, Functions
const heros = ["abhinav","aditya kinkar", "anup"]; //array

let myObj = { //objects
    name:"abhinav",
    age:20,
}

//functions
const myFunction = function(){
    console.log("hello world");
}
//************************************************************************************************ */
//two types of memory allocation in javascript
// stack(primitive) memory, Heap(Non-Primitive)memory
//stack example
let myName = "abhinav"

let anotherName = myName; //it always gives copy of ant value we takes
anotherName ="kumarsingh"

console.log(myName);
console.log(anotherName);
//heap example
let userOne ={
    email: "user@google.com",//this two value stored in heap
    upi: " uder@ybl"//we got refrence value in heap
}

let userTwo = userOne

userTwo.email = "abhi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
