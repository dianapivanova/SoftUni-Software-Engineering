function pyramid(base, increment) {
    let stone = 0
    let outerLayer = 0
    let marble = 0
    let lapisLazuli = 0
    let gold = 0

    for (let i = 1; i <= Number.MAX_SAFE_INTEGER; i++) {
        outerLayer = base * 4 * increment
        stone = base ** 2

    }
    stone = base ** 2
    console.log(stone)

}
pyramid(11, 1)