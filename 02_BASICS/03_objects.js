// singleton 

// Object.create() // will discuss later

// ******************object literals *******************************

const mysym = Symbol("key1")
// 
const jsUser= {
    name:"Parth",
    age:20,
    "full name": "Parth Tinna",
    [mysym] : "mykey1",// writing square bracket to refer the Symbol Otherwise it will become only string 
    location:"Fazilka",
    email: "parthtinnafzk69@gmail.com",
    isLoggedIn:false,
    lastLoginDays : ["Monday","Saturday"]
}

jsUser.email = "parth@google.com"

// Object.freeze(jsUser)// after this any change made on object will not work

jsUser.email = "parth@chat.com"
// console.log(jsUser)
jsUser.greeting = function(){
    console.log("hello Js user")
}
jsUser.greetingTwo = function(){
    console.log(`hello Js user,${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
// console.log(jsUser.email);
// // another way of accessing 
// console.log(jsUser["full name"]);
// console.log(jsUser["email"])

// console.log(jsUser[mysym])


// ************************************************************************

//Here are my Learning
//1.  we can create onject inside object 
//2. Object.freeze() : this function is use to freeze the object, after passing the object inside this nothing can be changed of that object 
//3. we can use symbol in object to  by using [] brackets inside object 
//4. we can access attributes of array using '.' (dot) operator or by using '[]' (square bracket) along with object name.
//5. 
// [Note : many of the time we need to acces object using square brackets instead of '.'(dot) as in some case we can not access with dot operator]
//1.