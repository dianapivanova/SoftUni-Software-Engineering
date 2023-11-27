function solve(input) {
    let pattern = /@#+(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/
    let numBarcode = Number(input.shift())

    for (let line of input) {
        let match = line.match(pattern)

        if (match) {
            let barcode = match.groups.barcode
            let filteredArr = barcode.split('').filter(x => (!isNaN(Number(x))))
            if (filteredArr.length > 0) {
                console.log(`Product group: ${filteredArr.join('')}`)
            } else {
                console.log(`Product group: 00`)
            }
        } else {
            console.log('Invalid barcode')
        }
    }

}
solve(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])

