// const { use } = require("react");

function sayMyName(){
console.log("p");
console.log("a");
console.log("r");
console.log("t");
console.log("h");
}

sayMyName// reference of function

sayMyName()// execution

function addTwoNumbers(number1, number2)// parameterrs 
{

    console.log( number1+ number2);
    return
}

const result = addTwoNumbers(3,4)

console.log(result)

function loginUserMessage(username ="User"){
    if(!username){
        console.log("Please enter a username");
    }
    else{
        return `${username} just logged in `
    }
}

console.log(loginUserMessage("Parth"))


function calculateCartPrice(...num1)// can recieve multiple values due to ...
{
    return num1
}

// console.log(calculateCartPrice(200,400,500));// can send multippe value

const User={
    username: "Parth",
    prices: 199
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject({
//     username:"Parth",
//     price:399
// })

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
return getArray
}

console.log(returnSecondValue(myNewArray));


// *****************here my learnin**************


//1. '...' this operator is send multiple value in function parameter ( rest operator)
//2. In java script you need to check the value of varible as their is no type safety .
