function vacation(group, type, day) {
    let price = 0

    switch (type) {
        case "Students": switch (day) {
            case "Friday": price = 8.45; break;
            case "Saturday": price = 9.80; break;
            case "Sunday": price = 10.46; break;
        } break;
        case "Business": switch (day) {
            case "Friday": price = 10.90; break;
            case "Saturday": price = 15.60; break;
            case "Sunday": price = 16; break;
        } break;
        case "Regular": switch (day) {
            case "Friday": price = 15; break;
            case "Saturday": price = 20; break;
            case "Sunday": price = 22.50; break;
        } break;
    }

    let totalPrice = price * group

    if (type === "Students" && group >= 30) {
        totalPrice *= 0.85
    }
    if (type === "Business" && group >= 100) {
        totalPrice = (group - 10) * price
    }
    if (type === "Regular" && (group >= 10 && group <= 20)) {
        totalPrice *= 0.95
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation(30, "Students", "Sunday")