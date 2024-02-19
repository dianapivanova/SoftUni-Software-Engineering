class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        let findBook = this.books.find(x => x.title === title);
        if (findBook) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        } else {
            this.books.push({ title: title, author: author })
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        }
    }
    addMember(memberName) {
        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`
        } else {
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`
        }
    }
    assignBookToMember(memberName, bookTitle) {
        if (!this.members.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`)
        };
        let findBook = this.books.find(x => x.title === bookTitle);

        if (!findBook) {
            throw new Error(`Book "${bookTitle}" not found.`)
        };

        let idx = this.books.indexOf(findBook);
        this.books.splice(idx, 1);
        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${findBook.author}.`
    }
    generateReadingReport() {
        if (this.members.length == 0) {
            return `No members in the book club.`
        };
        if (this.books.length == 0) {
            return `No available books in the library.`
        };

        return (
            `Available Books in ${this.library} library:` +
            "\n" +
            this.books.map(x => `"${x.title}" by ${x.author}`).join('\n')
        )
    }

}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());




