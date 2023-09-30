function moving(input) {

    let width = Number(input[0])
    let length = Number(input[1])
    let height = Number(input[2])
    let totalSpace = width * length * height
    let index = 3
    let row = input[index]
    let boxCounter = 0

    while (row !== "Done") {
        let boxes = Number(row)
        boxCounter += boxes

        if (boxCounter > totalSpace) {
            console.log(`No more free space! You need ${boxCounter - totalSpace} Cubic meters more.`); break;
        }

        index++
        row = input[index]
    }

    if (boxCounter <= totalSpace) {
        console.log(`${totalSpace - boxCounter} Cubic meters left.`)
    }


}
moving()