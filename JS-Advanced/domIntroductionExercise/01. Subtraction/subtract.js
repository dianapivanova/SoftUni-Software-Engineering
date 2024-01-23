function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;
    let divide = Number(firstNum) - Number(secondNum)
    let result = document.getElementById('result')
    result.textContent = divide
}