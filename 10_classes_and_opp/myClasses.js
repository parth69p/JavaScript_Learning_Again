// E56 we are using 
class User {
    constructor(username,email,password){
        this.username= username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername (){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai","chai@fb.com","123")
console.log(chai);
console.log(typeof chai);

console.log(chai.encryptPassword());
console.log(chai.changeUsername());



// *****************************Behind the Scene Working of class*************************

function User1(username,email,password){ // its a constructor function
        this.username= username,
        this.email = email,
        this.password = password
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

 User1.prototype.changeUsername = function(){
        return `${this.username.toUpperCase()}`
    }

const ob =  new User1("Parth","parth@gmail.com",21);
// console.log(typeof ob);
