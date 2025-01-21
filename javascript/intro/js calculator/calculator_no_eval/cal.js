let displayValue = '';
let firstOperand = '';
let operator = '';
let secondOperand = '';

function clearDisplay() {
    displayValue = '';
    firstOperand = '';
    operator = '';
    secondOperand = '';
    document.getElementById('display').value = displayValue;
}

function deleteChar() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function appendNumber(number) {
    displayValue += number.toString();
    document.getElementById('display').value = displayValue;
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        document.getElementById('display').value = displayValue;
    }
}

function appendOperator(op) {
    if (displayValue !== '') {
        firstOperand = displayValue;
        operator = op;
        displayValue = '';
        document.getElementById('display').value = displayValue;
    }
}

function calculate() {
    if (displayValue !== '' && firstOperand !== '') {
        secondOperand = displayValue;
        let result = 0;

        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
        }

        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
    }
}

document.getElementById('display').value = displayValue;