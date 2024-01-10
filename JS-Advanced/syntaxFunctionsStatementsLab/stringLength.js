function stringLength(...all) {

    let total = 0

    for (let el of all) {
        total += el.length
    }

    console.log(total)
    console.log(Math.floor(total / all.length))
}
stringLength('chocolate', 'ice cream', 'cake')