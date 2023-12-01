function solve(input) {
    let barcodes = Number(input.shift())
    let pattern = /@#+[A-Z][A-Za-z\d]{4,}[A-Z]@#+/

    for (let barcode of input) {
        let match = barcode.match(pattern)

        if (match) {
            let digitPattern = /\d/g
            let digitMatch = match[0].match(digitPattern)

            if (digitMatch) {

                console.log(`Product group: ${digitMatch.join('')}`)
            } else {
                console.log(`Product group: 00`)
            }

        } else {
            console.log(`Invalid barcode`)
        }
    }

}
solve(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])

