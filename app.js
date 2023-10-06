const calculatorDisplay = document.querySelector('.calculator-display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll(".operator-button");
const clearButton = document.querySelector('.clear-button');
const evaluateButton = document.querySelector('.evaluate-button');
const deleteButton = document.querySelector('.delete-button');
const decimalButton = document.querySelector('.decimal-button');

let displayValue = "";
let firstInput = "";
let secondInput = "";
let currentOperator = "";

// On click, number will append to display
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumberToDisplay(button.id);
    });
});

// On click, append operator
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendOperator(button.id);
    });
});

// On click, evaluate the operation
evaluateButton.addEventListener('click', () => {
    displayValue = roundNumber(operate(currentOperator, firstInput, secondInput));

    // Allows for multiple operations
    firstInput = displayValue;
    secondInput = "";
    currentOperator = "";

    updateDisplay();
});

// On click, clears the display and values
clearButton.addEventListener('click', clearDisplay);

// On click, removes the last input
deleteButton.addEventListener('click', removeNumberFromDisplay);

// On click, converts the number to a decimal
decimalButton.addEventListener('click', convertToDecimal);

// Basic arithmetic functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// Rounds number to the third decimal place
function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

// Returns the appropriate operation from the user input
function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            if(num1 === 0 || num2 === 0) {
                alert("Can't divide by zero!");
                return 0;
            } 
            return divide(num1, num2);
        default:
            return "Illegal input!";
    }
}

// Appends a number to the display
function appendNumberToDisplay(num) {
    if(currentOperator === "") {
        firstInput += num;
        displayValue = firstInput;
    }
    else {
        secondInput += num;
        displayValue = secondInput;
    }
    updateDisplay();
}

// Converts number to decimal
function convertToDecimal() {
    if(displayValue.indexOf('.') !== - 1) return;
    displayValue += '.';

    // Verify which operand to place decimal number
    if(currentOperator === "") {
        firstInput = displayValue;
    }
    else {
        secondInput = displayValue;
    }

    updateDisplay();
}

// Removes the last input from the display
function removeNumberFromDisplay() {
    displayValue = displayValue.slice(0, -1);

    // Verify which operand to place sliced number
    if(currentOperator === "") {
        firstInput = displayValue;
    }
    else {
        secondInput = displayValue;
    }

    updateDisplay();
}

// Appends an operator to the current operation
function appendOperator(operator) {
    currentOperator = operator;
}

// Updates the display screen on the calculator
function updateDisplay() {
    calculatorDisplay.textContent = displayValue;
}

// Clears the calculator display
function clearDisplay() {
    displayValue = "";
    resetInput();
    updateDisplay();
}

// Resets the input values 
function resetInput() {
    firstInput = "";
    secondInput = "";
    currentOperator = "";
}