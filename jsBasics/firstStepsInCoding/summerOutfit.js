function summerOutfit(input) {
    let degrees = Number(input[0])
    let daytime = input[1]

    let outfit;
    let shoes;

    if (degrees >= 10 && degrees <= 18) {
        if (daytime == "Morning") {
            outfit = "Sweatshirt"
            shoes = "Sneakers"
        } else if (daytime == "Afternoon") {
            outfit = "Shirt"
            shoes = "Sandals"
        } else if (daytime == "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    } else if (degrees > 18 && degrees <= 24) {
        if (daytime == "Morning") {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if (daytime == "Afternoon") {
            outfit = "T-Shirt"
            shoes = "Sandals"
        } else if (daytime == "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }

    } else if (degrees >= 25) {
        if (daytime == "Morning") {
            outfit = "T-Shirt"
            shoes = "Sandals"
        } else if (daytime == "Afternoon") {
            outfit = "Swim Suit"
            shoes = "Barefoot"
        } else if (daytime == "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}
summerOutfit(["16",

    "Morning"])