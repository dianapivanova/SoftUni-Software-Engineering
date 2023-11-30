function pascalCaseSplitter(input) {
    let pattern = /[A-Z][a-z]*/g
    let match = input.matchAll(pattern)

    let resultArr = []

    for (let el of match) {
        resultArr.push(el[0])
    }

    console.log(resultArr.join(', '))
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')