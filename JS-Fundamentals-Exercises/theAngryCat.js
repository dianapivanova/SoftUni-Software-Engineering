function theAngrycat(priceRatings, startPoint, itemType) {
    let totalLeft = 0
    let totalRight = 0

    for (let i = startPoint - 1; i >= 0; i--) {
        if (itemType == 'cheap') {
            if (priceRatings[i] < priceRatings[startPoint]) {
                totalLeft += priceRatings[i]
            }
        } else {
            if (priceRatings[i] >= priceRatings[startPoint]) {
                totalLeft += priceRatings[i]
            }
        }
    }

    for (let i = startPoint + 1; i <= priceRatings.length - 1; i++) {
        if (itemType == 'cheap') {
            if (priceRatings[i] < priceRatings[startPoint]) {
                totalRight += priceRatings[i]
            }
        } else {
            if (priceRatings[i] >= priceRatings[startPoint]) {
                totalRight += priceRatings[i]
            }
        }
    }

    if (totalLeft > totalRight) {
        console.log(`Left - ${totalLeft}`)
    } else if (totalLeft < totalRight) {
        console.log(`Right - ${totalRight}`)
    } else {
        console.log(`Left - ${totalLeft}`)
    }
}
theAngrycat([1, 5, 1], 1, "cheap")