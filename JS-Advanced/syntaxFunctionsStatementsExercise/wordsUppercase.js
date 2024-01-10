function words(str) {
    let pattern = /[A-Za-z0-9]+/g

    let matches = str.match(pattern)

    let result = []

    for (let match of matches) {
        result.push(match.toUpperCase())
    }

    console.log(result.join(', '))
}
words('Hi, how are you?')