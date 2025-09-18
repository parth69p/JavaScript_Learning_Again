let score = "33abc"

let Ivalue = undefined

let Ianothervalue = Number(Ivalue)
console.log(Ianothervalue);
// const {score} =req.body // value is not cleared here

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)// it return NAN if value can't be changed (not a number)

// console.log(typeof valueInNumber)
// console.log(valueInNumber)



// "33"=> 33
//"33abc"=> NaN (not a number)
// true =>1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn= Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//1 => true ; 0 => false
//"" => false ( empty string )
// "Parth" => true 

let someNumber = 23 
let booleanNumber = true

let stringNumber = String(someNumber)
let BooleanString = String(booleanNumber)


// console.log(stringNumber)
// console.log(typeof stringNumber)

// console.log(BooleanString)
// console.log(typeof BooleanString)



//********************************* Operations ****************************

let value = 3 
let negValue = -value
// console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let firstName = "Parth"
let lastName =" Tinna"

// console.log("1"+ 2);
// console.log(1 + "2")
// console.log("1" +2 +2)
// console.log( 1 + 2 +"3");

// console.log((true + true) * 3 +" 32")
// console.log(+"")

let num1 ,num2,num3 ;

num1 =num2 = num3 = 4

console.log(num1,num2)



