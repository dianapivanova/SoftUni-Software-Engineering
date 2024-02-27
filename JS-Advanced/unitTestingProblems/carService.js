const carService = {
    isItExpensive(issue) {
        if (issue === "Engine" || issue === "Transmission") {
            return `The issue with the car is more severe and it will cost more money`;
        } else {
            return `The overall price will be a bit cheaper`;
        }
    },
    discount(numberOfParts, totalPrice) {
        if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
            throw new Error("Invalid input");
        }

        let discountPercentage = 0;

        if (numberOfParts > 2 && numberOfParts <= 7) {
            discountPercentage = 15;
        } else if (numberOfParts > 7) {
            discountPercentage = 30;
        }

        let result = (discountPercentage / 100) * totalPrice;

        if (numberOfParts <= 2) {
            return "You cannot apply a discount";
        } else {
            return `Discount applied! You saved ${result}$`;
        }
    },
    partsToBuy(partsCatalog, neededParts) {
        let totalSum = 0;

        if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
            throw new Error("Invalid input");
        }
        neededParts.forEach((neededPart) => {
            partsCatalog.map((obj) => {
                if (obj.part === neededPart) {
                    totalSum += obj.price;
                }
            });
        });

        return totalSum;
    },
};

import { expect } from "chai";

describe("Suite Tests Car Service", function () {
    describe("testing isItExpensive functionality ", function () {

        it("works with Engine as an argument", function () {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it("works with Transmission as an argument", function () {
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it("works with test as an argument", function () {
            expect(carService.isItExpensive('test')).to.equal(`The overall price will be a bit cheaper`);
        });
    });

    describe("testing discount functionality", function () {

        it("throws an error with the first parameter invalid", function () {
            expect(() => carService.discount(undefined, 3)).to.throw(`Invalid input`);
        });
        it("throws an error with the second parameter invalid", function () {
            expect(() => carService.discount(3, undefined)).to.throw(`Invalid input`);
        });
        it("throws an error with both parameters invalid", function () {
            expect(() => carService.discount(3, undefined)).to.throw(`Invalid input`);
        });

        it("works with proper arguments and 15% discount", function () {
            expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved 15$`);
        });
        it("works with proper arguments and no discount", function () {
            expect(carService.discount(1, 100)).to.equal(`You cannot apply a discount`);
        });
        it("works with proper arguments and 30% discount", function () {
            expect(carService.discount(10, 100)).to.equal(`Discount applied! You saved 30$`);
        });
    });

    describe("testing partsToBuy functionality", function () {

        it("throws an error with the first parameter invalid", function () {
            expect(() => carService.partsToBuy(undefined, [])).to.throw(`Invalid input`);
        });
        it("throws an error with the first parameter invalid", function () {
            expect(() => carService.partsToBuy([], undefined)).to.throw(`Invalid input`);
        });
        it("throws an error with the first parameter invalid", function () {
            expect(() => carService.partsToBuy(undefined, undefined)).to.throw(`Invalid input`);
        });
        it("returns 0 if the first array is empty", function () {
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0);
        });
        it("returns the right sum if both arrays are valid and not empty", function () {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).to.equal(145);
        });

    });


});
