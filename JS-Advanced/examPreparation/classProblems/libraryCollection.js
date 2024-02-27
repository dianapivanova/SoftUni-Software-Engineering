class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity <= this.books.length) {
            throw new Error(`Not enough space in the collection.`);
        }
        this.books.push({ bookName, bookAuthor, payed: false })
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        let findBook = this.books.find(x => x.bookName == bookName);
        if (!findBook) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (findBook.payed == true) {
            throw new Error(`${bookName} has already been paid.`)
        }
        findBook.payed = true;
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        let findBook = this.books.find(x => x.bookName == bookName);
        if (!findBook) {
            throw new Error("The book, you're looking for, is not found.")
        }
        if (findBook.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        let idx = this.books.indexOf(findBook);
        this.books.splice(idx, 1);
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor) {
        if (bookAuthor == undefined) {
            let result = [];
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            let sortedArr = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            for (let book of sortedArr) {
                let hasPaid = `Has Paid`
                if (book.payed == false) {
                    hasPaid = `Not Paid`
                }
                result.push(`${book.bookName} == ${book.bookAuthor} - ${hasPaid}.`)
            }
            return result.join('\n');
        } else {
            let findBook = this.books.find(x => x.bookAuthor == bookAuthor);
            if (!findBook) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
            let hasPaid = `Has Paid`
            if (findBook.payed == false) {
                hasPaid = `Not Paid`
            }
            return `${findBook.bookName} == ${findBook.bookAuthor} - ${hasPaid}.`
        }
    }
}
const library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
console.log(library.payBook('In Search of Lost Time'));
console.log(library.payBook('Don Quixote'));







