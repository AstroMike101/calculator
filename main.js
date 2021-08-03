let screen = document.querySelector(".display");
let deleteButton = document.querySelector(".deleteButton");
let clearButton = document.querySelector(".clearButton");
let click = document.querySelector(".click"); // sound of click on buttons
let equation = 0;
let operators =  ['+', '-', '*', '/', '='];







//plays a sound whenever a button is clicked
const buttons = document.querySelectorAll(".btn");
buttons.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", () => {
    click.play();
  });
});

//sound for the equal button
const equalBtn = document.querySelector(".equalBtn");
equalBtn.addEventListener("click", () => {
  let equalClick = document.querySelector(".equalClick");
  equalClick.play();
});


function getBeforePlus(str) { 
  return(str.substring(0, str.indexOf("+"))); 
}

function getAfterPlus(str) { 
  return(str.split('+')[1]);
}



function getBeforeMinus(str) { 
  return(str.substring(0, str.indexOf("-"))); 
}

function getAfterMinus(str) { 
  return(str.split('-')[1]);
}




function getBeforeTimes(str) { 
  return(str.substring(0, str.indexOf("*"))); 
}

function getAfterTimes(str) { 
  return(str.split('*')[1]);
}


function getBeforeDivide(str) { 
  return(str.substring(0, str.indexOf("/"))); 
}

function getAfterDivide(str) { 
  return(str.split('/')[1]);
}



function add(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  return num1 + num2;
}


function subtract(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  return num1 - num2;
}

function multiply(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  return num1*num2;
}

function divide(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  return num1/num2;
}



function operate(num1, operator, num2) {
  
  if (screen.textContent.includes("+")) { 
    operatorLocation = screen.textContent.indexOf("+");
    num1 = getBeforePlus(screen.textContent);
    operator = screen.textContent[operatorLocation];
    num2 = getAfterPlus(screen.textContent);
  }
  else if (screen.textContent.includes("-")) {
    operatorLocation = screen.textContent.indexOf("-");
    num1 = getBeforeMinus(screen.textContent);
    operator = screen.textContent[operatorLocation];
    num2 = getAfterMinus(screen.textContent);
  }

  else if (screen.textContent.includes("*")) {
    operatorLocation = screen.textContent.indexOf("*");
    num1 = getBeforeTimes(screen.textContent);
    operator = screen.textContent[operatorLocation];
    num2 = getAfterTimes(screen.textContent);
  }
  else if (screen.textContent.includes("/")) {
    operatorLocation = screen.textContent.indexOf("/");
    num1 = getBeforeDivide(screen.textContent);
    operator = screen.textContent[operatorLocation];
    num2 = getAfterDivide(screen.textContent);
  }

  else { 
    alert("bruh do an actual equation");
  }




  // operatorLocation = screen.textContent.indexOf("+");
  // num1 = getBeforePlus(screen.textContent);
  // operator = screen.textContent[operatorLocation];
  // num2 = getAfterPlus(screen.textContent);

  if (operator == "+") {
    screen.textContent = add(num1, num2);
  } else if (operator == "-") {
    screen.textContent = subtract(num1, num2);
  } else if (operator == "*") {
    screen.textContent = multiply(num1, num2);
  } else if (operator == "/") {
    screen.textContent = divide(num1, num2);
  } 
}

function clearDisplay() {
  screen.textContent = "";
}
function deleteDisplay() {
  newStr = screen.textContent.slice(0, -1);
  screen.textContent = newStr;
}

function display(num) {
  screen.textContent += num;
  console.log(screen.textContent);
}

// function calculate() {
// let equation = screen.textContent;
// let eqationAnswer = eval(equation);
// screen.textContent = eqationAnswer;
// }
