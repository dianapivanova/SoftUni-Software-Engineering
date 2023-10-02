function addAndRemove(arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i]
        let printNum = i + 1

        if (command == "add") {
            newArr.push(printNum)
        } else {
            newArr.pop()
        }
    }

    if (newArr.length == 0) {
        console.log(`Empty`)
    }

    console.log(newArr.join(' '))

}
addAndRemove(['add', 'add', 'add', 'add']) // 1 2 3 4
addAndRemove(['add', 'add', 'remove', 'add', 'add']) // 1 4 5
addAndRemove(['add', 'remove'])