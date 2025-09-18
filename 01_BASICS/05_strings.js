const name = "Parth"
const repoCount = 50 


console.log(name +repoCount + "value");

// here wer are using ' `` ' back tick for interpolation

console.log(`hello My name is ${name} and my repo Count is ${repoCount}`)

const gameName = new String("hello-Parth-tinna");

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

console.log(gameName.charAt(9))

console.log(gameName.indexOf('t'))


const newstring = gameName.substring(0,5); // can not Use Negative Value here

const anotherstring = gameName.slice(-9,8)


console.log(newstring)
console.log(anotherstring);

const url = "https://parth.com/parth%20tinna"

console.log(url.replace('%20','-'))

console.log(url.includes('parth'))

console.log(gameName.split('-',4))


const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true

console.log(str.startsWith("that", 21)); // true

//hello_Parth