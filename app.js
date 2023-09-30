const calculatorDisplay = document.querySelector('.calculator-display');
const inputButtons = document.querySelectorAll('.input-button');
const clearButton = document.querySelector('.clear-button');

let displayValue = "";
let firstInput = "";
let secondInput = "";
let currentOperator = "";

// On click, buttons will return their id
inputButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Returns the operation
        if(button.id === "=") {
            displayValue = operate(currentOperator, firstInput, secondInput);
        }
        // Sets the current operation
        else if(button.id === "+" ||
                button.id === "-" ||
                button.id === "*" || 
                button.id === "/") {
            currentOperator = button.id;
        }
        // Assigns the input
        else {
            if(firstInput === "") {
                firstInput = button.id;
            }
            else {
                secondInput = button.id;
            }
        }
        console.log(`${firstInput} ${currentOperator} ${secondInput}`);
        updateDisplay();
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
function updateDisplay() {
    displayValue = `${firstInput} ${currentOperator} ${secondInput}`;
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