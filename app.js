const calculatorDisplay = document.querySelector('.calculator-display');
const inputButtons = document.querySelectorAll('.input-button');
const clearButton = document.querySelector('.clear-button');
let displayValue = "";

// On click, buttons will return their id
inputButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.id);
        displayValue += button.id;
        updateDisplayInput();
    });
});

clearButton.addEventListener('click', clearDisplay);

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

// Returns the appropriate operation from the user input
function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Illegal input!";
    }
}

// Updates the display screen on the calculator
function updateDisplayInput() {
    calculatorDisplay.textContent = displayValue;
}

function clearDisplay() {
    displayValue = "";
    updateDisplayInput();
}