function heroesOfCode(array) {
    let heroNum = Number(array.shift())
    let heroes = []

    for (let i = 0; i < heroNum; i++) {
        let [heroName, hp, mp] = array.shift().split(' ')
        hp = Number(hp)
        mp = Number(mp)
        let heroObj = { heroName, hp, mp }
        heroes.push(heroObj)
    }

    let command = array.shift()

    while (command !== 'End') {
        let tokens = command.split(' - ')
        let action = tokens[0]
        let hero = tokens[1]

        if (action == 'CastSpell') {
            let mpNeeded = Number(tokens[2])
            let spellName = tokens[3]

            let findHero = heroes.find(x => x.heroName == hero)
            if (findHero.mp >= mpNeeded) {
                findHero.mp -= mpNeeded
                console.log(`${hero} has successfully cast ${spellName} and now has ${findHero.mp} MP!`)
            } else {
                console.log(`${hero} does not have enough MP to cast ${spellName}!`)
            }

        } else if (action == 'TakeDamage') {
            let damage = Number(tokens[2])
            let attacker = tokens[3]
            let findHero = heroes.find(x => x.heroName == hero)

            findHero.hp -= damage
            if (findHero.hp > 0) {
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${findHero.hp} HP left!`)
            } else {
                console.log(`${hero} has been killed by ${attacker}!`)
                let idx = heroes.indexOf(findHero)
                heroes.splice(idx, 1)
            }
        } else if (action == 'Recharge') {
            let amount = Number(tokens[2])
            let findHero = heroes.find(x => x.heroName == hero)

            let recovered = 0

            if (findHero.mp + amount > 200) {
                recovered = 200 - findHero.mp
            } else {
                recovered = amount
            }

            findHero.mp += recovered

            console.log(`${hero} recharged for ${recovered} MP!`)

        } else if (action == 'Heal') {
            let amount = Number(tokens[2])
            let findHero = heroes.find(x => x.heroName == hero)

            let healed = 0

            if (findHero.hp + amount > 100) {
                healed = 100 - findHero.hp
            } else {
                healed = amount
            }

            findHero.hp += healed

            console.log(`${hero} healed for ${healed} HP!`)
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