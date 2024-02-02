function listofNames(arr) {
    arr = arr.sort((a, b) => a.localeCompare(b)).forEach((value, i) => console.log(`${i + 1}.${value}`))
}
listofNames(["John", "Bob", "Christina", "Ema"])