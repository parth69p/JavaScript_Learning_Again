const coding = ["js","ruby","java","python","cpp"]

// **********************First Way***************************
// for each loop 
// coding.forEach(function (val){
//     console.log(val);
// })


// **************************Second Way*********************

// coding.forEach((item)=>{
//     console.log(item);
// })

// *********************Third way *****************************
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) // passing the refernce of a function.

// *******************forth *********************************

//this foreach function can accept whole array as argument too

// coding.forEach((item,index, arr )=>{
//     console.log(item,index,arr)
// })


const myCoding =[
    {
        languageName: "javaScript",
        LanguageFileName: "js"
    },
    {
        languageName: "java",
        LanguageFileName: "java"
    },
    {
        languageName: "python",
        LanguageFileName: "py"
    }
   
]

myCoding.forEach( (item,index) =>{
    console.log(`${item.LanguageFileName}: is of ${myCoding[index].languageName}`)

})


// ************* here are my learnings *****************************

//1. foreach() loop is basically a prototype of an array
// foreach expects a function and passes the value inside that function.

//2. foreach() is a call back function 