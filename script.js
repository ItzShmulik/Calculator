const displayInput = document.getElementById("display-input");

const numberButtons = document.getElementsByClassName("number");
const symbolButtons = document.getElementsByClassName("symbol");
const clearButton = document.getElementById("clear");
const eqButton = document.getElementById("=");

let numbers = [];
let symbols = [];
let currentNumber = 0;
let text = "";

// Assign display text functions to number, symbol and clear buttons respectively
for (let index = 0; index < numberButtons.length; index++) {
    const button = numberButtons[index];
    button.addEventListener("click", function(){displayText(button.id), addChar(button, "number")});
}

for (let index = 0; index < symbolButtons.length; index++) {
    const button = symbolButtons[index];
    button.addEventListener("click", function(){displayText(button.id), addChar(button, "symbol")});
}

clearButton.addEventListener("click", clearText);
eqButton.addEventListener("click", function(){calculate(currentNumber)});

// Display Text to screen based on the given id
function displayText(id){
    text += id;
    displayInput.innerHTML = text;
}

// Clear text on screen
function clearText(){
    text = "";
    displayInput.innerHTML = text;
    currentNumber = 0;
    numbers = [];
    symbols = [];
}

// Calculate input
function calculate(cNumber){
    numbers.push(cNumber);
    let currentAnswer = 0;

    // Check if there were any numbers
    if(numbers.length != 0){
        // Option 1: Only 1 number was inputted
        if(numbers.length == 1){
            currentAnswer = numbers[0];
            console.log(currentAnswer);
        // Option 2: More than 1 numbers were inputted
        }else{
            
        }
    }

    clearText();
}

// Add the entered character based on it's type
function addChar(element, type){
    if(type == "number"){
        currentNumber = currentNumber * 10 + JSON.parse(element.id);
    }else{
        appendLastNumber(element);
    }
}

function appendLastNumber(element){
    numbers.push(currentNumber);
    currentNumber = 0;
    symbols.push(element.id);
}