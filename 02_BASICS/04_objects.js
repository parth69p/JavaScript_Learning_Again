// Object singlton

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name="Parth"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const regularUser = {
    email: "parthtinnafzk@gmail.com",
    fullname :{
        userfullname : {// nesting of objects
            firstname: "Parth",
            lastname: "tinna"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4: "b"}

// const obj3 = {obj1,obj2} // Not the best  wayu
// expected output
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }




// *****************************Second Way****************************

// const obj3 = Object.assign({},obj1,obj2)
//this above assign function ' assign(target,source)
// it return an array combined with both obj1, obj2 inside '{}'(curly braces) or you can say an object 
// expected output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);

//*************************** */ third way ********************************

const obj3 = {...obj1, ...obj2}; // this is the best way to use
// expected output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// console.log(obj3);


const users =[
    {
        id:1,
        email: "p@gmail.com",
        
    },
    {
        id:1,
        email: "p@gmail.com",

    },
    {
        id:1,
        email: "p@gmail.com",

    }
]

// console.log(users[1].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)) // return all names of attributes of object 
// console.log(Object.values(tinderUser))// return all values of the keys 
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))// return boolean to check that key present in object or not

// console.log(tinderUser.toString())
//************************************************ */

/*
Here are my learnig 

1. we can create an object inside the object it can be nested multiple times 
2. we can combine the objects using 'Object.assign()' // but we mostly use spreador 
3. Data base will return the array of objects [{},{},{}]
4. Oject.keys() // this function is used to check all keys of the object 
*/

// ******************************************************************

// ******************Object Destructuring**********************
const cource = {
    courcename: 'js in hindi',
    price: "999",
    courceInstructor: "Parth"
}

// cource.courceInstructor

const {courceInstructor: instructor} = cource// destructuring 


// console.log(courceInstructor)
console.log(instructor)

const nabar = ({company})=>{//it is destructrue from :  const nabar = (props.company})=>{

}

navbar(company = "hitesh" )


// ********************************Api *******************************8


// {
//     "name": "Parth",
//     "courcename" : "js in hindi",
//     "price" : "free"
// }

// above data is kind of json data the api returns many of the time

// [
//     {},
//     {},
//     {}
// ]
// this is also a json data which is futhere can be used to fetch from api