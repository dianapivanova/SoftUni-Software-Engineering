function partyTime(input) {

    let command = input.shift()
    let regulars = []
    let vips = []

    while (command !== "PARTY") {
        let firstSymb = command[0]
        if (!isNaN(firstSymb)) {
            vips.push(command)
        } else {
            regulars.push(command)
        }

        command = input.shift()
    }



    for (let name of input) {
        if (regulars.includes(name)) {
            let idx = regulars.indexOf(name)
            regulars.splice(idx, 1)
        } else if (vips.includes(name)) {
            let idx = vips.indexOf(name)
            vips.splice(idx, 1)
        }
    }

    let resultArr = vips.concat(regulars)

    console.log(resultArr.length)
    console.log(resultArr.join('\n'))

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