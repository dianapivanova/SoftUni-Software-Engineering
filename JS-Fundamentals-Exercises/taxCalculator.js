function taxCalculator([cars]) {
    let totalTaxes = 0
    let carsInfo = cars.split('>>')

    for (let carInfo of carsInfo) {
        let tokens = carInfo.split(' ')
        let command = tokens[0]
        let yearsForTaxes = Number(tokens[1])
        let kilometres = Number(tokens[2])

        if (command == 'family') {
            let currentTax = 50
            currentTax -= yearsForTaxes * 5
            currentTax += 12 * Math.floor(kilometres / 3000)
            console.log(`A ${command} car will pay ${currentTax.toFixed(2)} euros in taxes.`)
            totalTaxes += currentTax
        } else if (command == 'sports') {
            let currentTax = 100
            currentTax -= yearsForTaxes * 9
            currentTax += 18 * Math.floor(kilometres / 2000)
            console.log(`A ${command} car will pay ${currentTax.toFixed(2)} euros in taxes.`)
            totalTaxes += currentTax
        } else if (command == 'heavyDuty') {
            let currentTax = 80
            currentTax -= yearsForTaxes * 8
            currentTax += 14 * Math.floor(kilometres / 9000)
            console.log(`A ${command} car will pay ${currentTax.toFixed(2)} euros in taxes.`)
            totalTaxes += currentTax
        } else {
            console.log('Invalid car type.')
        }
    }

    console.log(`The National Revenue Agency will collect ${totalTaxes.toFixed(2)} euros in taxes.`)
}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])