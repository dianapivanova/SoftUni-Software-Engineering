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

    console.log(`${sum} - ${result}`)
}
intererOrFloat()