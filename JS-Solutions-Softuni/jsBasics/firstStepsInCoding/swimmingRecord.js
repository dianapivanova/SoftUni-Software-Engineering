function swimmingRecord(input) {
    let recordSec = Number(input[0])
    let recordMeters = Number(input[1])
    let timeInSecForMeter = Number(input[2])

    let totalSeconds = recordMeters * timeInSecForMeter
    let delay = Math.floor(recordMeters / 15) * 12.5
    let totalTime = totalSeconds + delay

    if (totalTime < recordSec) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordSec).toFixed(2)} seconds slower.`)
    }

}
swimmingRecord(["55555", "3017", "5.03"])