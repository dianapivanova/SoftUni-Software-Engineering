const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function(booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};

import { expect } from "chai";

describe("testing library functionality", function() {
    describe("testing calcPriceOfBook (nameOfBook, year) ", function() {
        it("throws an error with 1st param not a string", function() {
            expect(() => library.calcPriceOfBook(null, 1990)).to.throw('Invalid input')
        });

        it("throws an error with 2nd param not a number", function() {
            expect(() => library.calcPriceOfBook('test', null)).to.throw('Invalid input')
        });

        it("throws an error with 2nd param not aninteger number", function() {
            expect(() => library.calcPriceOfBook('test', 2000.5)).to.throw('Invalid input')
        });

        it("returns properly with books before 1980", function() {
            expect(library.calcPriceOfBook('test', 1979)).to.equal('Price of test is 10.00')
        });

        it("returns properly with books in 1980", function() {
            expect(library.calcPriceOfBook('test', 1980)).to.equal('Price of test is 10.00')
        });

        it("returns properly with books before 1980", function() {
            expect(library.calcPriceOfBook('test', 1981)).to.equal('Price of test is 20.00')
        });
     });

     describe("testing findBook (booksArr, desiredBook)", function() {
        it("throws an error with an empty array", function() {
            expect(() => library.findBook([], 'test')).to.throw('No books currently available')
        });

        it("returns properly when a match", function() {
            expect(library.findBook(['test', 'baba ti'], 'test')).to.equal('We found the book you want.')
        });

        it("returns properly with no match", function() {
            expect(library.findBook(['test', 'baba ti'], '123')).to.equal('The book you are looking for is not here!')
        });
     });

     describe("testing arrangeTheBooks (countBooks)", function() {
        it("throws an error with 2nd param not a number", function() {
            expect(() => library.arrangeTheBooks(-5)).to.throw('Invalid input')
        });

        it("throws an error with 2nd param not an integer number", function() {
            expect(() => library.arrangeTheBooks(3.3)).to.throw('Invalid input')
        });

        it("throws an error with 2nd param not a number", function() {
            expect(() => library.arrangeTheBooks(null)).to.throw('Invalid input')
        });

        it("returns properly with less than 40 books", function() {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.")
        });

        it("returns properly with more than 40 books", function() {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.")
        });
     });
     
});
