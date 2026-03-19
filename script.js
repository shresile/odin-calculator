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
    if (b == 0) {
        //report error when divide by 0
        return "Divide by 0 :(";
    } else {
        return a/b;
    }
    
}

function operate (num1, op, num2) {
    let result;
    if (op == "add") result = add(num1, num2);
    if (op == "subtract") result = subtract(num1, num2);
    if (op == "multiply") result = multiply(num1, num2);
    if (op == "divide") result = divide(num1, num2);
    return result;  
}

function clearMemory () {
    num1 = '';
    num2 = '';
    numTempt = '';
    op = '';    
    result = '';
    //enable . button after clearing memory
    floatPointButton.disabled = false;

}


let num1;
let num2;
let op;
let numTempt='';
let result;

//update numTemp when digit buttons are clicked
//update display screen
let displayWindow = document.querySelector('.display');
const digitButtons = document.querySelectorAll(".digit");
const floatPointButton = document.querySelector("#floatPoint");
digitButtons.forEach(button => button.addEventListener("click", (e) => {
    //Disable the . button if there’s already a decimal separator    
    if (numTempt.split("").includes(".")) {        
        floatPointButton.disabled = true;        
    }
    numTempt += e.target.textContent.toString();
    console.log(numTempt);//can be deleted later
    displayWindow.textContent = numTempt;
}));

//when operator buttons are pressed
let fourOperators = ["add", "subtract", "multiply", "divide"];
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener("click", (e) => {
    //enable . button when entering a new number
    floatPointButton.disabled = false;
    let clickedButton = e.target.id;
    console.log(`clicked button: ${clickedButton}`);//can be deleted later
    if (fourOperators.includes(clickedButton)) {
         if (op && num1) {
            if (numTempt == "") {
                op = clickedButton;
            } else {
                num2 = +numTempt;
                console.log(`num1:${num1}, op: ${op}, num2: ${num2}`);//can be deleted later
                result = operate (num1, op, num2); 
                displayWindow.textContent = Math.round(result * 1000) / 1000 ;
                num1 = result;
                op = clickedButton;
                num2 = '';
                numTempt = '';              
                result = '';
            }
            

         } else {
            displayWindow.textContent = '';
            num1 = +numTempt;      
            numTempt = '';
            op = clickedButton;
            console.log(`op: ${op}`);//can be deleted later
        }
        
        
    } else {
        num2 = numTempt;
        console.log(`num2: ${num2} type: ${typeof num2}`);
        
        if (op == undefined || num2 == '') {
            //report error when not entered completely
            displayWindow.textContent = "Partial input :(";
            clearMemory();
        }  else {
            num2 = +numTempt;
            console.log(`num1:${num1}, op: ${op}, num2: ${num2}`);//can be deleted later
            result = operate (num1, op, num2); 
            displayWindow.textContent = Math.round(result * 1000) / 1000;           
            clearMemory();
        }     
        
        
    }

    

}));

//setting `clear` button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    displayWindow.textContent = "";
    clearMemory();
});

//setting `backspace` button
const backspaceButton = document.querySelector("#backspace");
backspaceButton.addEventListener("click", () => {
    numTempt = numTempt.split("");
    numTempt.pop();
    numTempt = numTempt.join("");
    console.log(numTempt);
    displayWindow.textContent = numTempt;

});

//Add keyboard support
const digitKeys = "1234567890.";
const operatorKeys = "+-*/=";
document.addEventListener("keypress", (e) => {
    
    if (digitKeys.includes(e.key)) {
        if (e.key == ".") {            
        document.getElementById(`floatPoint`).click();
        } else {
        document.getElementById(`${e.key}`).click();
        }
        
    } else if (operatorKeys.includes(e.key)) {
        switch (e.key) {
            case "/":
                document.getElementById("divide").click();                
                break;
            case "*":
                document.getElementById("multiply").click();
                break;
            case "+":
                document.getElementById("add").click();                
                break;
            case "-":
                document.getElementById("subtract").click();                
                break;
            case "=":
                document.getElementById("equal").click();                
                break;
            


        }
    } else if (e.key === "Backspace") {
        document.getElementById("backspace").click();                

    } else if (e.key === "Enter") {
        document.getElementById("equal").click();  
    } 
});









