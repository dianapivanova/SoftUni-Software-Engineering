function tradeCommisions(input) {
    let town = input[0]
    let sales = Number(input[1])
    let commision = 0

    if (town === "Sofia") {
        if (sales >= 0 && sales <= 500) {
            commision = (sales * 0.05).toFixed(2)
        } else if (sales >= 500 && sales <= 1000) {
            commision = (sales * 0.07).toFixed(2)
        } else if (sales >= 1000 && sales <= 10000) {
            commision = (sales * 0.08).toFixed(2)
        } else {
            commision = (sales * 0.12).toFixed(2)
        }
    }
    else if (town === "Varna") {
        if (sales >= 0 && sales <= 500) {
            commision = (sales * 0.045).toFixed(2)
        } else if (sales >= 500 && sales <= 1000) {
            commision = (sales * 0.075).toFixed(2)
        } else if (sales >= 1000 && sales <= 10000) {
            commision = (sales * 0.1).toFixed(2)
        } else {
            commision = (sales * 0.13).toFixed(2)
        }
    }
    else if (town === "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            commision = (sales * 0.055).toFixed(2)
        } else if (sales >= 500 && sales <= 1000) {
            commision = (sales * 0.08).toFixed(2)
        } else if (sales >= 1000 && sales <= 10000) {
            commision = (sales * 0.12).toFixed(2)
        } else {
            commision = (sales * 0.145).toFixed(2)
        }
    }
    if (commision > 0) {
        console.log(commision)
    } else {
        console.log("error")
    }

}
tradeCommisions(["Plovdiv", "1000"])






