function arrayManipulator(arr, operations) {

    for (let i = 0; i < operations.length; i++) {
        let tokens = operations[i].split(' ')
        let command = tokens[0]
        let idx = Number(tokens[1])

        switch (command) {
            case "add":
                let element = Number(tokens[2])
                arr.splice(idx, 0, element)
                    ; break;
            case "addMany":
                let addedNums = tokens.slice(2,).map(Number)
                for (let num of addedNums) {
                    arr.splice(idx, 0, num)
                    idx++
                }
                ; break;
            case "contains":
                let el = Number(tokens[1])
                console.log(arr.indexOf(el))
                    ; break;
            case "remove":
                arr.splice(idx, 1)
                break;
            case "shift":
                let position = Number(tokens[1])
                for (let i = 0; i < position; i++) {
                    let element = arr.shift()
                    arr.push(element)
                }; break;
            case "sumPairs":
                let newArr = []
                for (let i = 0; i < arr.length; i += 2) {
                    if (i + 1 < arr.length) {
                        newArr.push(arr[i] + arr[i + 1])
                    } else {
                        newArr.push(arr[i])
                    }

                }
                arr = newArr
                    ; break;
            case "print":
                console.log(`[ ${arr.join(", ")} ]`); break;
        }

    }

}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
)

