function lunchBreak(input) {
    let tvShow = input[0]
    let episodeDuration = Number(input[1])
    let breakDuration = Number(input[2])

    let lunchDuration = breakDuration / 8
    let chillDuration = breakDuration / 4

    timeLeft = breakDuration - (lunchDuration + chillDuration)

    if (timeLeft >= episodeDuration) {
        console.log(`You have enough time to watch ${tvShow} and left with ${Math.ceil(timeLeft - episodeDuration)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${tvShow}, you need ${Math.ceil(episodeDuration - timeLeft)} more minutes.`)
    }

}
lunchBreak()