class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
     this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }
    set password(value){
        this._password= value
    }
}

// const parth = new User('parth@gmail.com','123')
const parth = new User('parth@gmail.com','abc')
console.log(parth.password);
console.log(parth.email);
