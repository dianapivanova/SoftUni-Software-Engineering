function listofNames(arr) {
    arr = arr.sort((a, b) => a.localeCompare(b))
    let row = 1

    for (let name of arr) {
        console.log(`${row}.${name}`)
        row++
    }

}
listofNames(["John", "Bob", "Christina", "Ema"])