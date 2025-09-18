// Dates 

let myDate = new Date();
// console.log(myDate.toDateString());// DATE STRING


// console.log(myDate.toLocaleDateString())



// let myCreatedDate = new Date(2004,11,23);

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


// let myCreatedDate = new Date("2004-12-23");  
// console.log(myCreatedDate.toLocaleDateString());

let dateByUser = "12-23-2024"

let date = new Date(dateByUser);

console.log(date.toLocaleDateString());

console.log(date.toISOString())



let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());

// console.log(Math.round(Date.now()/1000)); // time converted in Seconds here\


let newDate = new Date()
// console.log(newDate.getMonth()+1);

currentDate = new Date();

newDate.toLocaleString('default',{
    weekday:"long",
    
})

// console.log(newDate)

// console.log(`Now you are using js on ${currentDate.toLocaleDateString()}`)