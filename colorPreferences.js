//coding problem 5

const ps = require("prompt-sync");
const prompt =ps();

function alert(message) {
    console.log(message);
}

let colors = [];

let color = alert("What are your top 3 favorite colors? ");

for (let c = 0; c <= 2; c++) {
    let color = prompt(`Enter color ${c + 1}: `); 
    colors.push(color); 
    console.log("Updated colors:", colors); 
}

console.log("Your favorite colors are:", colors);