function library(input) {
    let favouriteBook = input.shift()
    let bookIsFound = false;

    let currentBook = input.shift()
    let count = 0

    while (currentBook !== 'No More Books') {

        if (currentBook == favouriteBook) {
            bookIsFound = true; break;
        }
        count++
        currentBook = input.shift()
    }

    if (!bookIsFound) {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${count} books.`)
    } else {
        console.log(`You checked ${count} books and found it.`)
    }


}
library(["Troy",
    "Stronger",
    "Life Style",
    "Troy"])