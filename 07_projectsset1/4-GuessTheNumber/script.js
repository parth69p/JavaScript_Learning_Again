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
