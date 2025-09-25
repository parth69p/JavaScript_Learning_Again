// call in js

function setUsername(username){
    // complex Db calls
    this.username = username
    console.log("username set");
}

function CreateUser(username,email,password){

    // setUsername(username) // without call function it's not assesible to the object .
    setUsername.call(this,username) // passing this value.
    this.email = email
    this.password= password;

}

const chai = new CreateUser("chai","chai@fb.com","123")
console.log(chai);


// *********************************
// 'call()' function in js is used to pass the object inside the function externally 
// so that context of that function refer 'this' of that function which call() not his own 'this'.

// [don't use your own 'this' use my 'this']