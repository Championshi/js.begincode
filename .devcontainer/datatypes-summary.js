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
