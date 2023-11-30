function wordsTracker(input) {
    let lookedWords = input.shift().split(' ')
    let wordObj = {}
    for (let word of lookedWords) {
        wordObj[word] = 0
    }

    for (let word of input) {
        if (word in wordObj) {
            wordObj[word]++
        }
    }

    let sortedArr = Object.entries(wordObj).sort((a, b) => (b[1] - a[1]))
    for (let entries of sortedArr) {
        console.log(`${entries[0]} - ${entries[1]}`)
    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]

)