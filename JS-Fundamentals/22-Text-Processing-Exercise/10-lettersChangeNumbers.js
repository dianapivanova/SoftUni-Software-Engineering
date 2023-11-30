function lettersChange(str) {
    let els = str.split(' ')
    els = els.filter(x => x !== '')
    let totalSum = 0
    for (let el of els) {
        let firstLetter = el.slice(0, 1)
        let lastLetter = el.slice(el.length - 1)
        let num = Number(el.slice(1, el.length - 1))

        if (firstLetter == firstLetter.toUpperCase()) {
            let code = firstLetter.charCodeAt()
            let divisionNum = code - 64
            num /= divisionNum
        } else {
            let code = firstLetter.charCodeAt()
            let multiplyNum = code - 96
            num *= multiplyNum
        }

        if (lastLetter == lastLetter.toUpperCase()) {
            let code = lastLetter.charCodeAt()
            let subtractNum = code - 64
            num -= subtractNum
        } else {
            let code = lastLetter.charCodeAt()
            let addNum = code - 96
            num += addNum
        }

        totalSum += num
    }

    console.log(totalSum.toFixed(2))
}
lettersChange('A12b s17G')