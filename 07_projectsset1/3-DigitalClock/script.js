 const clock = document.getElementById('clock')
//  const clock = document.querySelector('#clock')

// let date = new Date()

setInterval(function(){
 let date = new Date()
 clock.innerHTML = date.toLocaleTimeString();
},1000)

//  setInterval () : function is used to run after a time a we pass automatically.
// This function is used to perform perticular task after some interval of time automatically.