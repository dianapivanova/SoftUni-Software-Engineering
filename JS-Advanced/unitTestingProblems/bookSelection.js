const bookSelection = {
    isGenreSuitable(genre, age) {
        if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
            return `Books with ${genre} genre are not suitable for kids at ${age} age`;
        } else {
            return `Those books are suitable`;
        }
    },
    isItAffordable(price, budget) {
        if (typeof price !== "number" || typeof budget !== "number") {
            throw new Error("Invalid input");
        }

        let result = budget - price;

        if (result < 0) {
            return "You don't have enough money";
        } else {
            return `Book bought. You have ${result}$ left`;
        }
    },
    suitableTitles(array, wantedGenre) {
        let resultArr = [];

        if (!Array.isArray(array) || typeof wantedGenre !== "string") {
            throw new Error("Invalid input");
        }
        array.map((obj) => {
            if (obj.genre === wantedGenre) {
                resultArr.push(obj.title);
            }
        });
        return resultArr;
    },
};

import { expect } from "chai";

describe("Suite Tests Book Library", function () {
    describe("testing isGenreSuitable functionality ", function () {

        it("works with Thriller as a first argument and the age is equal to 12", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        });
        it("works with Thriller as a first argument and the age is equal to 12", function () {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        });
        it("works with Thriller as a first argument and the age is more than 12", function () {
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal(`Those books are suitable`);
        });
        it("works with test as a first argument and the age is less than 12", function () {
            expect(bookSelection.isGenreSuitable('test', 10)).to.equal(`Those books are suitable`);
        });
        it("works with test as a first argument and the age is more than 12", function () {
            expect(bookSelection.isGenreSuitable('test', 20)).to.equal(`Those books are suitable`);
        });
    });

    describe("testing isItAffordable  functionality", function () {

        it("throws an error with the first parameter invalid", function () {
            expect(() => bookSelection.isItAffordable(undefined, 3)).to.throw(`Invalid input`);
        });
        it("throws an error with the second parameter invalid", function () {
            expect(() => bookSelection.isItAffordable(3, undefined)).to.throw(`Invalid input`);
        });
        it("throws an error with both parameters invalid", function () {
            expect(() => bookSelection.isItAffordable(3, undefined)).to.throw(`Invalid input`);
        });

        it("works with budget higher than price", function () {
            expect(bookSelection.isItAffordable(20, 50)).to.equal(`Book bought. You have 30$ left`);
        });
        it("works with budget lower than price", function () {
            expect(bookSelection.isItAffordable(50, 20)).to.equal(`You don't have enough money`);
        });
    });

    describe("testing suitableTitles functionality", function () {

        it("throws an error with the first parameter invalid", function () {
            expect(() => bookSelection.suitableTitles(undefined, 'test')).to.throw(`Invalid input`);
        });
        it("throws an error with the second parameter invalid", function () {
            expect(() => bookSelection.suitableTitles([], undefined)).to.throw(`Invalid input`);
        });
        it("throws an error with the both parameters invalid", function () {
            expect(() => bookSelection.suitableTitles(undefined, undefined)).to.throw(`Invalid input`);
        });

        it("returns the right array if both arrays are valid and not empty", function () {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Thriller")).to.deep.equal(['The Da Vinci Code']);
        });

    });


});