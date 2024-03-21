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
    calculatePriceOfCar (model, days) {
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


describe("testing rentCar", function() {
    describe("testing •	searchCar(shop, model)", function() {
        it("throws with invalid params", function() {
            expect(() => rentCar.searchCar(undefined, undefined)).to.throw('Invalid input!')
        });

        it("throws an error with no matching elements", function() {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'test')).to.throw("There are no such models in the catalog!")
        });

        it("works with valid params and 1 match", function() {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'BMW')).to.equal("There is 1 car of model BMW in the catalog!")
        });
     });

     describe("testing •  calculatePriceOfCar(model, days)", function() {
        it("throws with invalid params", function() {
            expect(() => rentCar.calculatePriceOfCar(undefined, undefined)).to.throw('Invalid input!')
        });

        it("throws with no model in the catalog", function() {
            expect(() => rentCar.calculatePriceOfCar("test", 5)).to.throw("No such model in the catalog!")
        });

        it("works with valid params", function() {
            expect(rentCar.calculatePriceOfCar("Volkswagen", 5)).to.equal('You choose Volkswagen and it will cost $100!')
        });
     });

     describe("testing •  checkBudget(costPerDay, days, budget)", function() {
        it("throws with invalid params", function() {
            expect(() => rentCar.checkBudget(undefined, undefined, undefined)).to.throw('Invalid input!')
        });

        it("works with valid params and budget is enough", function() {
            expect(rentCar.checkBudget(20, 5, 150)).to.equal('You rent a car!')
        });

        it("works with valid params and budget is enough", function() {
            expect(rentCar.checkBudget(20, 5, 100)).to.equal('You rent a car!')
        });

        it("works with valid params and budget is not enough", function() {
            expect(rentCar.checkBudget(20,5, 50)).to.equal("You need a bigger budget!")
        });
     });
     
});
