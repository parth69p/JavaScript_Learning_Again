// for of 

// ["", "", ""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr){
    // console.log(num);
    
}
// strings iteration
const greeting = "hello World"

for(const greet of greeting){
    console.log(`Each Char is ${greet}`);
    
}

// Maps 

const map = new Map()
map.set('In',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('In',"India")// dublicate will not done 
// console.log(map)

for(const [key,value] of map){
    // console.log(key,':-', value)
}

const myObject ={
    'game1':'NFS',
    'game2':'Spiderman'
}

// ****************** this will throw error ****************

// for(const [key,value] of myObject)// myObject is not iterable
//     {
//     console.log(key,':-', value) // this will not work
// }

// ***************Here  are my learning *******************88

// 1. Map() : this is used as key value pair and values of Maps are always unique.
//2. forof () is used to iterate over arrays. they can't be use on Objects
// this loop directly returns the value not the index.