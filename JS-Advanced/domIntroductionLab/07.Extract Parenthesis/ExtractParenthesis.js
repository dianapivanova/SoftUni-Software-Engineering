function extract() {
    let result = []
    let pattern = /\(([^)]+)\)/g
    let text = document.getElementById('content').textContent;

    let matches = text.match(pattern)

    for (let match of matches) {
        result.push(match)
    }

    console.log(result.join('; '))

}
