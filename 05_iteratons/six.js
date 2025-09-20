// const coding = ["js","ruby","java","python","cpp"]


// const values = coding.forEach((item)=>{
// console.log(item)
// return item
// })
// // for each don't return any value 
// console.log(values)


const myNums = [1,2,3,4,5,6,7,8,9,10]

// let num = myNums.filter((num)=>{
//    return num>4
// })// this is used to filter array values on basis of condtiotn

// console.log(num);

// ********************************Second Way ******************************
const newNums = []

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
// console.log(newNums)

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
];

// const userBooks = books.filter((bk)=>bk.genre=="History")

let userBooks = books.filter((bk)=>(bk.publish >=1995 && bk.genre=== "History"))

console.log(userBooks);



// ****************** Here are my learning ********************

// 1. Array of objects can be filtered with filter() funtion 
//2.  this filter function returs value on the basis of conditions we passed inside it.
// 3. foreach() and filter () both are call back fucntion 
// which basically means function need to be declared inside parameters.

