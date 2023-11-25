function solve(input) {
    let barcodeNum = Number(input.shift())
    let pattern = /@#+[A-Z]([A-Za-z0-9]{4,})[A-Z]@#+/


    for (let line of input) {
        let group = ''
        let match = pattern.exec(line) // if we dd the flag, we will need to update the index anytime after this row to pattern.lastIndex = 0; otherwise its match will be staying on the last match.
        if (match) {
            let barcode = match[1].split('')
            let numbers = barcode.filter(x => !isNaN(Number(x)))

            if (numbers.length > 0) {
                group = numbers.join('')
                console.log(`Product group: ${group}`)
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