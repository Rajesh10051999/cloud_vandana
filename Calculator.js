let displayValue = '';

function appendToDisplay(value) {
    if (value === 'AC') {
        clearDisplay();
    } else if (value === '=') {
        calculate();
    } else {
        displayValue += value;
        document.getElementById('display').value = displayValue;
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
