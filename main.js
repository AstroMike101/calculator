let screen = document.querySelector(".display");
let deleteButton = document.querySelector(".deleteButton");
let clearButton = document.querySelector(".clearButton");
let click = document.querySelector(".click"); // sound of click on buttons
let equation = 0;

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



function add(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  return num1 + num2;
}


function subtract(num1, num2) {
  return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}

function divide(num1, num2) {
  return Number(num1) / Number(num2);
}



function operate(num1, operator, num2) {
  
  operatorLocation = screen.textContent.indexOf("+");
  num1 = getBeforePlus(screen.textContent);
  operator = screen.textContent[operatorLocation];
  num2 = getAfterPlus(screen.textContent);

  if (operator == "+") {
    screen.textContent = add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  } else {
    alert("g");
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
