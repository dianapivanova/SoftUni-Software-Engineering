function townsToJson(array) {
    let splitter = /\s*\|\s*/

    let result = []
    let headers = array.shift().split(splitter).filter(x => x !== '')

    for (let curRow of array) {
        let townInfo = curRow.split(splitter)
        townInfo = townInfo.filter(x => x !== '')

        let [curTown, curLat, curLong] = townInfo

        curLat = Number(Number(curLat).toFixed(2))
        curLong = Number(Number(curLong).toFixed(2))

        result.push({ 'Town': curTown, 'Latitude': curLat, 'Longitude': curLong })
    }

    console.log(JSON.stringify(result))

}
townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)