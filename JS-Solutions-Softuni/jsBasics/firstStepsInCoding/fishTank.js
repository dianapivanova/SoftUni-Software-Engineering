function fishTank(input) {

    let length = Number(input[0])
    let width = Number(input[1])
    let height = Number(input[2])
    let percent = Number(input[3])

    let volume = length * width * height
    let litresVolume = volume / 1000
    let takenSpace = 0.17
    let totalWaterLitres = litresVolume * (1 - takenSpace)
    console.log(totalWaterLitres)
}
fishTank(["85 ", "75 ", "47 ", "17 "])