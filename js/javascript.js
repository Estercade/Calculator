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

// const buttonsList = document.querySelectorAll('button');
// buttonsList.forEach((button) => button.
document.addEventListener('click', logButton);

function logButton() {
    console.log(`num1 = ${num1}`)
    console.log(`operator = ${operator}`)
    console.log(`num2 = ${num2}`)
    console.log(`currentValue = ${currentValue}`)
}

var currentValue = undefined;

const equalBtn = document.getElementById('equal');
equalBtn.addEventListener('click', (e) => {
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
});

const operatorBtnList = document.querySelectorAll('.operatorBtn');
operatorBtnList.forEach((operatorBtn) => operatorBtn.addEventListener('click', (e) => {
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
}));

const numberBtnList = document.querySelectorAll('.numberBtn');
numberBtnList.forEach((numberBtn) => numberBtn.addEventListener('click', (e) => {
    if (e.target.innerHTML === '0' && currentValue === '0') {
        return;
    }
    currentValue === undefined || currentValue === 0 ? currentValue = e.target.innerHTML : currentValue += e.target.innerHTML;
    updateBotDisplay();
}));

const decimalBtn = document.getElementById('decimal');
decimalBtn.addEventListener('click', () => {
    if (currentValue === undefined) {
        currentValue = '0.';
        updateBotDisplay();
    } else if (toString(currentValue).includes('.')) {
        return;
    } else {
        currentValue += '.';
        updateBotDisplay();
    }
});

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

const clearButton = document.getElementById('clearBtn');
clearButton.addEventListener('click', clear);

function clear() {
    num1 = undefined;
    num2 = undefined;
    currentValue = 0;
    operator = undefined;
    updateTopDisplay();
    updateBotDisplay();
    currentValue = undefined;
}