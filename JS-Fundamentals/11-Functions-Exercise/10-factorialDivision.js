function factorialDivision(firstNum, secondNum) {

    let result1 = factorialMultipliers(firstNum) // first num factorial
    let result2 = factorialMultipliers(secondNum) // seccond num factorial
    let totalResult = result1 / result2 // total result

    console.log(totalResult.toFixed(2))

    function factorialMultipliers(num) {
        let factorial = 1
        for (let i = num; i >= 1; i--) {
            factorial *= i
        }
        return factorial
    }

}
factorialDivision(5, 2)