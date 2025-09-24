# Projects related to DOM
#
## Project 1
``` javascript
const bodyRef = document.querySelector('body');
const buttonsRef = document.querySelectorAll('.button');
// console.log(buttonsRef)

buttonsRef.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id) {
      bodyRef.style.backgroundColor = e.target.id;
    }
  });
});

```
## Project 2
``` javascript
const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('.#height').value)

form.addEventListener('submit',(e)=>{
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
// console.log(weight,height)
  const results = document.querySelector('#results')

  if(height === '' ||height<0 || isNaN(height)){
    results.innerHTML= `Please Give a Valid Height ${height}`
  }
  else if(weight === '' ||weight<0 || isNaN(weight)){
    results.innerHTML= `Please Give a Valid Weight ${weight}`
  }else{
   const bmi = (weight/((height*height)/10000)).toFixed(2)
    // show the result 
    // console.log(bmi)

  
    if(bmi<18.6){
      results.innerHTML = `<p> <b>UnderWeight</b>: <span>${bmi}</span></p>
      `
    }
   else if(bmi>=18.6 && bmi<=24.9){
      results.innerHTML = `<p> <b>Normal Range</b>: <span>${bmi}</span></p>
      `
    }
   else if(bmi>24.9){
      results.innerHTML = `<p><b>OverWeight</b>: <span>${bmi}</span></p>
      `
    }
  }

  
})
```
## Project 3
```javascript
 const clock = document.getElementById('clock')
//  const clock = document.querySelector('#clock')

// let date = new Date()

setInterval(function(){
 let date = new Date()
 clock.innerHTML = date.toLocaleTimeString();
},1000)

//  setInterval () : function is used to run after a time a we pass automatically.
// This function is used to perform perticular task after some interval of time automatically.
```

## Project 4
``` javascript
let randomNumber = parseInt(Math.random() * 100 + 1); // generating the number

const submit = document.querySelector("#subt");
const userInput = document.querySelector(".guessField");
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const StartOver = document.querySelector(".resultParas");

const p = document.createElement("p");

// let prevGuess = [];
let numberGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault(); // form value don't go to server
    const guess = parseInt(userInput.value);
    // console.log(guess);

    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // validating the guess
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    // prevGuess.push(guess); // never used 
    if (numberGuess ===11) {
        displayGuess(guess)// passing into array
        displayMessage(`Game Over. Random number was ${randomNumber}`)
        endGame()
    }else{
        displayGuess(guess)// passing into array of guess
        checkGuess(guess)// checking the guess
    }
  }
}

function checkGuess(guess) {
  // cheking th guess
  if(guess ==randomNumber){
    displayMessage(`Congragulations You Made it `)
    endGame()
  }else if(guess < randomNumber){
    displayMessage(`Number is TOO low`)
  }else if (guess > randomNumber){
    displayMessage(`Display is TOO high`)
  }
  
}

function displayGuess(guess) {// also clean the values.
  // update array of guesses
  console.log(typeof guess);
  userInput.value= ''
  guessSlot.innerHTML += `${guess}, `
  numberGuess++;
  lastResult.innerHTML = `${11-numberGuess}`
}

function displayMessage(message) {
  // Interact with Dom lowOrHigh
  lowOrHi.innerHTML = `<h2>${message}`;
}

function endGame() {
  // ending game 
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame"><a href=#>Start new Game</a></h2>`
  StartOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  //
 const newGameButton = document.querySelector('#newGame')
 newGameButton.addEventListener('click',function(e){
randomNumber = parseInt(Math.random() * 100 + 1); // generating the number
    prevGuess = '',
    numberGuess = 1,
    guessSlot.innerHTML = ''
    lastResult.innerHTML = `${11 -numberGuess}`;
    userInput.removeAttribute('disabled')
    StartOver.removeChild(p)
    displayMessage('')// passing empty to clear the game over message.
    playGame= true 
 })
}

```
## Project 5
```javascript

const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    console.log(e)
    insert.innerHTML= `<div class = 'color'>
    <table border="1">
  <thead>
    <tr>
      <th>Key</th>
      <th>keyCode</th>
      <th>code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${e.key===' '?'Space':e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
   
  </tbody>
</table>

    
    </div>`;
});

// *************** here are my Learning ********************

// 1. Here i learn about 'window' object and properties :
//  * key : this property tell which key is pressed 
//  * keyCode : this property tell what is the key Code of the key,(ASSCI)
//  * code : this property tell what is the code of the key.
```

