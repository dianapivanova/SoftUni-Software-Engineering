function wordsTracker(input) {
    let words = input.shift().split(' ')

    let wordObj = {}

    for (let word of words) {
        wordObj[word] = 0
    }

    for (let word of input) {
        if (wordObj.hasOwnProperty(word)) {
            wordObj[word]++
        }
    }

    for (let [word, occurences] of Object.entries(wordObj).sort((a, b) => (b[1] - a[1]))) {
        console.log(`${word} - ${occurences}`)
    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]

)