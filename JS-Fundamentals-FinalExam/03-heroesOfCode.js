function heroesOfCode(array) {
    let heroNum = Number(array.shift())
    let heroes = []

    for (let i = 0; i < heroNum; i++) {
        let [name, hp, mp] = array.shift().split(' ')
        hp = Number(hp)
        mp = Number(mp)
        heroes.push({ name, hp, mp })
    }

    let command = array.shift()

    while (command !== "End") {
        let tokens = command.split(' - ')
        let action = tokens[0]

        if (action == "Heal") {
            let heroName = tokens[1]
            let healingHp = Number(tokens[2])
            let amount = 0

            let findHero = heroes.find(x => x.name == heroName)

            if (findHero) {
                if (findHero.hp + healingHp <= 100) {
                    amount += healingHp
                } else {
                    amount += 100 - findHero.hp
                }
                findHero.hp += amount
                console.log(`${heroName} healed for ${amount} HP!`)
            }
        } else if (action == "Recharge") {
            let heroName = tokens[1]
            let rechargingMp = Number(tokens[2])
            let amount = 0

            let findHero = heroes.find(x => x.name == heroName)

            if (findHero) {
                if (findHero.mp + rechargingMp <= 200) {
                    amount += rechargingMp

                } else {
                    amount += 200 - findHero.mp
                }
                findHero.mp += amount
                console.log(`${heroName} recharged for ${amount} MP!`)
            }

        } else if (action == "CastSpell") {
            let heroName = tokens[1]
            let findHero = heroes.find(x => x.name == heroName)

            let neededMp = Number(tokens[2])
            let spellName = tokens[3]

            if (findHero) {
                if (findHero.mp >= neededMp) {
                    findHero.mp -= neededMp
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${findHero.mp} MP!`)
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
                }
            }

        } else if (action == "TakeDamage") {
            let heroName = tokens[1]
            let findHero = heroes.find(x => x.name == heroName)

            let damage = Number(tokens[2])
            let attacker = tokens[3]

            if (findHero) {
                if (findHero.hp >= damage) {
                    findHero.hp -= damage
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${findHero.hp} HP left!"`)
                } else {
                    let idx = heroes.indexOf(findHero)
                    heroes.splice(idx, 1)
                    console.log(`${heroName} has been killed by ${attacker}!`)
                }
            }
        }

        command = array.shift()
    }

    for (let hero of heroes) {
        let [name, hp, mp] = Object.entries(hero)
        console.log(name[1])
        console.log(`HP: ${hp[1]}`)
        console.log(`MP: ${mp[1]}`)
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