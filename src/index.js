// VANSH SANDUJA

// Question 1

// function printNames(students) {

//   for (let i = 0; i < students.length; i++) {

//     console.log(students[i]);
//   }

// }

// const students = [

//   {name: "Vansh", grade: "A"},
//   {name: "Ayush", grade: "A+"}
// ];

// printNames(students);

// Question 2

// var alpahabet = 'c';

// switch(alpahabet) {

//   case 'a' :

//   console.log(`${alpahabet} This is a vowel!!`);
//   break;

//   case 'e' :

//   console.log(`${alpahabet} This is a vowel!!`);
//   break;

//   case 'i' :

//   console.log(`${alpahabet} This is a vowel!!`);
//   break;

//   case 'o' :

//   console.log(`${alpahabet} This is a vowel!!`);
//   break;

//   case 'u' :

//   console.log(`${alpahabet} This is a vowel!!`);
//   break;

//   default:

//   console.log("Not a vowel!!");

// }

// Question 3

// function printPerson(person) {

//   console.log(`${person.firstName} ${person.lastName}`);
//   console.log(`${person.firstName1} ${person.lastName1}`);
// }

// const person = {

//   firstName: "Vansh",
//   lastName: "Sanduja",

//   firstName1: "Sanduja",
//   lastName1: "Vansh"

// };

// printPerson(person);

// Question 4

// var celsius = 25;

// var fahrenheit = (celsius * 9 / 5) + 32;

// var temperature = fahrenheit;

// if (temperature < 60) {

//   console.log("too cold");
// }

// else if (temperature > 60 && temperature < 85) {

//   console.log("Normal Temperature");
// }

// else if (temperature > 85){

//   console.log("very hot");
// }

let givenArray = [2, 4, 6, 8, 10];

let target = 10;

let num1 = 0;
let num2 = 0;

for (let i = 0; i < givenArray.length; i++) {

    for (let j = 1; j < givenArray.length; j++) {

        if(givenArray[i] + givenArray[j] == target) {

            num1 = givenArray[i];
            num2 = givenArray[j];
        }
    }
}

console.log(`${num1} ${num2}`);