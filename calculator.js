const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const num1 = parseFloat(prompt("Please enter the first number? "));
const num2 = parseFloat(prompt("Please enter the second number? "));
const operation = prompt("Please choose the operation (+, -, /, *) ");
if (num1 && num2) {
  if (operation === "+") {
    console.log(num1 + num2);
  } else if (operation === "-") {
    console.log(num1 - num2);
  } else if (operation === "*") {
    console.log(num1 * num2);
  } else if (operation === "/") {
    console.log(num1 / num2);
  } else console.log("not valid");
} else console.log("invalid numbers");
