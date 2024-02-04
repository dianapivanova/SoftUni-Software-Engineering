function heroicInventory(array) {
    let result = []

    for (let row of array) {
        let tokens = row.split(' / ')
        let hero = tokens[0]
        let level = Number(tokens[1])
        let items = []
        if (tokens[2]) {
            items = tokens[2].split(', ')
        }

        result.push({ name: hero, level: level, items: items })
    }

    console.log(JSON.stringify(result))
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])