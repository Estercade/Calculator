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
    return Math.round((Number(num1) + Number(num2)) * 1000000000000) / 1000000000000;
}

function subtract(num1, num2) {
    return Math.round((Number(num1) - Number(num2)) * 1000000000000) / 1000000000000;
}

function multiply(num1, num2) {
    return Math.round((Number(num1) * Number(num2)) * 1000000000000) / 1000000000000;
}

function divide(num1, num2) {
    return Math.round((Number(num1) / Number(num2)) * 1000000000000) / 1000000000000;
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
        currentValue = operate(operator, num1, num2).toString();
        updateTopDisplayEquals();
        updateBottomDisplay();
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
        updateBottomDisplay();
        currentValue = undefined;
    } else if (num1 === undefined && operator === undefined && currentValue !== undefined) {
        operator = e.target.innerHTML;
        num1 = currentValue;
        updateTopDisplay();
        updateBottomDisplay();
        currentValue = undefined;
    } else if (num1 != undefined && operator != undefined && currentValue === undefined) {
        operator = e.target.innerHTML;
        updateTopDisplay();
        return;
    } else if (num1 === undefined && operator === undefined && currentValue === undefined) {
        num1 = 0;
        operator = e.target.innerHTML;
        updateTopDisplay();
        updateBottomDisplay();
    }
};

const numberBtnList = document.querySelectorAll('.numberBtn');
numberBtnList.forEach((numberBtn) => numberBtn.addEventListener('click', numberFunction));
function numberFunction(e) {
    if (e.target.innerHTML === '0' && currentValue === '0') {
        return;
    }
    currentValue === undefined || currentValue === 0 ? currentValue = e.target.innerHTML : currentValue += e.target.innerHTML;
    updateBottomDisplay();
};

const decimalBtn = document.getElementById('decimal');
decimalBtn.addEventListener('click', decimalFunction);
function decimalFunction() {
    if (currentValue === undefined) {
        currentValue = '0.';
        updateBottomDisplay();
    } else if (currentValue.toString().includes('.')) {
        return;
    } else {
        currentValue += '.';
        updateBottomDisplay();
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
function updateBottomDisplay() {
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
    updateBottomDisplay();
    currentValue = undefined;
}

const backspaceBtn = document.getElementById('backspaceBtn');
backspaceBtn.addEventListener('click', backspace);

function backspace() {
    if (currentValue === undefined || currentValue.length === 1 || currentValue === 0) {
        currentValue = undefined;
    } else {
        currentValue = currentValue.slice(0, -1);
    }
    updateBottomDisplay();
}

const keyInputListener = document.addEventListener('keydown', keyInput);

// Array of valid key inputs
const validInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'Escape'];

function keyInput(e) {
    console.log(e.key)
    if (!validInputs.includes(e.key)) {
        return;
    } else if (e.key === 'Backspace' || e.key === 'Enter') {
        e.preventDefault();
    }
    switch (e.key) {
        case '1':
            document.getElementById('one').click();
            break;
        case '2':
            document.getElementById('two').click();
            break;
        case '3':
            document.getElementById('three').click();
            break;     
        case '4':
            document.getElementById('four').click();
            break;
        case '5':
            document.getElementById('five').click();
            break;
        case '6':
            document.getElementById('six').click();
            break; 
        case '7':
            document.getElementById('seven').click();
            break; 
        case '8':
            document.getElementById('eight').click();
            break; 
        case '9':
            document.getElementById('nine').click();
            break; 
        case '0':
            document.getElementById('zero').click();
            break; 
        case '+':
            document.getElementById('add').click();
            break;
        case '-':
            document.getElementById('subtract').click();
            break;
        case '*':
            document.getElementById('multiply').click();
            break;     
        case '/':
            document.getElementById('divide').click();
            break;
        case '=':
            document.getElementById('equal').click();
            break;
        case 'Enter':
            console.log(e.key);
            e.preventDefault();
            document.getElementById('equal').click();
            break;
        case 'Backspace':
            console.log(e.key);
            e.preventDefault();
            document.getElementById('backspaceBtn').click();
            break; 
        case 'Escape':
            document.getElementById('clearBtn').click();
            break; 

    }
}