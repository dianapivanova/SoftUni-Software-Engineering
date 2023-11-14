function inventory(array) {

    let resutArr = []

    for (let command of array) {
        let [hero, level, items] = command.split(' / ')
        level = Number(level)
        let obj = { hero, level, items }
        resutArr.push(obj)
    }

    for (let heroes of resutArr.sort((a, b) => (a.level) - (b.level))) {
        console.log(`Hero: ${heroes.hero}`)
        console.log(`level => ${heroes.level}`)
        console.log(`items => ${heroes.items}`)
    }

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)