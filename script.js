
let firstnumber
let secondnumber
let step = 0
let operation
let result = 0

let numArray = []
let secondnumArray = []

let display = document.getElementById('display')

function getnumber(num){
    if(step === 0 || step === 1){
        numArray.push(num)
        step = 1;
        firstnumber = Number(numArray.join(''));
        display.value = firstnumber;
    }
    else if(step === 2){
        secondnumArray.push(num)
        secondnumber = Number(secondnumArray.join(''));
        display.value = secondnumber
    }
}


function getOperator(op){
    step = 2;
    operation = op;
    display.value = operation;
}

function clearDisplay(){
    display.value = 0;
    firstnumber = null;
    secondnumber = null;
    step = 0;
    operation = null;
    result = 0;
    numArray = [];
    secondnumArray = [];
}

const calculateEquals = () => {
    if(operation === '+'){
        result = firstnumber + secondnumber;
        display.value = result;
    }
    else if(operation === '-'){
        result = firstnumber - secondnumber;
        display.value = result;
    }
    else if(operation === '*'){
        result = firstnumber * secondnumber;
        display.value = result;
    }
    else if(operation === '/'){
        result = firstnumber / secondnumber;
        display.value = result;
    }
}