function cooking(...all) {
    let num = Number(all.shift())

    for (let command of all) {
        if (command == 'chop') {
            num /= 2

        } else if (command == 'dice') {
            num = Math.sqrt(num)
        } else if (command == 'spice') {
            num += 1
        } else if (command == 'bake') {
            num *= 3
        } else if (command == 'fillet') {
            num -= num * 0.2
        }

        console.log(num)
    }

}
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')