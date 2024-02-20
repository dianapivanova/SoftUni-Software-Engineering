const motorcycleRider = {
    licenseRestriction(category) {
        if (category === "AM") {
            return 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.'
        } else if (category === "A1") {
            return 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.'
        } else if (category === "A2") {
            return 'Motorcycles with maximum power of 35KW. and the minimum age is 18.'
        } else if (category === "A") {
            return 'No motorcycle restrictions, and the minimum age is 24.'
        } else {
            throw new Error("Invalid Information!");
        }
    },
    motorcycleShowroom(engineVolume, maximumEngineVolume) {
        if (!Array.isArray(engineVolume) || typeof maximumEngineVolume !== "number" || engineVolume.length < 1 || maximumEngineVolume < 50) {
            throw new Error("Invalid Information!");
        }
        let availableBikes = [];
        engineVolume.forEach((engine) => {

            if (engine <= maximumEngineVolume && engine >= 50) {
                availableBikes.push(engine);
            }
        });
        return `There are ${availableBikes.length} available motorcycles matching your criteria!`;
    },
    otherSpendings(equipment, consumables, discount) {
        if (
            !Array.isArray(equipment) ||
            !Array.isArray(consumables) ||
            typeof discount !== "boolean"
        ) {
            throw new Error("Invalid Information!");
        }
        let totalPrice = 0;

        equipment.forEach((element) => {
            if (element === "helmet") {
                totalPrice += 200
            } else if (element === "jacked") {
                totalPrice += 300
            }
        });

        consumables.forEach((element) => {
            if (element === "engine oil") {
                totalPrice += 70
            } else if (element === "oil filter") {
                totalPrice += 30
            }
        });
        if (discount) {
            totalPrice = totalPrice * 0.9;
            return `You spend $${totalPrice.toFixed(2)} for equipment and consumables with 10% discount!`
        } else {
            return `You spend $${totalPrice.toFixed(2)} for equipment and consumables!`
        }

    }
};

import { expect } from "chai";


describe("Suite Tests", function () {
    describe("testing •	licenseRestriction functionality", function () {
        it("throws if the argument is not one of the mentioned categories", function () {
            expect(() => motorcycleRider.licenseRestriction('test')).to.throw('Invalid Information!')
        });
        it("works with AM", function () {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
        });
        it("works with A1", function () {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
        });
        it("works with A2", function () {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.')
        });
        it("works with A", function () {
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.')
        });
    });
    describe("testing •	motorcycleShowroom  functionality", function () {
        it("returns a valid list of motorcycles with valid parameters", function () {
            expect(motorcycleRider.motorcycleShowroom([125, 250, 600], 300)).to.equal(`There are 2 available motorcycles matching your criteria!`)
        });
        it("returns a valid list of motorcycles with valid parameters - 2", function () {
            expect(motorcycleRider.motorcycleShowroom([125, 250, 300], 300)).to.equal(`There are 3 available motorcycles matching your criteria!`)
        });
        it("throws if the array is empty and the second argument is less than 50", function () {
            expect(() => motorcycleRider.motorcycleShowroom([], 40)).to.throw('Invalid Information!')
        });
        it("throws if the params are invalid", function () {
            expect(() => motorcycleRider.motorcycleShowroom({}, 'test')).to.throw('Invalid Information!')
        });
    });
    describe("testing •	otherSpendings  functionality", function () {
        it("throws if the params are invalid", function () {
            expect(() => motorcycleRider.otherSpendings({}, {}, 1)).to.throw('Invalid Information!')
        });
        it("returns a valid list of motorcycles with valid parameters and a discount", function () {
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], true)).to.equal(`You spend $243.00 for equipment and consumables with 10% discount!`)
        });
        it("returns a valid list of motorcycles with valid parameters and no discount", function () {
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false)).to.equal(`You spend $270.00 for equipment and consumables!`)
        });
        it("returns a valid list of motorcycles with valid parameters and a discount", function () {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal(`You spend $540.00 for equipment and consumables with 10% discount!`)
        });
        it("returns a valid list of motorcycles with valid parameters and no discount", function () {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.equal(`You spend $600.00 for equipment and consumables!`)
        });
    });
});
