function add(a,b){
    return a+b;
}

function subtract (a,b) {
    return a-b;
}

function multiply (a,b) {
    return a*b;
}

function divide (a,b) {
    return a/b;
}

function operate (num1, op, num2) {
    if (op == "add") displayWindow.textContent = add(num1, num2);
    if (op == "subtract") displayWindow.textContent = subtract(num1, num2);
    if (op == "multiply") displayWindow.textContent = multiply(num1, num2);
    if (op == "divide") displayWindow.textContent = divide(num1, num2);
    num1 = '';
    num2 = '';
    numTempt = '';


}

let num1;
let num2;
let op;
let numTempt='';

//update numTemp when digit buttons are clicked
//update display screen
let displayWindow = document.querySelector('.display');
const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach(button => button.addEventListener("click", (e) => {
    numTempt += e.target.textContent.toString();
    console.log(numTempt);
    displayWindow.textContent = numTempt;
}));

//when operator buttons are pressed
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener("click", (e) => {
    
    let clickedButton = e.target.id;
    console.log(`clicked button: ${clickedButton}`);
    if (clickedButton == "add" || 
        clickedButton =="subtract" || 
        clickedButton =="multiply" || 
        clickedButton == "divide") {
        displayWindow.textContent = '';
        num1 = +numTempt;      
        numTempt = '';
        if (clickedButton == "add" ) op = "add";
        if (clickedButton == "subtract" ) op = "subtract";
        if (clickedButton == "multiply" ) op = "multiply";
        if (clickedButton == "multiply" ) op = "multiply";
        console.log(`op: ${op}`);
    } else {        
        num2 = +numTempt;
        console.log(`num1:${num1}, op: ${op}, num2: ${num2}`);
        operate (num1, op, num2); 
        
    }

    

}));






