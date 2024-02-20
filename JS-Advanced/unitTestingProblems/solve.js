const chooseYourCar = {
    choosingType(type, color, year) {
        if (year < 1900 || year > 2022) {
            throw new Error(`Invalid Year!`);
        } else {
            if (type == "Sedan") {

                if (year >= 2010) {
                    return `This ${color} ${type} meets the requirements, that you have.`;
                } else {
                    return `This ${type} is too old for you, especially with that ${color} color.`;
                }
            }
            throw new Error(`This type of car is not what you are looking for.`);
        }
    },

    brandName(brands, brandIndex) {

        let result = [];

        if (!Array.isArray(brands) || !Number.isInteger(brandIndex) || brandIndex < 0 || brandIndex >= brands.length) {
            throw new Error("Invalid Information!");
        }
        for (let i = 0; i < brands.length; i++) {
            if (i !== brandIndex) {
                result.push(brands[i]);
            }
        }
        return result.join(", ");
    },

    carFuelConsumption(distanceInKilometers, consumptedFuelInLiters) {

        let litersPerHundredKm = ((consumptedFuelInLiters / distanceInKilometers) * 100).toFixed(2);

        if (typeof distanceInKilometers !== "number" || distanceInKilometers <= 0 ||
            typeof consumptedFuelInLiters !== "number" || consumptedFuelInLiters <= 0) {
            throw new Error("Invalid Information!");
        } else if (litersPerHundredKm <= 7) {
            return `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`;
        } else {
            return `The car burns too much fuel - ${litersPerHundredKm} liters!`;
        }
    }
};

import { expect } from "chai";

describe("Suite Tests on chooseYourCar functionalities", function () {
    describe("testing •	choosingType functionality", function () {
        it("throws if the year is not valid", function () {
            expect(() => chooseYourCar.choosingType('Sedan', 'test', 1899)).to.throw('Invalid Year!')
        });
        it("throws if the year is not valid", function () {
            expect(() => chooseYourCar.choosingType('Sedan', 'test', 2025)).to.throw('Invalid Year!')
        });
        it("throws if the type is not a sedan", function () {
            expect(() => chooseYourCar.choosingType('test', 'test', 2021)).to.throw('This type of car is not what you are looking for.')
        });
        it("returns the expected parameter with year before 2010", function () {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.equal('This Sedan is too old for you, especially with that red color.')
        });
        it("returns the expected parameter with year after 2010", function () {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2020)).to.equal('This red Sedan meets the requirements, that you have.')
        });
        it("returns the expected parameter with year after 2010", function () {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal('This red Sedan meets the requirements, that you have.')
        });
    });
    describe("testing •	brandName functionality", function () {
        it("throws if the year is not valid", function () {
            expect(() => chooseYourCar.brandName('test', 'test')).to.throw('Invalid Information!')
        });
        it("throws if the year is not valid", function () {
            expect(() => chooseYourCar.brandName(['BMW', 'Audi'], 2)).to.throw('Invalid Information!')
        });
        it("throws if the year is not valid", function () {
            expect(() => chooseYourCar.brandName(['BMW', 'Audi'], -2)).to.throw('Invalid Information!')
        });
        it("returns the expected result with valid parameters - array with 2 elements", function () {
            expect(chooseYourCar.brandName(['BMW', 'Audi'], 1)).to.equal('BMW')
        });
        it("returns the expected result with valid parameters - array with 3 elements", function () {
            expect(chooseYourCar.brandName(['BMW', 'Audi', 'Lada'], 1)).to.equal('BMW, Lada')
        });
    });
    describe("testing •    CarFuelConsumption functionality", function () {
        it("throws if the year is not valid", function () {
            expect(() => chooseYourCar.carFuelConsumption('test', 'test')).to.throw('Invalid Information!')
        });
        it("throws if the year is not valid", function () {
            expect(() => chooseYourCar.carFuelConsumption(-1, -1)).to.throw('Invalid Information!')
        });
        it("returns the expected result with valid parameters - burns more than 7L/100", function () {
            expect(chooseYourCar.carFuelConsumption(1000, 200)).to.equal(`The car burns too much fuel - 20.00 liters!`)
        });
        it("returns the expected result with valid parameters - burns less than 7L/100", function () {
            expect(chooseYourCar.carFuelConsumption(1000, 50)).to.equal(`The car is efficient enough, it burns 5.00 liters/100 km.`)
        });
        it("returns the expected result with valid parameters - burns less than 7L/100", function () {
            expect(chooseYourCar.carFuelConsumption(1000, 70)).to.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`)
        });
    });

});
