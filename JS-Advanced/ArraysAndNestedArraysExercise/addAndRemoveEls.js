function addAndRemove(arr) {
    let res = []
    let initNum = 1

    for (let i = 0; i < arr.length; i++) {
        arr[i] == "add" ? res.push(initNum) : res.pop(initNum)
        initNum++
    }

    res.length > 0 ? console.log(res.join('\n')) : console.log('Empty')

}
addAndRemove(['add',
    'add',
    'remove',
    'add'])