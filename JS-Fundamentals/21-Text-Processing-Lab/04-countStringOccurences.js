function countOccurences(sentence, searchedWord) {
    let words = sentence.split(' ')
    words = words.filter(word => word == searchedWord)

    console.log(words.length)
}
countOccurences('This is a word and it also is a sentence',
    'is')