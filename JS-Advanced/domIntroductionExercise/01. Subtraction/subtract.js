function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;
    let resultArea = document.getElementById('result')
    resultArea.textContent = Number(firstNum) - Number(secondNum)
}