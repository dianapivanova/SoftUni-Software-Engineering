function passwordGenerator(arr) {
    let firstStr = arr[0]
    let secondArr = arr[1]
    let lettersToTake = arr[2]

    let concatString = firstStr.concat(secondArr)
    let vowels = ['a', 'e', 'o', 'i', 'u']
    let index = 0

    for (let letter of concatString) {
        if (vowels.includes(letter)) {
            concatString = concatString.replace(letter, lettersToTake[index].toUpperCase())
            index++
        }

        if (index >= lettersToTake.length) {
            index = 0
        }
    }

    let result = concatString.split('').reverse().join('')
    console.log(`Your generated password is ${result}`)
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'])