function reverse3(elements) {
    let result = []
    let swapOperation = Math.ceil(elements.length / 2)
    let print = ''

    for (let i = 0; i < swapOperation; i++) {
        result[i] = elements[elements.length - 1 - i]
        result[elements.length - 1 - i] = elements[i]
    }

    for (let i = 0; i < result.length; i++) {
        print += result[i] + " "
    }

    console.log(print)
}
reverse3(['abc', 'def', 'hig', 'klm', 'nop'])