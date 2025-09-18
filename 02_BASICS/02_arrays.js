const marvel_heroes = ["thor", "IronMan", "Spiderman"];
const dc_heroes = ["Superman", "flash", "Batman"];

// marvel_heroes.push(dc_heroes);// array is inserted inside array as single entity

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

// +++++++++++++++++++++spread Operator ++++++++++++++++++++++++++
const all_new_heroes = [...marvel_heroes, ...dc_heroes]; // spread using ' ... ' operator

// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, [5]]]];

const real_another_array = another_array.flat(3);// used to change the Subarrays inside array to single array.


// console.log(real_another_array);




// console.log(Array.isArray("Parth"))
// console.log(Array.from("PARTH"))
// console.log(Array.from({name: "PARTH"}))// interesting 
// above is not converted that's why output is : [] (an empty array)

let score1 = 100
let score2 = 200
let score3 = 300


// console.log(Array.of(score1,score2,score3));// Converting to array

// converting array to string
let arr = ["apple","mango", "banana "];

const Arraystring = arr.join();
// console.log(arr.join());


let arr1 =[1,2,4,5,3]

// console.log(arr1.toString())

// console.log(arr1.join(" - "))
const stringjson = JSON.stringify(arr)
console.log(stringjson)
console.log(stringjson[0]);






// here are my learning of that
// 1. Concatination : const allHeroes = marvel_heroes.concat(dc_heroes);
// this returns a value which is stored.

//2. flat() : this function change the subrrays inside array to single array
// levels need to be passed inside this.

//3. Array.isArray() : this function used to check if some object is an array.

//4. Array.from(""): this function used to convert any iterable objects to array

//5. Array.of(): Create a dynamic array when you have values .
