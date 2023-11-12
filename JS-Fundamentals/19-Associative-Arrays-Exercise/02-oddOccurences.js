function oddOccurences(input) {
    let words = input.split(' ')
    let wordObj = {}

    for (let word of words) {
        word = word.toLowerCase()

        if (!wordObj.hasOwnProperty(word)) {
            wordObj[word] = 1
        } else {
            wordObj[word]++
        }
    }

    let resultArr = []
    for (let [word, occurences] of Object.entries(wordObj)) {
        if (!(occurences % 2 == 0)) {
            resultArr.push(word)
        }
    }

    console.log(resultArr.join(' '))
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')