function extract() {

    let para = document.getElementById('content').textContent
    let pattern = /\(([^)]+)\)/g
    let result = []

    let match = para.matchAll(pattern)

    for (let row of match) {

        result.push(row[1])
    }

    return (result.join('; '));
}
