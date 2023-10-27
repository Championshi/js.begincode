// singleton
// Object.create

// object literals

const mySym = Symbol("key1") // define symbol


const JsUser = {
    name: "abhinav",// behind the track it treats element as string like here-name, age, email  and whatever inside it are string for them
    "full name": "Hitesh Choudhary",

    [mySym]: "mykey1",// symbol as a key

    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // to excess the object
// console.log(JsUser["email"]) // 2nd way to excess the object
// console.log(JsUser["full name"]) // this value can only be assesed by square quatation not using (jsuser) ; so 2nd way is good for most of case
// console.log(JsUser[mySym]) // symbol can be assed by square bracket

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // it is used to freeze changes means further changes are not possible after using this 
JsUser.email = "hitesh@microsoft.com" // changes not propogate here bcz previously object is freeze
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

   console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

