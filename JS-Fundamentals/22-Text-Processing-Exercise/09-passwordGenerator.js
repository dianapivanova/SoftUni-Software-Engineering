function passwordGenerator(arr) {
    let firstStr = arr[0]
    let secondStr = arr[1]
    let lettersToTake = arr[2]

    let concatString = firstStr.concat(secondStr)
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let index = 0
    let newWord = ''

    for (let letter of concatString) {

        if (vowels.includes(letter)) {
            newWord += lettersToTake[index].toUpperCase()
            index++
        } else {
            newWord += letter
        }

        if (index >= lettersToTake.length) {
            index = 0
        }
    }

    newWord = newWord.split('').reverse().join('')

    console.log(`Your generated password is ${newWord}`)
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'])