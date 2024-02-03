function townPopulation(arr) {

    let register = {}

    arr.forEach(x => {
        let [town, population] = x.split(' <-> ')
        population = Number(population);

        if (!register.hasOwnProperty(town)) {
            register[town] = population
        } else {
            register[town] += population;
        }

    })

    Object.entries(register).forEach(x => console.log(x.join(' : ')))

}
townPopulation(['Sofia <-> 1',
    'Sofia <-> 1',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)