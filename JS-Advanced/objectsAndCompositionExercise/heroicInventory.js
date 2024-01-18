function heroicInventory(array) {

    let heroes = []

    for (let hero of array) {
        let [name, level, items] = hero.split(' / ')
        level = Number(level)
        items = items ? items.split(', ') : []

        let obj = { name, level, items }
        heroes.push(obj)
    }

    console.log(JSON.stringify(heroes))
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])