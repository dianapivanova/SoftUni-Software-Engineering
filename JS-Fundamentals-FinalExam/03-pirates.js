function pirates(array) {
    let command = array.shift()
    let cities = []

    while (command !== 'Sail') {
        let [town, population, gold] = command.split('||')
        population = Number(population)
        gold = Number(gold)

        let findCity = cities.find(x => x.town == town)

        if (findCity) {
            findCity.population += population
            findCity.gold += gold
        } else {
            let obj = { town, population, gold }
            cities.push(obj)
        }

        command = array.shift()
    }

    command = array.shift()

    while (command !== 'End') {
        let tokens = command.split('=>')
        let action = tokens[0]

        if (action == 'Plunder') {
            let city = tokens[1]
            let people = Number(tokens[2])
            let stolenGold = Number(tokens[3])

            let findCity = cities.find(x => x.town == city)

            findCity.population -= people
            findCity.gold -= stolenGold

            console.log(`${city} plundered! ${stolenGold} gold stolen, ${people} citizens killed.`)

            if (findCity.gold <= 0 || findCity.population <= 0) {
                let idx = cities.indexOf(findCity)
                cities.splice(idx, 1)
                console.log(`${city} has been wiped off the map!`)
            }


        } else if (action == 'Prosper') {
            let city = tokens[1]
            let treasure = Number(tokens[2])

            let findCity = cities.find(x => x.town == city)

            if (treasure < 0) {
                console.log(`Gold added cannot be a negative number!`);
                command = array.shift(); continue;
            } else {
                findCity.gold += treasure
            }

            console.log(`${treasure} gold added to the city treasury. ${city} now has ${findCity.gold} gold.`)
        }

        command = array.shift()
    }

    if (cities.length == 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!"')
    } else {
        console.log(`Ahoy, Captain! There are ${cities.length} wealthy settlements to go to:`)
        cities.forEach(x => (console.log(`${x.town} -> Population: ${x.population} citizens, Gold: ${x.gold} kg`)))
    }

}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
