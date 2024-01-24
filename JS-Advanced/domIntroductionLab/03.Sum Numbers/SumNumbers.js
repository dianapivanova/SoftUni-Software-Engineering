function calc() {
    let firstNum = document.getElementById('num1').value
    let secondNum = document.getElementById('num2').value
    let resultArea = document.getElementById('sum')

    resultArea.value = Number(firstNum) + Number(secondNum)

}
