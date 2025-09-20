const myObject ={
    js : 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift : "swift by apple"
}
console.log();// used for the formatting space
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming =["js","rb","py","java","cpp"]

for (const key in programming) {
    
    console.log(programming[key])
}

const map = new Map()
map.set('In',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('In',"India")// dublicate will not done 
// console.log(map)

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

// *********************here are my learning ************************
// 1.   forin() loop : it's basically used for Objects, but array can also be iterated.
// this loop return the index insted of the value.