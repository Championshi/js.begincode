let score=undefined    //use n0:-33, true,false,undefined,null etc and check the conversion


console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);



//=>"33"=> 33
//"33abc"=>NaN(not a number)
//true =>1; false=>0


//conversion into boolean value 1=true,0=false;
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 =>true; 0=> false;
//""=>false;
//"abhinav" => true

//convert into string
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//33 => string

//*******************************operations****************************************/

let value = 3
let negValue = -value
console.log(negValue);

// console.log(3+3);
// console.log(3-3);
// console.log(3*3);
// console.log(3**3);//3 raise to the power three
// console.log(3/3);
// console.log(2%3);//remainder

let str1 = "hellow"
let str2 = " abhinav"

let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);
console.log(1+ "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


console.log((3 + 4) * 5 % 3 );

console.log(+true);
console.log(+"");

// Read prefix and postfix operator very important



