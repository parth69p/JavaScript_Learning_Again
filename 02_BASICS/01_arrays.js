// array

const myArr = [0,1,2,4,5,]
const myHeroes = ["IronMan","Captain America"]

const myArr2 = new Array(1,2,3,4,)
// console.log(myArr[1])

// Array Methods

myArr.push(6)
// console.log(myArr);

// myArr.pop();

// console.log(`After Pop : ${myArr}`)

// myArr.unshift(9)// we are not going to use this as it is not optimized
// it place value at start of array

// myArr.shift();



// console.log(myArr.includes(4))
// console.log(myArr.indexOf(5));

const newArr = myArr.join() // it changes the array into string by seprated commas 


// console.log(myArr)// type : Object
// console.log(typeof newArr) // type :string 


//+++++++++++++++ slice, splice+++++++++++++++++++++

// slice : do not change the original array

//splice : changes the original array.


// slice 
const myn1 = myArr.slice(1,3);

console.log("A :",myArr);
console.log("Slice :",myn1);
console.log("Array after slice ",myArr);


// splice

console.log("B :", myArr)


const myn2 = myArr.splice(1,3);

console.log("splice :", myn2)
console.log("Array after Splice", myArr);




// *****************************************************************************

// today we learn 

// 1. push () //used to push the values in array
// 2. pop () // used to pop the value from array

/// 3. const newArr = myArr.join() // it changes the array into string by seprated commas 
// 4. slice (StartIndex,EndIndex) // this function is used to extract subArray from the array from the given range of index, it doesn't include last index .
// 5. splice (StartIndex,EndIndex) // it also used to extract subArray from the array, but its changes the origianl array too, and include last index

//6. join() : this function changes the array into string 
// can only convert string array into string. 