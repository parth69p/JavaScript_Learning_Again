class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
  static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")

// console.log(hitesh.createId())// now this will show error due to static.

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone = new Teacher("Iphone","i@phone.com")
iphone.logMe()
console.log();

// console.log(iphone.createId())
console.log(User.createId())