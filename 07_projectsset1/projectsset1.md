# Projects related to DOM
#
## Project 1
```javacript
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
