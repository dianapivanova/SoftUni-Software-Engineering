function schoolSupplies(input) {

    let pens = Number(input[0])
    let markers = Number(input[1])
    let litres = Number(input[2])
    let discount = Number(input[3]) / 100

    let pensPrice = pens * 5.80
    let markersPrice = markers * 7.20
    let litresPrice = litres * 1.20

    let total = pensPrice + markersPrice + litresPrice
    let totalExpenses = total - total * discount

    console.log(totalExpenses)
}
schoolSupplies(["2 ", "3 ", "4 ", "25 "])