function arrayModifier(arr) {
    let modifyArray = arr.shift().split(' ').map(Number)

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ')
        let command = tokens[0]
        if (command == "swap") {
            let idx1 = Number(tokens[1])
            let idx2 = Number(tokens[2])
            let temp = modifyArray[idx1]
            modifyArray[idx1] = modifyArray[idx2]
            modifyArray[idx2] = temp
        } else if (command == "multiply") {
            let idx1 = Number(tokens[1])
            let idx2 = Number(tokens[2])
            let newNum = modifyArray[idx1] * modifyArray[idx2]
            modifyArray.splice(idx1, 1, newNum)
        } else if (command == "decrease") {
            modifyArray = modifyArray.map(x => (x - 1))
        }
    }

    console.log(modifyArray.join(', '))
}


arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
)