function oddOccurences(input) {

    let words = input.split(' ')
    let obj = {}

    for (let word of words) {
        word = word.toLowerCase()
        if (word in obj) {
            obj[word]++
        } else {
            obj[word] = 1
        }
    }


    let resultArr = []

    for (let entries of Object.entries(obj)) {
        if (entries[1] % 2 !== 0) {
            resultArr.push(entries[0])
        }
    }

    console.log(resultArr.join(' '))
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')