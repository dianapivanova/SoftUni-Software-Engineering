function addAndSubstract(numOne, numTwo, numThree) {
    let result1 = sum(numOne, numTwo)
    let result2 = subtract(result1, numThree)
    console.log(result2)

    function sum(num1, num2) {
        return num1 + num2
    }

    function subtract(num1, num2) {
        return num1 - num2
    }

}
addAndSubstract(23, 6, 10)

