// if 
const insUserLogeedIn = true
if(insUserLogeedIn){


}

// comparison operator
//  < : less than 
//  > : greater than 
//  <= : less than equal to
//  >= : greater than equal to
//  == : equals too
//  != : not equal 
//  === : also check type. (strict type)
// !== : not equal.

if(2!=="2"){
    console.log("executed");
}

const temperature = 41

// if(temperature=== 41){
//     console.log("less than 50")
// }else{
//     console.log("temperature is greater than 50")
// }


const score = 200

// if(score >100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);

// }
//  console.log(`User Power: ${power}`);


const  balance = 1000
// if(balance > 500) console.log("test"),console.log("test2");
// this type of code shoud not be written 


// if(balance < 500){
// console.log("less than 500");

// } else if(balance < 750){
//     console.log("less than 750");
    
// }
// else{
//     console.log("less than 1200");
    
// }


const UserLogeedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true
if(UserLogeedIn && debitCard){
    console.log("Allow to buy Cource");
    
}


if(LoggedInFromEmail || LoggedInFromGoogle){
    console.log("user logged in");
}
