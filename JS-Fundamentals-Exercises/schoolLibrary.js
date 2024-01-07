function schoolLibrary(array) {
    let books = array.shift().split('&')

    let command = array.shift()

    while (command !== 'Done') {
        let tokens = command.split(' | ')
        let action = tokens[0]

        if (action == 'Add Book') {
            let book = tokens[1]
            if (!books.includes(book)) {
                books.unshift(book)
            }
        } else if (action == 'Swap Books') {
            let firstBook = tokens[1]
            let secondBook = tokens[2]

            if (books.includes(firstBook) && books.includes(secondBook)) {
                let firstIdx = books.indexOf(firstBook)
                let secondIdx = books.indexOf(secondBook)

                let temp = books[firstIdx]
                books[firstIdx] = books[secondIdx]
                books[secondIdx] = temp

            }
        } else if (action == 'Take Book') {
            let book = tokens[1]
            if (books.includes(book)) {
                let idx = books.indexOf(book)
                books.splice(idx, 1)
            }
        } else if (action == 'Insert Book') {
            let book = tokens[1]
            if (!books.includes(book)) {
                books.push(book)
            }
        } else if (action == 'Check Book') {
            let idx = Number(tokens[1])
            if (idx >= 0 && idx < books.length) {
                console.log(books[idx])
            }
        }

        command = array.shift()
    }

    console.log(books.join(', '))
}
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",

    "Check Book | 2",

    "Swap Books | Don Quixote | Ulysses",

    "Done"])