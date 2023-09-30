function triangle(sideA, sideB, sideC) {
    let semiPer = (sideA + sideB + sideC) / 2
    let area = Math.sqrt(semiPer * (semiPer - sideA) * (semiPer - sideB) * (semiPer - sideC))

    console.log(area)
}
triangle()