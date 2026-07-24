// Dynamically set up calculator width
const CALC_WIDTH = 350
const CALC_HEIGHT = 450;

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



let val1 = 0;
let val2 = 0;
let op = "+";


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


function operate() {
    let out = 0;
    switch(op) {
        case "+": {
            out = add(val1, val2);
            break;
        }
        case "-": {
            out = subtract(val1, val2);
            break;
        }
        case "*": {
            out = multiply(val1, val2);
            break;
        }
        case "/": {
            out = divide(val1, val2);
            break;
        }
    }
    return out;
}

function updateScreen(value) {
    const screen = document.querySelector(".display");
    display.textContent = String(value);
}

button_div.addEventListener("click", (e) => {
    const target = e.target;
    if (target.nodeName !== 'BUTTON') return;

    if (target.classList.contains("num")){
        val2 = val2 * 10 + Number(target.textContent);
        updateScreen(val2);
    }

    if (target.classList.contains("operator")) {
        val1 = operate();
        
        val2 = 0;
        op = target.textContent;
        updateScreen(val1);
    }

    if (target.classList.contains("eq")) {
        val1 = operate();
        val2 = 0;
        op = '+';
        updateScreen(val1);
    }
    console.log(`${val1} ${op} ${val2}`);
})