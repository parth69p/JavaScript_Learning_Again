// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is the best number");

//     }
//     console.log(element);

// }

// for (let i = 0; i < 10; i++)
// {
//     console.log(`Outer loop Value: ${i}`);
//     console.log();

//     for(let j=0; j<= 10 ; j++){
//         console.log(`Inner loop value: ${j}`);
//     }
//     console.log();

// }

for (let i = 1; i < 10; i++) {
  //  console.log(`***** Table of : ${i} ********`);

  for (let j = 1; j < 10; j++) {
    // console.log(`${i} * ${j} = ${i*j}`);
  }
}

let myArray = ["flash ", "batman", "superman"];
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  // console.log(element);
}

// // break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log("Detected 5");
//     break;
//   }
//   console.log(`Value of i is ${index}`);
// }


for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`Value of i is ${index}`);
}
