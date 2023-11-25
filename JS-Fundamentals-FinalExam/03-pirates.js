function pirates(array) {
    let command = array.shift()

    let cities = []

    while (command !== 'Sail') {
        let [city, population, gold] = command.split('||')
        population = Number(population)
        gold = Number(gold)
        let cityObj = { city: city, population: population, gold: gold }

        let lookedCity = cities.find(x => x.city == city)

        if (lookedCity) {
            lookedCity.city = cityObj.city
            lookedCity.population += cityObj.population
            lookedCity.gold += cityObj.gold
        } else {
            cities.push(cityObj)
        }

        command = array.shift()
    }

    console.log(cities)

    command = array.shift()

    while (command !== "End") {
        if (command.includes('Plunder')) {
            let [action, town, killedPeople, gold] = command.split('=>')
            killedPeople = Number(killedPeople)
            gold = Number(gold)

            let findCity = cities.find(x => x.city == town)

            findCity.gold -= gold
            findCity.population -= killedPeople
            console.log(`${town} plundered! ${gold} gold stolen, ${killedPeople} citizens killed.`)

            if (findCity.population <= 0 || findCity.gold <= 0) {
                let idx = cities.findIndex(x => x.city == town)
                cities.splice(idx, 1)
                console.log(`${town} has been wiped off the map!`)
            }

        } else if (command.includes('Prosper')) {
            let [action, town, gold] = command.split('=>')
            gold = Number(gold)

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`)
            } else {
                let findCity = cities.find(x => x.city == town)
                findCity.gold += gold
                console.log(`${gold} gold added to the city treasury. ${town} now has ${findCity.gold} gold.`)
            }
        }

        command = array.shift()
    }

    if (cities.length == 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
    } else {
        console.log(`Ahoy, Captain! There are ${cities.length} wealthy settlements to go to:`)
        for (let city of cities) {
            console.log(`${city.city} -> Population: ${city.population} citizens, Gold: ${city.gold} kg`)
        }
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
