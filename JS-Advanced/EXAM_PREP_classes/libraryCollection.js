class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity
        this.books = [];
    }

    addBook (bookName, bookAuthor) {
        if(this.books.length == this.capacity) {
            throw new Error('Not enough space in the collection.')
        }
        this.books.push({bookName, bookAuthor, payed: false});
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook( bookName ) {
        let findBook = this.books.find(x => x.bookName === bookName);
        if(!findBook) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if(findBook.payed == true) {
            throw new Error(`${bookName} has already been paid.`)
        }
        findBook.payed = true;
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        let findBook = this.books.find(x => x.bookName === bookName);
        if(!findBook) {
            throw new Error(`The book, you're looking for, is not found.`)
        }
        if(findBook.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        let idx = this.books.indexOf(findBook);
        this.books.splice(idx, 1);
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor) {
        if(bookAuthor == undefined) {
            let emptySlots = this.capacity - this.books.length;
            let result = [`The book collection has ${emptySlots} empty spots left.`];
            let sortedArr = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            sortedArr.map(x => {
                let hasPaid = x.payed ? 'Has Paid' : 'Not Paid'
                result.push(`${x.bookName} == ${x.bookAuthor} - ${hasPaid}.`);
            })
            return result.join('\n')
        } else {
            let findBook = this.books.find(x => x.bookAuthor === bookAuthor);
            if(!findBook) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
            let hasPaid = findBook.payed ? 'Has Paid' : 'Not Paid'
            return `${findBook.bookName} == ${findBook.bookAuthor} - ${hasPaid}.`
        }
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());



