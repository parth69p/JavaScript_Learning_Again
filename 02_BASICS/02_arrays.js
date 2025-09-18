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

const real_another_array = another_array.flat(3);// used to change the 

console.log(real_another_array);




console.log(Array.isArray("Parth"))
console.log(Array.from("PARTH"))
console.log(Array.from({name: "PARTH"}))// interesting 
// above is not converted that's why output is : [] (an empty array)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));// Converting to array

