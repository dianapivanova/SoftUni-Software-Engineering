function argumentInfo(...arguments) {
    let typeObj = {}
    for (let argument of arguments) {
        let type = typeof (argument)
        console.log(`${type}: ${argument}`)

        if (!typeObj.hasOwnProperty(type)) {
            typeObj[type] = 1
        } else {
            typeObj[type]++
        }
    }

    Object.entries(typeObj)
        .sort((a, b) => (b[1] - a[1]))
        .forEach(x => console.log(`${x[0]} = ${x[1]}`))
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })