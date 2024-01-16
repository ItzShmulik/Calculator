let numbers = [];
let symbols = [];
let answer;

let text = "";

const display = document.getElementById("display-input");
const buttonGrid = document.getElementsByClassName("grid-item");

for (let index = 0; index < buttonGrid.length; index++) {
    const button = buttonGrid[index];
    if(button.id != "clear" && button.id != "="){
        button.addEventListener("click", function(){displayText(button.id), addChar(button)});
    }else if(button.id == "clear"){
        button.addEventListener("click", clearText);
    }else if(button.id == "="){
        button.addEventListener("click", calculate);
    }
}

function displayText(id){
    text += id;
    display.innerText = text;
}

function clearText(){
    text = "";
    display.innerText = text;
    console.log("Cleared text!");
}

function addChar(element){
    if(element.getAttribute("class") == "grid-item number"){
        console.log("Number!")
    }else if(element.getAttribute("class") == "grid-item symbol"){
        console.log("Symbol!");
    }
}

function calculate(){
    clearText();
}