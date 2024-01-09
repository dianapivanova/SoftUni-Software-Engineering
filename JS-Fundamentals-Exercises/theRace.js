function theRace(array) {
    let pattern = /([#$%*&])(?<nameRacer>[A-Za-z]+)\1=(?<length>\d+)!!(?<geoCode>\S+)/

    for (let row of array) {
        let matches = row.match(pattern)
        if (matches) {
            let { nameRacer, length, geoCode } = matches.groups
            length = Number(length)
            if (length == geoCode.length) {
                let encrypted = ''
                for (let char of geoCode.split('')) {
                    let newChar = char.charCodeAt() + length
                    let newSymbol = String.fromCharCode(newChar)
                    encrypted += newSymbol
                }
                geoCode = encrypted
                console.log(`Coordinates found! ${nameRacer} -> ${geoCode}`)
            } else {
                console.log('Nothing found!')
            }

        } else {
            console.log('Nothing found!')
        }
    }
}
theRace(["%GiacomoAgostini%=7!!hbqw",
    "&GeoffDuke*=6!!vjh]zi",
    "JoeyDunlop=10!!lkd,rwazdr",
    "Mike??Hailwood=5!![pliu",
    "#SteveHislop#=16!!df%TU[Tj(h!!TT[S "])

