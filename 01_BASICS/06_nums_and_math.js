const score = 400
// console.log(score)


const balance =new Number(100);
// console.log(balance)


// console.log(balance.toFixed(2));// precision value after the decimal

const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(3))

const hundreds =  1000000
// console.log(hundreds.toLocaleString('en-IN'))


//++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++


// console.log(Math)

// console.log(Math.abs(-4))
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9));

const array = [2, 3, 4,5];

// console.log(Math.min(...array))

// console.log(Math.random())// random generate value between 0 and 1

// console.log(Math.floor((Math.random()*10)) +1)// for avoiding 0

const min = 1
const max = 6

console.log(Math.floor( Math.random() * (max-min +1) ) + min )
// above line is kind of formula for setting range in min and max value of your choice