const rentCar = {
    searchCar(shop, model) {
        let findModel = [];
        if (Array.isArray(shop) && typeof model == 'string') {
            for (let i = 0; i < shop.length; i++) {
                if (model == shop[i]) {
                    findModel.push(shop[i]);
                }
            }
            if (findModel.length !== 0) {
                return `There is ${findModel.length} car of model ${model} in the catalog!`;
            } else {
                throw new Error('There are no such models in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    calculatePriceOfCar(model, days) {
        let catalogue = {
            Volkswagen: 20,
            Audi: 36,
            Toyota: 40,
            BMW: 45,
            Mercedes: 50
        };

        if (typeof model == 'string' && Number.isInteger(days)) {
            if (catalogue.hasOwnProperty(model)) {
                let cost = catalogue[model] * days;
                return `You choose ${model} and it will cost $${cost}!`
            } else {
                throw new Error('No such model in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    checkBudget(costPerDay, days, budget) {
        if (!Number.isInteger(costPerDay) || !Number.isInteger(days) || !Number.isInteger(budget)) {
            throw new Error('Invalid input!');
        } else {
            let cost = costPerDay * days;
            if (cost <= budget) {
                return `You rent a car!`
            } else {
                return 'You need a bigger budget!'
            }
        }
    }
}

import { expect } from "chai";

describe("Suite Tests Rent Car Functionality", function () {
    describe("testing •	searchCar functionality ", function () {

        it("works with the correct parameters and 1 match", function () {
            expect(rentCar.searchCar(['Audi', 'BMW'], 'Audi')).to.equal(`There is 1 car of model Audi in the catalog!`);
        });

        it("throws an error with the first parameter invalid", function () {
            expect(() => rentCar.searchCar(undefined, 'test')).to.throw(`Invalid input`);
        });

        it("throws an error with the second parameter not being an integer", function () {
            expect(() => rentCar.searchCar(['Audi', 'BMW'], 2.5)).to.throw(`Invalid input`);
        });

        it("throws an error with the second parameter invalid", function () {
            expect(() => rentCar.searchCar(['Audi', 'BMW'], undefined)).to.throw(`Invalid input`);
        });

        it("throws an error with both parameters invalid", function () {
            expect(() => rentCar.searchCar(undefined, undefined)).to.throw(`Invalid input`);
        });

        it("throws an error with both parameters invalid", function () {
            expect(() => rentCar.searchCar(['Audi', 'BMW'], 'test')).to.throw('There are no such models in the catalog!');
        });
    });

    describe("testing •	calculatePriceOfCar functionality", function () {

        it("throws an error with the first parameter invalid", function () {
            expect(() => rentCar.calculatePriceOfCar(undefined, 3)).to.throw(`Invalid input`);
        });
        it("throws an error with the second parameter invalid", function () {
            expect(() => rentCar.calculatePriceOfCar('test', undefined)).to.throw(`Invalid input`);
        });
        it("throws an error with both parameters invalid", function () {
            expect(() => rentCar.calculatePriceOfCar(undefined, undefined)).to.throw(`Invalid input`);
        });

        it("throws an error if there are no matches", function () {
            expect(() => rentCar.calculatePriceOfCar('test', 3)).to.throw('No such model in the catalog!');
        });

        it("works with both arguments valid ", function () {
            expect(rentCar.calculatePriceOfCar('Audi', 2)).to.equal(`You choose Audi and it will cost $72!`);
        });
    });

    describe("testing •	checkBudget functionality", function () {

        it("throws an error with the first parameter invalid", function () {
            expect(() => rentCar.checkBudget(undefined, 2, 100)).to.throw(`Invalid input`);
        });
        it("throws an error with the second parameter invalid", function () {
            expect(() => rentCar.checkBudget(10, undefined, 100)).to.throw(`Invalid input`);
        });
        it("throws an error with the third parameter invalid", function () {
            expect(() => rentCar.checkBudget(10, 2, undefined)).to.throw(`Invalid input`);
        });

        it("throws an error with the parameters not integers", function () {
            expect(() => rentCar.checkBudget(10.5, 2.5, 2.2)).to.throw(`Invalid input`);
        });


        it("returns properly if the price is affordable", function () {
            expect(rentCar.checkBudget(10, 2, 100)).to.equal(`You rent a car!`);
        });

        it("returns properly if the price is affordable", function () {
            expect(rentCar.checkBudget(10, 2, 20)).to.equal(`You rent a car!`);
        });

        it("returns properly if the price is not affordable", function () {
            expect(rentCar.checkBudget(10, 2, 10)).to.equal(`You need a bigger budget!`);
        });

    });


});