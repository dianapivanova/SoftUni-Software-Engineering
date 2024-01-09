function battleManager(array) {

    let command = array.shift()
    let data = []

    while (command !== 'Results') {
        let tokens = command.split(':')
        let action = tokens.shift()

        if (action == 'Add') {
            let [person, health, energy] = tokens
            health = Number(health)
            energy = Number(energy)

            let findName = data.find(x => x.person == person)

            if (findName) {
                findName.health += health
            } else {
                let obj = { person: person, health: health, energy: energy }
                data.push(obj)
            }
        } else if (action == 'Attack') {
            let [attacker, defender, damage] = tokens
            damage = Number(damage)

            let findAttacker = data.find(x => x.person == attacker)
            let findDefender = data.find(x => x.person == defender)

            if (findAttacker && findDefender) {
                findDefender.health -= damage
                findAttacker.energy -= 1

                if (findDefender.health <= 0) {
                    let idx = data.indexOf(findDefender)
                    data.splice(idx, 1)
                    console.log(`${findDefender.person} was disqualified!`)
                }

                if (findAttacker.energy <= 0) {
                    let idx = data.indexOf(findAttacker)
                    data.splice(idx, 1)
                    console.log(`${findAttacker.person} was disqualified!`)
                }
            }

        } else if (action == 'Delete') {
            let deleteName = tokens

            if (deleteName == 'All') {
                data.splice(0,)
            } else {
                let findName = data.find(x => x.person == deleteName)

                if (findName) {
                    let idx = data.indexOf(findName)
                    data.splice(idx, 1)
                }
            }
        }

        command = array.shift()
    }

    console.log(`People count: ${data.length}`)

    for (let people of data) {
        let [person, health, energy] = Object.entries(people)
        console.log(`${person[1]} - ${health[1]} - ${energy[1]}`)
    }
}
battleManager(["Add:Bonnie:3000:5",
    "Add:Kent:10000:10",
    "Add:Johny:4000:10",
    "Attack:Johny:Bonnie:400",
    "Add:Johny:3000:5",
    "Add:Peter:7000:1",
    "Delete:Kent",
    "Results"])
