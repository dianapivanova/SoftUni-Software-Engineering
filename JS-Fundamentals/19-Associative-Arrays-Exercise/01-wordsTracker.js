function wordsTracker(input) {
    let lookedWords = input.shift().split(' ')

    let resultObj = {}

    for (let word of lookedWords) {
        resultObj[word] = 0
    }

    for (let word of input) {
        if (lookedWords.includes(word)) {
            resultObj[word]++
        }
    }

    let sortedArr = Object.entries(resultObj).sort((a, b) => (b[1] - a[1]))

    for (let kvp of sortedArr) {
        console.log(kvp.join(" - "))
    }

}
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)