const buttons = document.querySelectorAll('.btn')
buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', () => {
      let click = document.querySelector('.click');
      click.play();
  })
})











function add(num1,num2) {
    return num1 + num2; 
    
}

function subtract(num1,num2) {
    return num1 - num2; 
    
}

function multiply(num1,num2) {
    return num1 * num2; 
    
}

function divide(num1,num2) {
    return num1 / num2; 
    
}


function operate (operator, num1, num2) { 
    if (operator == '+') {
        return add(num1,num2);
    }
    else if (operator == '-') {
        return subtract(num1,num2);
    }
    else if (operator == 'multiply') {
        return multiply(num1,num2);
    }
    else if (operator == 'divide') {
        return divide(num1,num2); 
    }
    else { 
        alert('g')
    }
}





