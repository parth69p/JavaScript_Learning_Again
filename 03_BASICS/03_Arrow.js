const user = {
    username: "Parth",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);// here it is empty object



// function chai (){
//     let username = "hitesh"
//     console.log(this.username)//this will not work as it's not for function
// }
// chai()

// const chai = function (){
//     let username = "Parth"
//     console.log(this.username)
// }
//  chai()


// const chai = ()=>{
//     let username = "Parth"
//     console.log(this)
// }// it does'nt refer any attribute
// chai()

// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }

// const addTwo = (num1,num2)=> num1 + num2 // return same as above 


const addThree = (num1,num2) =>(num1+num2)// here we are returning object
const addTwo = () =>({username: "Parth"})// here we are returning object


// console.log(addTwo())
// console.log(addThree(3,4))
// console.log( add = ()=>({name:"Parth"}))


const arrowFunc = () => {
  console.log(this);
};

arrowFunc(); 

const obj = {
  value: 10,
  arrow: () => {
    let parth = 20
    console.log(this.parth);
  }
};
obj.arrow(); // ❌ undefined (or error) → because `this` is not `obj`

// const myArray = [2,5,3,6,7]

// myArray.forEach()


// ********************here are my learning****************************

// 1. this operator can't be used in arrow function because 'this'  is not a global function 

//2. arrow function only binds this with the global scope or outer scope which is node in our case and it's empty
