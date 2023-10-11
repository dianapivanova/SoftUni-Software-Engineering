function blackFlag(arr) {
    let days = Number(arr[0])
    let dailyPlunder = Number(arr[1])
    let target = Number(arr[2])

    let totalPlunder = 0

    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder

        if (i % 3 == 0) {
            totalPlunder += dailyPlunder * 0.5
        }

        if (i % 5 == 0) {
            totalPlunder -= totalPlunder * 0.3
        }
    }

    if (totalPlunder >= target) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    } else {
        console.log(`Collected only ${(totalPlunder / target * 100).toFixed(2)}% of the plunder.`)
    }

}
blackFlag(["10",
    "20",
    "380"])

