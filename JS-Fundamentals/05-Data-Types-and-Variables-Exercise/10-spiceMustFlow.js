function spice(yield) {

    let days = 0
    let spices = 0

    while (yield >= 100) {
        spices += yield
        days++
        yield -= 10
        spices -= 26
    }

    if (spices >= 26) {
        spices -= 26
    }

    console.log(days)
    console.log(spices)
}
spice()