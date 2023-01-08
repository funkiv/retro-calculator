

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
            return divide(num1, num2);
    }
}

//Basic Math Functions
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;}

function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

//calc screen variable creation
let calcScreen = document.getElementById("calc-input")
//String passed to calc screen and used to evaluate equations
let equation = "";

//creates nodelist of number buttons
let calcButtons = document.getElementsByClassName("calc-number");
//Adds event listeners to each number button
for(let item of calcButtons) {
    item.addEventListener("click", () => {
        buttonPress(item.innerText);
    });
}

let num1 = "";
let num2 = "";
let operator = "";   
function buttonPress(calcButton) { 
    console.log(calcButton);
    if(calcButton === "="){
        console.log(operate(operator, num1, num2));
    } 
    
    if (operator === "" && !isNaN(Number(calcButton))) {
        num1 += calcButton;
        calcScreen.textContent = num1;
    } else if(num1 !== "" && isNaN(Number(calcButton))) {
        operator = calcButton;
        calcScreen.textContent = num1 + operator;
    } else if(operator !== "") {
        num2 += calcButton;
        calcScreen.textContent = num1 + operator + num2;
    }

}


