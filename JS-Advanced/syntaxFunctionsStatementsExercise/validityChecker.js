function validityChecker(x1, y1, x2, y2) {

    let x1y100 = checker(x1, y1, 0, 0)
    let x2y200 = checker(x2, y2, 0, 0)
    let x1y1x2y2 = checker(x1, y1, x2, y2)

    if (x1y100) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (x2y200) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (x1y1x2y2) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }


    function checker(x1, y1, x2, y2) {
        let isValid = false;
        let formula = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

        if (Number.isInteger(formula)) {
            isValid = true;
        }

        return isValid;
    }

}
validityChecker(3, 0, 0, 4)