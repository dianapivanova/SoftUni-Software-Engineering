function printArray(array, delimeter) {

    let result = []

    for (let el of array) {
        result.push(el)
    }

    console.log(result.join(delimeter))
}
printArray(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
)