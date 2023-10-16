const name = "hitesh "
const repoCount = 56
//console.log(name + repoCount + "value");  outdated 

console.log(`${name}${repoCount} ${"value"}`); //new version


const gameName = new String('abhinavku')

console.log(gameName[0]);
console.log(gameName[1]);

console.log(gameName.__proto__);
// different methods use in string read documentry(MDN website for documentry) for more methods some are listed below
console.log(gameName.length);
console.log(gameName.toUpperCase());
// console.log(gameName.CharAt(5));
console.log(gameName.indexOf('h'));
console.log(gameName.substring(0,4));
//we use slice for negative value in string

console.log(gameName.slice(-8, 4));

const newStringOne = "   abhinav    "
console .log(newStringOne);
console.log(newStringOne.trim());//it trim the extra spaces in the sting

const url = "https://abhinav.com/abhinav%20kumarsingh" 
console.log(url.replace('%20', '-')) //%20 ki jagah - aa jyega
console.log(url.includes('abhinav')) //it checks that in url (abhinav) is present or not if present it indicates yes otherwise no
console.log(url.includes('ankush'))



console.log(gameName.split('-'))




