function lily(input) {
    let age = Number(input[0]);
    let washer = Number(input[1]);
    let toyPrice = Number(input[2]);

    let sum = 0
    let toysCounter = 0
    let moneyCounter = 0
    let moneyPerBday = 10

    for (let birthday = 1; birthday <= age; birthday++) {
        if (birthday % 2 === 0) {
            moneyCounter += moneyPerBday
            moneyCounter--
            moneyPerBday += 10
        } else {
            toysCounter++
        }
    }

    sum = toyPrice * toysCounter + moneyCounter

    if (sum >= washer) {
        console.log(`Yes! ${(sum - washer).toFixed(2)}`)
    } else {
        console.log(`No! ${(washer - sum).toFixed(2)}`)
    }

}
lily()