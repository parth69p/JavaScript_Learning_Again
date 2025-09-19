// const { use } = require("react");

// const { use } = require("react");

// var c = 300
let a =300
if (true) {
  let a = 10;
  const b = 20;
//   console.log("Inner : ",a);
  
//    c = 30;
}



// console.log(a);
// console.log(b);
// console.log(c);

// ***********2nd video nested scope

function one (){
    const username="parth"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}

// one();

if(true){
    const username ="Parth"
    if(username==="Parth"){
        const website = "youtube"
        console.log(username + website)
    }
    // console.log(website)// this will throw erroe 
}
// console.log(username)
//++++++++++++++++++++++Interesting +++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num1)
{
    return num1 + 1;
}

addtwo(5)// we can not use this here as it is not initialised here.
const addtwo = function(num){
    return num +2
}// this is kind of expression and we can create funtions like this too

// **************************HERE MY LEARNING***********************

// 1. scope is basically inside curly braces
// 2. WE JUST don't use 'var' for the varible declartion as it not clear wiht the scope.
// even if varible is declare inside {} curly braces, it's accessble outside also. that not a good thing
