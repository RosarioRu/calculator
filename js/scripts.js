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
  const number1=parseInt($("#add1").val());
  const number2=parseInt($("#add2").val());;
  const result=add(number1,number2);

  alert(add(number1,number2));
});