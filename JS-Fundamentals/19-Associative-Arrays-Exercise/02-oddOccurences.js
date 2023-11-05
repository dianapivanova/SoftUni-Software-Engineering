function oddOccurences(input) {
    input = input.toLowerCase()
    let wordArray = input.split(" ")

    let wordObj = {}

    for (let word of wordArray) {
        word = String(word)


        if (word in wordObj) {
            wordObj[word] += 1


        } else {
            wordObj[word] = 1

        }
    }

    let resultArr = []

    for (let word of wordArray) {
        if (wordObj[word] % 2 !== 0) {
            if (!resultArr.includes(word)) {
                resultArr.push(word)
            }

        }
    }

    console.log(resultArr.join(" "))

}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')