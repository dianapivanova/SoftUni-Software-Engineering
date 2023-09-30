function pyramid(input) {
    let n = Number(input[0])
    let printNumber = 1
    let isFinish = false;

    for (let row = 1; row <= n; row++) {
        let buff = ""

        for (let col = 1; col <= row; col++) {
            buff += `${printNumber} `
            if (printNumber === n) {
                isFinish = true
                break;
            }
            printNumber++
        }
        console.log(buff)
        if (isFinish === true) {
            break;
        }
    }

}
pyramid()