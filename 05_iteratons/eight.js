//Reduce function of array.

const myNums = [1,1,2,3]

// THIS IS DONE WITH NORMAL FUNCTION

// const myTotal = myNums.reduce(function(acc,curVal) {
//     console.log(`acc: ${acc} and curVal:${curVal}`);
    
//     return acc + curVal
// },0)// value is passed to acc value

// WITH ARROW FUNCTION
const myTotal = myNums.reduce((acc,currVal)=>(acc+ currVal),0) 
// sum of array 
console.log(myTotal);

const ShoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "data Science course",
        price: 12999
    },
]

const priceToPay = ShoppingCart.reduce((acc ,item)=>(acc + item.price),0)
console.log(priceToPay);

// ********** reduce function ******************

// 1. reduce is used to sum total of values inside any array 
// 1 reduce( (accumalator ,Currentvalue)=> accumalator + Currentvalue,0)// that 0 need to be passed to initialiize the accummlator