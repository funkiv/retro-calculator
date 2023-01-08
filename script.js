
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
let equation = "0";
calcScreen.innerText = equation;

//creates nodelist of number buttons
let calcNumbers = document.getElementsByClassName("button-number");
//Adds event listeners to each number button
for(let item of calcNumbers) {
    item.addEventListener("click", () => {
        buttonPress(item.innerText); 
    });
}
function buttonPress(calcNumbers) {
    console.log(calcNumbers);
}
