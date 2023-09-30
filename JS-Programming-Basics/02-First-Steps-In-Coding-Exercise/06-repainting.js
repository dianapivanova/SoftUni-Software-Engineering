function repainting(input) {

    let nylon = Number(input[0]) + 2
    let paint = Number(input[1]) * 1.10
    let paintThinner = Number(input[2])
    let workHours = Number(input[3])

    let nylonPrice = nylon * 1.50
    let paintPrice = paint * 14.50
    let paintThinnerPrice = paintThinner * 5

    let materialsExpenses = nylonPrice + paintPrice + paintThinnerPrice + 0.40
    let pricePerHourWorking = materialsExpenses * 0.3

    let totalExpenses = materialsExpenses + pricePerHourWorking * workHours

    console.log(totalExpenses)
}
repainting()