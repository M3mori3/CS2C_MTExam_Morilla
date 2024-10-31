//coding problem 4


const ps = require("prompt-sync");
const prompt =ps();

let favNum = 3;
let guess; 

while (true) 
{
  guess = parseInt(prompt("Guess my favorite number: ")); 
  if (guess < favNum) {
    console.log("Too low!"); 
  } else if (guess > favNum) {
    console.log("Too high!"); 
  } else {
    console.log("Correct!"); 
    break; 
  }
}