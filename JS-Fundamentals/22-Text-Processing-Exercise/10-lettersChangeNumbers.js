function lettersChange(str) {
    let arr = str.split(' ')
    arr = arr.filter(x => x !== "")

    let sum = 0

    for (let combination of arr) {
        let firstLetter = combination[0]
        let lastLetter = combination[combination.length - 1]
        let num = Number(combination.slice(1, combination.length - 1))

        if (firstLetter == firstLetter.toUpperCase()) {
            let code = firstLetter.charCodeAt() - 64
            num /= code
        } else {
            let code = firstLetter.charCodeAt() - 96
            num *= code
        }

        if (lastLetter == lastLetter.toUpperCase()) {
            let code = lastLetter.charCodeAt() - 64
            num -= code
        } else {
            let code = lastLetter.charCodeAt() - 96
            num += code
        }
        sum += num
    }

    console.log(sum.toFixed(2))

}
lettersChange('A12b s17G')