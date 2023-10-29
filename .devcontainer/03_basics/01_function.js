function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){  // :->  dy default it gives same if we dont pass any value in function
    if(!username){  // !undefined &&&& !username is same as if(username === undefined) && all three are same we can use any one of them
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in` // string interpulation  ` `
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){  // ...num1 :-> it is a rest operator it combinres all thpassed value into array
    return num1                                      //  (...num1) this function gives:->  [200,400,500,2000]
}                                                   //( val1, val2, ...num1 ) this function gives :-> [500,2000]

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({   // another way to pass object in function
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); // got the second value
console.log(returnSecondValue([200, 400, 500, 1000]));