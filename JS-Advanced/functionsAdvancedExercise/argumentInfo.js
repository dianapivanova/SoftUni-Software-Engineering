function argumentInfo(...arguments) {

    let types = {}

    for (let argument of arguments) {
        console.log(`${typeof argument}: ${argument}`)

        if (!types[typeof argument]) {
            types[typeof argument] = 1
        } else {
            types[typeof argument] += 1
        }
    }

    let resultArr = Object.entries(types).sort((a, b) => b[1] - a[1])

    for (let entries of resultArr) {
        console.log(`${entries[0]} = ${entries[1]}`)
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })