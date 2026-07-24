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


const MAX_VAL = 1e12;

let val1 = 0;
let val2 = 0;
let op = "+";
let usedEqual = false;
let decimalPlace = 0;


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
    return (b === 0) ? "please don't" : a / b;
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

function reset() {
    console.log(val1);
    val1 = 0;
    val2 = 0;
    op = "+";
    usedEqual = false;
    decimalPlace = 0;
    updateScreen(0);
}

function updateScreen(value) {
    if (typeof(value) == 'number') {
        value = Number(value.toPrecision(12));
    }
    const screen = document.querySelector(".display");
    display.textContent = value;
}

button_div.addEventListener("click", (e) => {
    const target = e.target;
    if (target.nodeName !== 'BUTTON') return;

    const classes = target.classList;

    if (classes.contains("num")){
        if (usedEqual) {
            reset();
        }
        if(decimalPlace === 0){
            val2 = val2 * 10 + Number(target.textContent);
        } else {
            val2 = val2 + Number(target.textContent * (10 ** decimalPlace--));
        }
        updateScreen(val2);
    }

    else if (classes.contains("operator")) {
        decimalPlace = 0;
        if (usedEqual) usedEqual = false;
        if (op === '/' && val2 === 0) {
            reset();
            updateScreen("please don't");
            return;
        }

        val1 = operate();
        val2 = 0;
        const newOp = target.textContent;
        if (newOp === "=") {
            op = '+';
            usedEqual = true;
        } else {
            op = newOp;
        }
        updateScreen(val1);
    }

    if (classes.contains("decimal")) {
        decimalPlace = -1;
    }


    else if (classes.contains("clr")) {
        reset();
    }

    else if (classes.contains("del")) {
        if (decimalPlace >= 0)
            val2 = Math.trunc(val2 / 10);
        else {
            val2 = Number(String(val2).slice(0, -1));
            decimalPlace++;
        }
        updateScreen(val2);
    }

    if (val1 > MAX_VAL || val2 > MAX_VAL) {
        reset();
        updateScreen("VALUE TOO LARGE");
    }

    console.log(val1, op, val2, usedEqual);
})


reset();