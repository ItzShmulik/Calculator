let numbers = [];
let symbols = [];

let text = "";

const display = document.getElementById("display-input");
const buttonGrid = document.getElementsByClassName("grid-item");

for (let index = 0; index < buttonGrid.length; index++) {
    const button = buttonGrid[index];
    if(button.id != "clear"){
        button.addEventListener("click", function(){displayText(button.id)});
    }else{
        button.addEventListener("click", clearText);
    }
}

function displayText(id){
    text += id;
    display.innerText = text;
}

function clearText(){
    display.innerText = "";
}