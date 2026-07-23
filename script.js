const CALC_WIDTH = 350
const CALC_HEIGHT = 450;

// Dynamically set up calculator width
const calc = document.querySelector("#calc");
calc.style.width = CALC_WIDTH + 'px';
calc.style.height = CALC_HEIGHT + 'px';

const button_div = document.querySelector("#buttons");
button_div.style.height = (CALC_HEIGHT * 5 / 6) + 'px';

const smallButtons = document.querySelectorAll(".small");
smallButtons.forEach((button) => 
    button.style.flexBasis = (CALC_HEIGHT / 7) + 'px');

const largeButtons = document.querySelectorAll(".large");
largeButtons.forEach((button) =>
    button.style.flexBasis = (CALC_HEIGHT / 3.4) + 'px');



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