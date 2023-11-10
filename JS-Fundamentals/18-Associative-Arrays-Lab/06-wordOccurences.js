function wordOccurences(words) {
    let obj = {}

    for (let word of words) {
        if (!obj.hasOwnProperty(word)) {
            obj[word] = 1
        } else {
            obj[word] += 1
        }
    }

    for (let entries of Object.entries(obj).sort((a, b) => (b[1] - a[1]))) {
        console.log(`${entries[0]} -> ${entries[1]} times`)
    }

}
wordOccurences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])