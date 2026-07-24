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
let usedEqual = false;


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
    updateScreen(0);
}

function updateScreen(value) {
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
        val2 = val2 * 10 + Number(target.textContent);
        updateScreen(val2);
    }

    else if (classes.contains("operator")) {
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


    else if (classes.contains("clr")) {
        reset();
    }

    else if (classes.contains("del")) {
        val2 = Math.trunc(val2 / 10);
        updateScreen(val2);
    }
    console.log(val1, op, val2, usedEqual);
})


reset();