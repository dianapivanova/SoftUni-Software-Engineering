function journey(input) {

    let budget = Number(input[0])
    let season = input[1]

    let place = ""
    let destination = ""
    let total = 0

    if (budget <= 100) {
        destination = "Bulgaria"
        if (season === "summer") {
            total = budget * 0.30
            place = "Camp"
        } else {
            total = budget * 0.70
            place = "Hotel"
        }
    } else if (budget <= 1000) {
        destination = "Balkans"
        if (season === "summer") {
            total = budget * 0.40
            place = "Camp"
        } else {
            total = budget * 0.80
            place = "Hotel"
        }
    } else {
        destination = "Europe"
        total = budget * 0.90
        place = "Hotel"

    }

    console.log(`Somewhere in ${destination}`)
    console.log(`${place} - ${total.toFixed(2)}`)
}
journey(["50", "Summer"])