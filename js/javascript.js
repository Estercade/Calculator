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
    return (Number(num1) + Number(num2));
}

function subtract(num1, num2) {
    return (Number(num1) - Number(num2));
}

function multiply(num1, num2) {
    return (Number(num1) * Number(num2));
}

function divide(num1, num2) {
    return (Number(num1) / Number(num2));
}

let num1, num2, operator;

const display = document.getElementById('display');

// const buttonsList = document.querySelectorAll('button');
// buttonsList.forEach((button) => button.addEventListener('click', logButton));

var currentValue = 0;

const equalBtn = document.getElementById('equal');
equalBtn.addEventListener('click', (e) => {
    num2 = currentValue;
    currentValue = operate(operator, num1, num2);
    updateDisplay();
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
});

const operatorBtnList = document.querySelectorAll('.operatorBtn');
operatorBtnList.forEach((operatorBtn) => operatorBtn.addEventListener('click', (e) => {
    operator = e.target.innerHTML;
    if (num1 === undefined) {
        num1 = currentValue;
        currentValue = 0;
        updateDisplay();
    } else if (num1 != undefined && operator != undefined) {
        num2 = currentValue;
        currentValue = operate(operator, num1, num2);
        num1 = currentValue;
        currentValue = 0;
        updateDisplay();
        num2 = undefined;
        operator = undefined;
}}));

const numberBtnList = document.querySelectorAll('.numberBtn');
numberBtnList.forEach((numberBtn) => numberBtn.addEventListener('click', (e) => {
    currentValue === undefined || currentValue === 0 ? currentValue = e.target.innerHTML : currentValue += e.target.innerHTML;
    updateDisplay();
}));

// Update display with every button press
// buttonsList.forEach((button) => button.addEventListener('click', updateDisplay));

// Initial display content
bottomDisplay.textContent = '123456789';

function updateDisplay() {
    topDisplay.textContent = `${num1} ${operator} ${num2}`
    bottomDisplay.textContent = `${currentValue}`;
}

const clearButton = document.getElementById('clearBtn');
clearButton.addEventListener('click', clear);

function clear() {
    num1 = undefined;
    num2 = undefined;
    currentValue = 0;
    operator = undefined;
    updateDisplay();
}