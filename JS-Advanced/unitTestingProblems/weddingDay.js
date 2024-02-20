const weddingDay = {
    pickVenue(capacity, pricePerGuest, location) {
        if (typeof capacity !== 'number' || typeof pricePerGuest !== 'number' || typeof location !== 'string' || location === '') {
            throw new Error("Invalid Information!")
        };
        if (location == "Varna") {

            if (capacity >= 150 && pricePerGuest <= 120) {
                return `This venue meets the requirements, with capacity of ${capacity} guests and ${pricePerGuest}$ cover.`;
            } else {
                return `This venue does not meet your requirements!`;
            }
        } else {
            throw new Error(`The location of this venue is not in the correct area!`);
        };
    },

    otherSpendings(weddingDecoration, photography, discount) {
        if (!Array.isArray(weddingDecoration) || !Array.isArray(photography) || typeof discount !== "boolean") {
            throw new Error("Invalid Information!");
        }
        let totalPrice = 0;

        weddingDecoration.forEach((decoration) => {
            if (decoration === "flowers") {
                totalPrice += 500
            } else if (decoration === "Fabric drapes and curtains") {
                totalPrice += 400
            }
        });

        photography.forEach((service) => {
            if (service === "pictures") {
                totalPrice += 700
            } else if (service === "video") {
                totalPrice += 1300
            }
        });
        if (discount) {
            totalPrice = totalPrice * 0.85;
            return `You spend ${totalPrice}$ for wedding decoration and photography with 15% discount!`
        } else {
            return `You spend ${totalPrice}$ for wedding decoration and photography!`
        }

    }
    ,
    tableDistribution(guests, tables) {
        if (typeof guests !== "number" || guests <= 0 ||
            typeof tables !== "number" || tables <= 0) {
            throw new Error("Invalid Information!");
        }
        let peopleOnTable = Math.round(guests / tables);

        if (peopleOnTable < 6) {
            return `There is only ${peopleOnTable} people on every table, you can join some tables.`
        } else {
            return `You have ${tables} tables with ${peopleOnTable} guests on table.`
        }
    }
}

import { expect } from "chai";

describe("Suite tests weddingDay object", function () {
    describe("testing •	PickVenue functionality", function () {
        it("throws an error with invalid parameters", function () {
            expect(() => weddingDay.pickVenue('test', 'test', 2)).to.throw('Invalid Information!')
        });

        it("throws an error with location as an empty string", function () {
            expect(() => weddingDay.pickVenue(100, 100, '')).to.throw('Invalid Information!')
        });

        it("throws an error with location not being Varna", function () {
            expect(() => weddingDay.pickVenue(100, 100, 'Sofia')).to.throw('The location of this venue is not in the correct area!')
        });

        it("works with the correct arguments, capacity 150 and price less than 120", function () {
            expect(weddingDay.pickVenue(150, 100, 'Varna')).to.equal('This venue meets the requirements, with capacity of 150 guests and 100$ cover.')
        });

        it("works with the correct arguments, capacity over 150 and price equal to 120", function () {
            expect(weddingDay.pickVenue(160, 120, 'Varna')).to.equal('This venue meets the requirements, with capacity of 160 guests and 120$ cover.')
        });

        it("works with the correct arguments, capacity less than 100 and price higher than 120", function () {
            expect(weddingDay.pickVenue(80, 150, 'Varna')).to.equal('This venue does not meet your requirements!')
        });
    });
    describe("testing •  otherSpendings  functionality", function () {
        it("throws an error with invalid parameters", function () {
            expect(() => weddingDay.otherSpendings({}, {}, 1)).to.throw(`Invalid Information!`)
        });
        it("returns a discount message with last param true and valid arguments", function () {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], true)).to.equal(`You spend 1020$ for wedding decoration and photography with 15% discount!`)
        });
        it("returns a discount message with last param true and valid arguments", function () {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal(`You spend 1200$ for wedding decoration and photography!`)
        });
    });

    describe("testing •  tableDistribution functionality", function () {
        it("throws an error with invalid parameters", function () {
            expect(() => weddingDay.tableDistribution({}, {})).to.throw(`Invalid Information!`)
        });
        it("throws an error with invalid parameters - both less than 0", function () {
            expect(() => weddingDay.tableDistribution(-5, -5)).to.throw(`Invalid Information!`)
        });
        it("returns a join table message with less than 6 people on table", function () {
            expect(weddingDay.tableDistribution(100, 20)).to.equal(`There is only 5 people on every table, you can join some tables.`)
        });
        it("returns a message with more than 6 people on table", function () {
            expect(weddingDay.tableDistribution(100, 10)).to.equal(`You have 10 tables with 10 guests on table.`)
        });
    });
});
