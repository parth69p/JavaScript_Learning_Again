const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map basicallyreturns the array.
// const newNums = myNumbers.map((num) => num + 10);
// console.log(newNums);// Output: [11,12,13,14,15,16,17,18,19,20]

// ************************above same thing with foreach loop *****************
// const anotherNums = [];
// myNumbers.forEach((value) => {
//   anotherNums.push(value + 10);
// });

// console.log(anotherNums);


// *************************Chaining*******************************
const newNums = myNumbers
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>(num%3==0))

console.log(newNums);



// *********************here are my Learning ***************************

// 1. Map is basically used for operation on array elements 
// 2. filter can be used with map to filter the Map data .
// 3. Map can be used multiple times and its a kind of chaining. and the chaining will done on the data return by first map function.


