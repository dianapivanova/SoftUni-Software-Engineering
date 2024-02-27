const movieTheater = {
    ageRestrictions(movieRating) {
        switch (movieRating) {
            case "G":
                return "All ages admitted to watch the movie";
            case "PG":
                return "Parental guidance suggested! Some material may not be suitable for pre-teenagers";
            case "R":
                return "Restricted! Under 17 requires accompanying parent or adult guardian";
            case "NC-17":
                return "No one under 17 admitted to watch the movie";
            default:
                return "There are no age restrictions for this movie";
        }
    },
    moneySpent(tickets, food, drinks) {
        if (
            typeof tickets !== "number" ||
            !Array.isArray(food) ||
            !Array.isArray(drinks)
        ) {
            throw new Error("Invalid input");
        }

        let bill = 0;

        bill += tickets * 15;

        food.forEach((element) => {
            switch (element) {
                case "Nachos":
                    bill += 6;
                    break;
                case "Popcorn":
                    bill += 4.5;
                    break;
            }
        });

        drinks.forEach((element) => {
            switch (element) {
                case "Soda":
                    bill += 2.5;
                    break;
                case "Water":
                    bill += 1.5;
                    break;
            }
        });

        if (bill > 50) {
            bill -= bill * 0.2;
            return `The total cost for the purchase with applied discount is ${bill.toFixed(
                2
            )}`;
        } else {
            return `The total cost for the purchase is ${bill.toFixed(2)}`;
        }
    },
    reservation(rowsArray, neededSeatsCount) {
        if (!Array.isArray(rowsArray) || typeof neededSeatsCount !== "number") {
            throw new Error("Invalid input");
        }

        let availableRows = [];
        rowsArray.forEach((row) => {
            if (row.freeSeats >= neededSeatsCount) {
                availableRows.push(row.rowNumber);
            }
        });

        return Math.max(...availableRows);
    },
};

import { expect } from "chai";

describe("Suite Tests MOvie Theater", function () {
    describe("testing ageRestrictions functionality", function () {

        it("works with a parameter G", function () {
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
        });

        it("works with a parameter PG", function () {
            expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        });

        it("works with a parameter R", function () {
            expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        });

        it("works with a parameter NC-17", function () {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
        });

        it("works with a parameter anything but the above", function () {
            expect(movieTheater.ageRestrictions('S')).to.equal(`There are no age restrictions for this movie`);
        });

    });

    describe("testing moneySpent functionality", function () {

        it("throws with invalid first parameter", function () {
            expect(() => movieTheater.moneySpent(undefined, [], [])).to.throw('Invalid input');
        });

        it("throws with invalid second parameter", function () {
            expect(() => movieTheater.moneySpent(5, undefined, [])).to.throw('Invalid input');
        });

        it("throws with invalid third parameter", function () {
            expect(() => movieTheater.moneySpent(5, [], undefined)).to.throw('Invalid input');
        });

        it("throws with invalid all parameter", function () {
            expect(() => movieTheater.moneySpent(undefined, undefined, undefined)).to.throw('Invalid input');
        });

        it("works properly all params valid and 1 item per array - no discount", function () {
            expect(movieTheater.moneySpent(2, ['Popcorn'], ['Water'])).to.equal('The total cost for the purchase is 36.00');
        });

        it("works properly all params valid and 1 item per array - no discount", function () {
            expect(movieTheater.moneySpent(2, ['Popcorn', 'Nachos'], ['Water', 'Soda'])).to.equal('The total cost for the purchase is 44.50');
        });

        it("works properly all params valid and 1 item per array - discount", function () {
            expect(movieTheater.moneySpent(4, ['Popcorn'], ['Water'])).to.equal('The total cost for the purchase with applied discount is 52.80');
        });

        it("works properly all params valid and 1 item per array - no discount", function () {
            expect(movieTheater.moneySpent(4, ['Popcorn', 'Nachos'], ['Water', 'Soda'])).to.equal('The total cost for the purchase with applied discount is 59.60');
        });

    });

    describe("testing reservation functionality", function () {

        it("throws with invalid all parameter", function () {
            expect(() => movieTheater.reservation(undefined, undefined)).to.throw('Invalid input');
        });

        it("throws with invalid first parameter", function () {
            expect(() => movieTheater.reservation(undefined, 5)).to.throw('Invalid input');
        });

        it("throws with invalid second parameter", function () {
            expect(() => movieTheater.reservation([], undefined)).to.throw('Invalid input');
        });

        it("works with valid all parameters", function () {
            const result = movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 5);
            expect(result).to.equal(2);
        });

    })
});
