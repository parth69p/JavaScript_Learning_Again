// Primitive 

 // 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 const id =Symbol('123')
 const anotherId = Symbol('123')
 
 console.log(id === anotherId);

//  const bigNumber = 32345593939393939n
 

 // Reference (Non - Primitive)

// Array, Objects, Functions


const heros = ["IronMan","SpiderMan","Hulk"];

let myobj ={
    name:"parth",
    age: 21,
};

const myFunction = function(){
    console.log("Hello World");
};
console.log(typeof myFunction);

console.log( typeof anotherId);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

// all premitive values saved in stack ( copy of that value is returned)

// all Non premitive values are not saved on stack rather referece of heap memory is saved on stack 

let myName = "Parth Tinna"

let anotherName = myName
anotherName = "Broskiii"
console.log(myName);
console.log(anotherName);

let user1 = {
    email:"user@google.com",
    upi:"user@byl"
}

let user2 = user1

console.log(user1);

user2.email = "parthtinna@google.com"

console.log(user1.email);
console.log(user2.email);