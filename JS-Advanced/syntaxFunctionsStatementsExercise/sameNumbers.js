function sameNumbers(num) {
    let digits = String(num).split('')
    let compareNum = digits.shift()
    let total = Number(compareNum)
    let areEqual = true;

    for (let digit of digits) {
        if (!(digit == compareNum)) {
            console.log('false'); areEqual = false; break;
        }
    }

    if (areEqual) {
        console.log('true')
    }


    for (let digit of digits) {
        digit = Number(digit)
        total += digit
    }

    console.log(total)
}
sameNumbers(1234)