function pieceOfPie(arr, start, end) {
    let starIdx = arr.indexOf(start)
    let endIdx = arr.indexOf(end)
    arr = arr.slice(starIdx, endIdx + 1)
    return arr
}
pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)