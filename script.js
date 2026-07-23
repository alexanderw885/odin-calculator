const CALC_WIDTH = 350

// Dynamically set up calculator width
const calc = document.querySelector("#calc");
calc.style.width = CALC_WIDTH + 'px';

const smallButtons = document.querySelectorAll("#left .small");
smallButtons.forEach((button) => 
    button.style.flexBasis = (CALC_WIDTH / 5) + 'px');

const largeButtons = document.querySelectorAll("#left .large");
largeButtons.forEach((button) =>
    button.style.flexBasis = (CALC_WIDTH * 2 / 5) + 'px');



let val1;
let val2;
let op;


function add(a, b){
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    if (b == 0) return 0;
    return a / b;
}


function operate(a, b, operator) {
    switch(operator) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
    }
}