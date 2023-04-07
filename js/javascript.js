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

let currentValue = undefined;

const equalBtn = document.getElementById('equal');
equalBtn.addEventListener('click', equalFunction);
function equalFunction() {
    if (operator === '/' && currentValue === '0') {
        alert('Cannot divide by zero.')
    }
    else if (num1 != undefined && operator != undefined && currentValue != undefined) {
        num2 = currentValue;
        currentValue = (operate(operator, num1, num2)).toString();
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
        operator = e.target.value;
        updateTopDisplay();
        updateBottomDisplay();
        currentValue = undefined;
    } else if (num1 === undefined && operator === undefined && currentValue !== undefined) {
        operator = e.target.value;
        num1 = currentValue;
        updateTopDisplay();
        updateBottomDisplay();
        currentValue = undefined;
    } else if (num1 != undefined && operator != undefined && currentValue === undefined) {
        operator = e.target.value;
        updateTopDisplay();
        return;
    } else if (num1 === undefined && operator === undefined && currentValue === undefined) {
        num1 = 0;
        operator = e.target.value;
        updateTopDisplay();
        updateBottomDisplay();
    }
};

const numberBtnList = document.querySelectorAll('.numberBtn');
numberBtnList.forEach((numberBtn) => numberBtn.addEventListener('click', numberFunction));
function numberFunction(e) {
    if (e.target.value === '0' && currentValue === '0') {
        return;
    }
    currentValue === undefined || currentValue === 0 ? currentValue = e.target.value : currentValue += e.target.value;
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
    topDisplay.textContent = `${num1} ${operator} ${num2}`.replaceAll('undefined', '').replace('*', '×').replace('/', '÷');;
}
function updateTopDisplayEquals() {
    topDisplay.textContent = `${num1} ${operator} ${num2} = `.replaceAll('undefined', '').replace('*', '×').replace('/', '÷');
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
const validInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'Enter', 'Backspace', 'Escape'];

function keyInput(e) {
    if (!validInputs.includes(e.key)) {
        return;
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
            e.preventDefault();
            document.getElementById('equal').click();
            break;
        case 'Backspace':
            e.preventDefault();
            document.getElementById('backspaceBtn').click();
            break; 
        case 'Escape':
            e.preventDefault();
            document.getElementById('clearBtn').click();
            break; 
    }
}

const btnList = document.querySelectorAll('button');
btnList.forEach((button) => button.addEventListener('click', addTransition));
btnList.forEach((button) => button.addEventListener('transitionend', removeTransition));
btnList.forEach((button) => button.addEventListener('mouseover', addHover));
btnList.forEach((button) => button.addEventListener('mouseout', removeHover));

function addTransition(e) {
    e.target.classList.remove('pressed');
    setTimeout(function() {
        e.target.classList.add('pressed');
    })
}

function removeTransition(e) {
    if (e.propertyName != 'filter') {
        return;
    }
    e.target.classList.remove('pressed');
}

function addHover(e) {
    e.target.classList.add('hover');
}

function removeHover(e) {
    e.target.classList.remove('hover');
}