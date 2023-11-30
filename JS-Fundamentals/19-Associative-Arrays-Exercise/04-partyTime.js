function partyTime(input) {

    let vips = []
    let regulars = []

    let command = input.shift()

    while (command !== "PARTY") {
        let name = command
        if (!isNaN(Number(name.slice(0, 1)))) {
            vips.push(name)
        } else {
            regulars.push(name)
        }

        command = input.shift()
    }


    let combinedArr = vips.concat(regulars)

    for (let guests of input) {
        if (combinedArr.includes(guests)) {
            let idx = combinedArr.indexOf(guests)
            combinedArr.splice(idx, 1)
        }
    }

    console.log(combinedArr.length)
    console.log(combinedArr.join('\n'))
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])
