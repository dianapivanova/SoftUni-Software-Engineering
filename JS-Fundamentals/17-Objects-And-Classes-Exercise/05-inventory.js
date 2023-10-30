function inventory(array) {

    let heroArr = []

    for (let elements of array) {

        let [hero, level, items] = elements.split(' / ')
        level = Number(level)

        let heroObj = { hero, level, items }
        heroArr.push(heroObj)

    }

    heroArr.sort((a, b) => (a.level - b.level))

    for (let heroes of heroArr) {
        console.log(`Hero: ${heroes.hero}\nlevel => ${heroes.level}\nitems => ${heroes.items}`)
    }

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)