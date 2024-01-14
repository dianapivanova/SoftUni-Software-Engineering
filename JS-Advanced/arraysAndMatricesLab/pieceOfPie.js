function pieceOfPie(arr, start, end) {
    let res = []
    let startIdx = arr.indexOf(start)
    let endIdx = arr.indexOf(end)

    for (let i = startIdx; i <= endIdx; i++) {
        res.push(arr[i])
    }

    return res
}
pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)