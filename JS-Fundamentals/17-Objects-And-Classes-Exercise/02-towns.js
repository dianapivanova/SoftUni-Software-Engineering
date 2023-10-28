function towns(array) {
    for (let towns of array) {
        let [town, latitude, longitude] = towns.split(' | ')
        latitude = Number(latitude).toFixed(2)
        longitude = Number(longitude).toFixed(2)

        let townData = { town, latitude, longitude }

        console.log(townData)

    }

}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])