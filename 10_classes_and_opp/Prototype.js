// let myName = "parth     "

// const { jsx } = require("react/jsx-runtime");


// console.log(myName.truelength);

// need to create the method above 

// String.prototype.truelength =function(){
//     this.
// }


let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "sling",
    getspiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Parth = function(){
console.log(`Parth is present in all objects.`);
}

// heroPower.Parth()
// myHeroes.Parth()

Array.prototype.heyParth = function(){
console.log("Parth says hello");

}

// myHeroes.heyParth();
// heroPower.heyParth();


// Inheritance

const User = {
    name:"Parth",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport ={
    isAvailable : false
}
const TASupport ={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = User
console.log(Teacher.name);
console.log(Teacher.email);

// let ob = new User // this will not work as User is Literal/ Object not the constructor function.,

// Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

// ******************************************
let anotherUsername= "chaiAurCode"

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True Length IS : ${this.trim().length}`)
}
// anotherUsername.truelength()

// "Parth".truelength();
// "Ice".truelength();



// **************** Here are my Learning *********************************

// 1. Everything in javaScript is Object.
// javascript is kind of language which seach for prototypes and function in higher order (as you can refer notes 5 Prototype image)
// 2. You can even insert your own methods in prebuild javascript Objects like 'Arrays', 'String'

// for Inheritance (refer from line no :42-64)