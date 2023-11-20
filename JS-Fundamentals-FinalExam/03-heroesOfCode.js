function heroesOfCode(array) {
    let heroNum = Number(array.shift())
    let heroes = []

    for (let i = 0; i < heroNum; i++) {
        let tokens = array.shift().split(' ')
        let heroName = tokens[0]
        let hp = Number(tokens[1])
        let mp = Number(tokens[2])

        let heroObj = { heroName: heroName, hp: hp, mp: mp }

        heroes.push(heroObj)
    }

    let command = array.shift()

    while (command !== 'End') {
        if (command.includes('CastSpell')) {
            let [action, hero, mp, spellname] = command.split(' - ')
            mp = Number(mp)

            let findHero = heroes.find(x => x.heroName == hero)

            if (findHero.mp >= mp) {
                findHero.mp -= mp
                console.log(`${hero} has successfully cast ${spellname} and now has ${findHero.mp} MP!`)
            } else {
                console.log(`${hero} does not have enough MP to cast ${spellname}!`)
            }
        } else if (command.includes('TakeDamage')) {
            let [action, hero, damage, attacker] = command.split(' - ')
            damage = Number(damage)
            let findHero = heroes.find(x => x.heroName == hero)

            findHero.hp -= damage

            if (findHero.hp > 0) {
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${findHero.hp} HP left!`)
            } else {
                console.log(`${hero} has been killed by ${attacker}!`)
                let idx = heroes.findIndex(x => x.heroName == hero)
                heroes.splice(idx, 1)
            }

        } else if (command.includes('Recharge')) {
            let [action, hero, amount] = command.split(' - ')
            amount = Number(amount)
            let findHero = heroes.find(x => x.heroName == hero)
            let amountRecovered = 0

            if (findHero.mp + amount <= 200) {
                amountRecovered = amount
                findHero.mp += amount
            } else {
                amountRecovered = 200 - findHero.mp
                findHero.mp = 200
            }
            console.log(`${hero} recharged for ${amountRecovered} MP!`)

        } else if (command.includes('Heal')) {
            let [action, hero, amount] = command.split(' - ')
            amount = Number(amount)
            let findHero = heroes.find(x => x.heroName == hero)
            let amountRecovered = 0

            if (findHero.hp + amount <= 100) {
                amountRecovered = amount
                findHero.hp += amount
            } else {
                amountRecovered = 100 - findHero.hp
                findHero.hp = 100
            }
            console.log(`${hero} healed for ${amountRecovered} HP!`)
        }

        command = array.shift()
    }

    for (let hero of heroes) {
        console.log(hero.heroName)
        console.log(`  HP: ${hero.hp}`)
        console.log(`  MP: ${hero.mp}`)
    }

}
heroesOfCode([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]
)