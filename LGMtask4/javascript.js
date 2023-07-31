let currentValue = '';

function appendValue(value) {
    currentValue += value;
    updateDisplay();
}

function clearDisplay() {
    currentValue = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentValue);
        currentValue = result.toString();
        updateDisplay();
    } catch (error) {
        currentValue = 'Error';
        updateDisplay();
    }
}
function Delete(){
    currentValue=currentValue.slice(0, -1);
    updateDisplay();
}
function updateDisplay() {
    document.getElementById('display').value = currentValue;
}

