const userEmail = "Parth@gmail.com"

if(userEmail){
    console.log("Got User")
}else{
    console.log("Dont't have email");
}

// falsy values

// 1. false 
// 2. 0 
// 3. -0
// 4. 0n
// 5. ""
// 6. null 
// 7. undefined
// 8. NaN


// truthy values

// "0" 
// 'false' 
// " ": space inside strings
// [] : empty array
// {}: emty objects
// function(){} : empty function.

// if(userEmail.length ===0){
//     console.log("Array is Empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length ===0){
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // 5 

// val1 =null ?? 10 // 10

// val1 = undefined ?? 15 // 15 

val1 = null ?? 10 ?? 20 

console.log(val1);

// Terniary Operator 

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("les than 80"): console.log("more than 80");


// *************** here are my learning************************

// 1. Nullish Coalescing Operator (??) : this function acts as fall back check (null or undefined)
// 