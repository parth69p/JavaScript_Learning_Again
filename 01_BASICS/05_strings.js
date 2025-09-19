const name = "Parth"
const repoCount = 50 


// console.log(name +repoCount + "value");

// here wer are using ' `` ' back tick for interpolation

// console.log(`hello My name is ${name} and my repo Count is ${repoCount}`)

const gameName = new String("hello-Parth-tinna bro how are you");

// console.log(gameName[0]);

console.log(gameName.__proto__);

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

console.log(gameName.split(' '))


const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true

console.log(str.startsWith("that", 21)); // true

//hello_Parth


// here we learn **********************

/*
// str = Hello_parth
1. str.charAt(9)// output :'t' // used to check the character of index from string 
2. str.indexof(t)// output: 9 // used to check the index of character from the string 
3. str.subString(0,4)//output: 'hello' // used to check get the substring from the string 
4. slice() : this is same as substring but it accept negative value too and its more useful
5. splice(): it is same as slice but it make changes in the targated array 
6. str.replace('_','-') use to replace character from the string 
// above will replace '_' to '-'

7. str.include(parth) : this will return boolean value

*/