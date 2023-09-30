function library(input) {
    let favouriteBook = input[0];
    let index = 1;
    let bookIsFound = false;
    let nextBook = input[index];

    while (nextBook !== "No More Books") {
        if ((nextBook === favouriteBook)) {
            bookIsFound = true;
            break;
        }
        index++;
        nextBook = input[index];
    }

    if (bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}
library()