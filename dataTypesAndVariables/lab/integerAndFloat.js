function intererOrFloat(num1, num2, num3) {
    // find the sum
    let sum = num1 + num2 + num3
    let result = ''

    //check if the total is integer or float
    //version1
    if (sum % 1 == 0) {
        result = 'Integer'
    } else {
        result = 'Float'
    }

    //version2
    // for cycle by checking every index in the sum #, check if there is a . in the sum with isFloat flag
    //version 3 
    // Math.round(sum) !== sum
    //version 4
    //Math.round(sum) - sum !== 0

    console.log(`${sum} - ${result}`)
}
intererOrFloat(9, 100, 1.1)