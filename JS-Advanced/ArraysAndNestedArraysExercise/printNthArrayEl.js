function printNthArrayEl(array, step) {
    let res = [];

    for (let i = 0; i < array.length; i += step) {
        res.push(array[i])
    }

    console.log(res)
}
printNthArrayEl(['5',
    '20',
    '31',
    '4',
    '20'],
    2)