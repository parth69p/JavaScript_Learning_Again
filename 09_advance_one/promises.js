const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls , Cyptography, Network related
  setTimeout(() => {
    console.log("Aync Task is complete ");
    resolve();
  }, 1000);
});
// Promise is an Object 

promiseOne.then(function () {
  console.log("Promise consumed.");
});

//********Second Promise */


new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 Resolved");
});

// third Promise

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Parth", email: "parth@ex.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// forth Promise

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Parth", password: "1234" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});



promiseFour
  .then((user) => {
    console.log();
    return user.username;
  })
  .then((username) => {// thanable or you can say chaining of then
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(()=> console.log("The promise is either resolved or rejected."))
// console.log(username);



// Fifth Promise 

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Javascript", password: "1234" });
    } else {
      reject("ERROR: js went wrong");
    }
  }, 1000);
});

// cunsuming using Async Await
async function consumePromiseFive(){
    try{
   const response =  await promiseFive
   console.log(response)
    }catch(e){
    console.log("Error:",e);
    }
}
consumePromiseFive();


// async function  getallUsers(){
//     try{

//    const response = await fetch('https://api.github.com/users')
    
//   const data = await response.json() // need to be await otherwise it will not done as it take time.
//   console.log(data);
//     }catch(e){
//         console.log("E:",e);
//     }
// }
// getallUsers()

fetch('https://api.github.com/users')
.then((response)=>{
    return response.json()// returning json data to next .then()// also called chaining
})
.then((data)=>{console.log(data)
})
.catch((error)=>{console.log(error)
})


// ************************************ Here are My Learning**************************
/*

1. Promise in JavaScript is an object that represents a value that may not be available right now, but will be available in the future
* It is mainly used in asyncronous operations.
* the value of promise me can be resolve or reject

2.Promise(callBackFunction): this object accept one Argument that is 'callback Function'
* that callBackFuntion(resolve,reject): accepts two arguments. if the task is done we Use 'resolve()' if not 'reject()'
* that 'resolve()': this functions is concerned with then()

[Note: you can also pass Argument like string , Array ,Objects , etc in the resolve() fucntion as argument  which is sent in '.then()' fucntion (refer lineno 29 -37) or in the Response object(refer line no 71 to 90)]
*/