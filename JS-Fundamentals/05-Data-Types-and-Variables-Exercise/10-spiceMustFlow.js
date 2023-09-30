function spice(startYield) {
    let days = 0
    let minedYield = 0

    while (startYield >= 100) {
        days++
        minedYield += startYield - 26
        startYield -= 10
    }

    if (minedYield >= 26) {
        minedYield -= 26
    }


    console.log(days)
    console.log(minedYield)


}
spice()