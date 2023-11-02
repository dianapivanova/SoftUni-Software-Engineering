function wordOccurences(words) {
    let myMap = new Map();

    for (let word of words) {
        if (myMap.has(word)) {
            myMap.set(word, myMap.get(word) + 1); // Increment the count by 1
        } else {
            myMap.set(word, 1); // Initialize the count to 1 for a new word
        }
    }

    let wordCountArray = Array.from(myMap).sort((a, b) => b[1] - a[1])

    for (let word of wordCountArray) {
        console.log(`${word[0]} -> ${word[1]} times`)
    }
}
wordOccurences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])