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
