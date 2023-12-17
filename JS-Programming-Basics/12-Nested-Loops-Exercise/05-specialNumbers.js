function specialNumbers([num]) {
    num = Number(num)
    let specialNums = []

    for (let i = 1111; i <= 9999; i++) {
        let isSpecial = true
        let currentNum = String(i)
        for (let j = 0; j < currentNum.length; j++) {
            if (num % Number(currentNum[j]) !== 0) {
                isSpecial = false;
            }
        }
        if (isSpecial) {
            specialNums.push(i)
        }
    }

    console.log(specialNums.join(' '))

}
specialNumbers(["3"])