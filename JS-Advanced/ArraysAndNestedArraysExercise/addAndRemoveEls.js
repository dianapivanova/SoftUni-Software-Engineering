function addAndRemove(arr) {

    let result = []
    let num = 1

    for (let command of arr) {
        if (command == 'add') {
            result.push(num)
        } else if (command == 'remove') {
            result.pop()
        }

        num += 1
    }

    if (result.length > 0) {
        console.log(result.join('\n'))
    } else {
        console.log('Empty')
    }

}
addAndRemove(['remove',
    'remove',
    'remove'])