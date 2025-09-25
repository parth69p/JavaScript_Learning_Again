// Inheritance 

class User{

    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username) // used to refer base class like java
        this.email = email
        this.password= password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@teacher.com","123")
chai.addCourse();
chai.logMe()
const masalaChai = new User("MasalaChai")
masalaChai.logMe()


/***************** Both lines are true because Teacher extends User  */
console.log(chai instanceof User);// true
console.log(chai instanceof Teacher);//true


// ***************************************
// It is same as using Proto property and adding these properties.