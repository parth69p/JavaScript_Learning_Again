const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);
descriptor.writable=true;
// console.log(Math.PI)

const chai = {
    name:'ginger chai',
    price:'250',
    isAvailabe:true,
    orderchai: function(){
        console.log("Code fatega ab agar Object.entries() se iterate karr rhe hue to");
        
    }
}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    // writable:false, 
    enumerable:false,// this property is now not iterable 
    // configurable: false
    
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let [key,value]of Object.entries(chai)){ //loop only done if enumerable is true
    if(typeof value !== 'function')
    console.log(`${key} : ${value}`);
    
}

// ************************* here are my Learning ******************88
// 1. Now we can even even make the objects Properties non Iterable or Iterable.
// using 'Object.defineProperty(object_name,"property_name")' Properties like : enumerable, writable ,configurable.

// 2. Object.entries(chai): this function helps to iterate the object as key value pair
// * note: this will only work if the enumerable option is true. 
