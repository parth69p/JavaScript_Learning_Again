//Object literal

const user ={
    username: "Parth",
    loginCount: 8,
    SignedIn:true,
    getUserDetails: function(){
        console.log("Got user Details from dataBase")
        // return "hello"
        console.log(`UserName : ${this.username}`);
        console.log(this);
        
    }   
}
// console.log(user.username);

// console.log(user.getUserDetails());
// console.log(this)


// new keyword is used to add new context

//******************Constructor function******************

//const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn= isLoggedIn
    // return this; // even if you not return it will done 
}

const userOne =  User("Parth",12,true)

const userTwo = new User("chai", 11,false)

// console.log(userOne)


// ********************** here are my learning *************************

// 'new' keyword :  this keyword is used to provide new instanse of the Object
// if you don't use new keyword , it will give the refernce of already created object which leads to change the original values of that object.

