function newHome(input) {

    let type = input[0]
    let count = Number(input[1])
    let budget = Number(input[2])
    let price = 0

    switch (type) {
        case "Roses":
            price = count * 5
            if (count > 80) {
                price = price * 0.9
            }
            break;
        case "Dahlias":
            price = count * 3.80
            if (count > 90) {
                price = price * 0.85
            }
            break;
        case "Tulips":
            price = count * 2.80
            if (count > 80) {
                price = price * 0.85
            }
            break;
        case "Narcissus":
            price = count * 3
            if (count < 120) {
                price = price * 1.15
            }
            break;
        case "Gladiolus":
            price = count * 2.50
            if (count < 80) {
                price = price * 1.2
            }
            break;
    }
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${count} ${type} and ${((budget - price).toFixed(2))} leva left.`)
    } else if (price >= budget) {
        console.log(`Not enough money, you need ${((price - budget).toFixed(2))} leva more.`)
    }
}
newHome()