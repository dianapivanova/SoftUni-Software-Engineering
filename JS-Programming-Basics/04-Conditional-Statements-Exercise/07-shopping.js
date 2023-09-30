function shopping(input) {

    let budget = Number(input[0])
    let ACU = Number(input[1])
    let CPU = Number(input[2])
    let RAM = Number(input[3])

    let ACUPrice = 250
    let ACUTotalPrice = ACU * ACUPrice

    let CPUPrice = ACUTotalPrice * 0.35
    let CPUTotalPrice = CPU * CPUPrice

    let RAMPrice = ACUTotalPrice * 0.10
    let RAMTotalPrice = RAM * RAMPrice


    let totalSum = ACUTotalPrice + CPUTotalPrice + RAMTotalPrice

    if (ACU > CPU) {
        totalSum *= 0.85
    }

    if (budget >= totalSum) {
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`)
    }


}
shopping()