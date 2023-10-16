const score = 400;
console.log(score.toString());
console.log(score.toString().length);

const balance = new Number(100)
console.log(balance);

// we can covert numbere int o srting and apply the string algorithm on it as example mentioned below

console.log(balance.toString()); // we get the value is   (100)  but this acts as string if we check its type we got string bcz we converted it previously into string
console.log(balance.toString().length); //we got 3 as its length
console.log(balance.toFixed(2)); //to fixed precision value of any amount in like-100.00 (2) or 100.000 (3)


const otherNumber = 23.8966
console.log(otherNumber.toPrecision(4)); //we got 23.90
console.log(otherNumber.toPrecision(3));// we got 23.9

const hundreds = 1000000  //10,00,000 actq indian system
console.log(hundreds.toLocaleString('en-IN')); // it insert comma btwn numbers according to indian digit system like ekai, dahai, saikara ,etc.



//*********************************************Maths******************************************************************************

// console.log(Math);
// console.log(Math.abs(-4)); // absolute value = 4
// console.log(Math.round(4.6)); // round off value = 5
// console.log(Math.ceil(4.2)); // upper value of 4.2 is = 5
// console.log(Math.floor(4.9)); //  down value of 4.9 is = 4
// console.log(Math.min(4 , 6, 4 , 1 , 8));
// console.log(Math.max(4 , 6, 4 , 1 , 8));

console.log(Math.random()); // it gives values in 0 and 1;
console.log(Math.random()*10+1); // to avoid these value we multiply it with 10 and add +1 to avoid floor value 0;
console.log(Math.floor(Math.random()*10)+1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1))+ min)







