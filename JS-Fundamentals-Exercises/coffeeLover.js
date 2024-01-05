function coffeeLover(array) {
    let coffeeInStock = array.shift().split(' ')
    let commandNum = Number(array.shift())

    for (let i = 0; i < commandNum; i++) {
        let currentRow = array[i]
        let tokens = currentRow.split(' ')
        let action = tokens[0]

        if (action == 'Include') {
            let addedCoffee = tokens[1]
            coffeeInStock.push(addedCoffee)
        } else if (action == 'Prefer') {
            let idx1 = Number(tokens[1])
            let idx2 = Number(tokens[2])
            if (idx1 >= 0 && idx1 < coffeeInStock.length && idx2 >= 0 && idx2 < coffeeInStock.length) {
                let temp = coffeeInStock[idx1]
                coffeeInStock[idx1] = coffeeInStock[idx2]
                coffeeInStock[idx2] = temp
            } else {
                continue;
            }
        } else if (action == 'Reverse') {
            coffeeInStock = coffeeInStock.reverse()
        } else if (action == 'Remove') {
            let coffeeNum = Number(tokens[2])

            if (coffeeInStock.length < coffeeNum) {
                continue;
            } else {
                if (tokens[1] == 'first') {
                    coffeeInStock.splice(0, coffeeNum)
                } else {
                    coffeeInStock.splice(coffeeInStock.length - coffeeNum)
                }
            }
        }
    }

    console.log('Coffees:')
    console.log(coffeeInStock.join(' '))
}
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"])