function townPopulation(arr) {

    let townRegister = {}

    for (let data of arr) {
        let [city, population] = data.split(' <-> ')
        population = Number(population)

        if (!townRegister.hasOwnProperty(city)) {
            townRegister[city] = 0
        }

        townRegister[city] += population
    }

    for (let [city, population] of Object.entries(townRegister)) {
        console.log(`${city} : ${population}`)
    }


}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)