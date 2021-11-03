//business logic:
function add(number1,number2) {
  return number1+number2;
}

function subtract(number1,number2) {
  return number1-number2;
}

function multiply(number1,number2) {
  return number1*number2;
}

function divide(number1,number2) {
  return number1/number2;
}

//Below this line: User interface logic:

$(document).ready(function() {
  const number1=parseInt(prompt("Enter a number:"));
  const number2=parseInt(prompt("Enter another number:"));

  alert(add(number1,number2));
});