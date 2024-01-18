function townsToJson(array) {

    let splitter = /\s*\|\s*/
    let headers = array.shift()


    let result = []

    for (let el of array) {
        let obj = { Town: undefined, Latitude: undefined, Longitude: undefined }
        let [town, latitude, longitude] = el.split(splitter).filter(x => x !== '')
        latitude = Number(latitude);
        longitude = Number(longitude);
        obj.Town = town;
        obj.Latitude = Number(latitude.toFixed(2))
        obj.Longitude = Number(longitude.toFixed(2));

        result.push(obj)
    }

    console.log(JSON.stringify(result))

}
townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)