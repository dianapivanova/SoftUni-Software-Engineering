function cinema(input) {
    let projection = input[0]
    let income = 0
    let rows = Number(input[1])
    let columns = Number(input[2])

    if (projection === "Premiere") {
        income = rows * columns * 12.0
    } else if (projection === "Normal") {
        income = rows * columns * 7.50
    } else {
        income = rows * columns * 5.00
    }
    console.log(`${income.toFixed(2)} leva`)
}
cinema()