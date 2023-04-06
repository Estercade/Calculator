function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    }
    else if (operator === '-') {
        return subtract(num1, num2);
    }
    else if (operator === '*') {
        return multiply(num1, num2);
    }
    else if (operator === '/') {
        return divide(num1, num2);
    }
}

function add(num1, num2) {
    return Math.round((Number(num1) + Number(num2)) * 100000) / 100000;
}

function subtract(num1, num2) {
    return Math.round((Number(num1) - Number(num2)) * 100000) / 100000;
}

function multiply(num1, num2) {
    return Math.round((Number(num1) * Number(num2)) * 100000) / 100000;
}

function divide(num1, num2) {
    return Math.round((Number(num1) / Number(num2)) * 100000) / 100000;
}

let num1, num2, operator;

const display = document.getElementById('display');

var currentValue = undefined;

const equalBtn = document.getElementById('equal');
equalBtn.addEventListener('click', equalFunction);
function equalFunction() {
    if (operator === '/' && currentValue === '0') {
        alert('Cannot divide by zero.')
    }
    else if (num1 != undefined && operator != undefined && currentValue != undefined) {
        num2 = currentValue;
        currentValue = operate(operator, num1, num2);
        updateTopDisplayEquals();
        updateBotDisplay();
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
    } else {
        return;
    }
};

const operatorBtnList = document.querySelectorAll('.operatorBtn');
operatorBtnList.forEach((operatorBtn) => operatorBtn.addEventListener('click', operatorFunction));
function operatorFunction(e) {
    if (num1 != undefined && operator != undefined && currentValue != undefined) {
        num2 = currentValue;
        currentValue = operate(operator, num1, num2);
        num1 = currentValue;
        num2 = undefined;
        operator = e.target.innerHTML;
        updateTopDisplay();
        updateBotDisplay();
        currentValue = undefined;
    } else if (num1 === undefined && operator === undefined && currentValue !== undefined) {
        operator = e.target.innerHTML;
        num1 = currentValue;
        updateTopDisplay();
        updateBotDisplay();
        currentValue = undefined;
    } else if (num1 != undefined && operator != undefined && currentValue === undefined) {
        operator = e.target.innerHTML;
        updateTopDisplay();
        updateBotDisplay();
        return;
    } else if (num1 === undefined && operator === undefined && currentValue === undefined) {
        num1 = 0;
        operator = e.target.innerHTML;
        updateTopDisplay();
        updateBotDisplay();
    }
};

const numberBtnList = document.querySelectorAll('.numberBtn');
numberBtnList.forEach((numberBtn) => numberBtn.addEventListener('click', numberFunction));
function numberFunction(e) {
    if (e.target.innerHTML === '0' && currentValue === '0') {
        return;
    }
    currentValue === undefined || currentValue === 0 ? currentValue = e.target.innerHTML : currentValue += e.target.innerHTML;
    updateBotDisplay();
};

const decimalBtn = document.getElementById('decimal');
decimalBtn.addEventListener('click', decimalFunction);
function decimalFunction() {
    if (currentValue === undefined) {
        currentValue = '0.';
        updateBotDisplay();
    } else if (toString(currentValue).includes('.')) {
        return;
    } else {
        currentValue += '.';
        updateBotDisplay();
}};

// Initial display content
topDisplay.textContent = '';
bottomDisplay.textContent = '0';

function updateTopDisplay() {
    topDisplay.textContent = `${num1} ${operator} ${num2}`.replaceAll('undefined', '');
}
function updateTopDisplayEquals() {
    topDisplay.textContent = `${num1} ${operator} ${num2} = `.replaceAll('undefined', '');
}
function updateBotDisplay() {
    bottomDisplay.textContent = `${currentValue}`.replaceAll('undefined', '');
}

const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', clear);

function clear() {
    num1 = undefined;
    num2 = undefined;
    currentValue = 0;
    operator = undefined;
    updateTopDisplay();
    updateBotDisplay();
    currentValue = undefined;
}

const backspaceBtn = document.getElementById('backspaceBtn');
backspaceBtn.addEventListener('click', backspace);

function backspace() {
    if (toString(currentValue).length = 1 || currentValue === undefined) {
        currentValue = 0;
    } else {
        currentValue = toString(currentValue).slice(0, -1);
    }
    updateBotDisplay();
}

const keyInputListener = document.addEventListener('keydown', keyInput);

function keyInput(e) {
    console.log(e);
}