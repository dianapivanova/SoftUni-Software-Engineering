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

        let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);

        if (typeof distanceInKilometers !== "number" || distanceInKilometers <= 0 ||
            typeof consumptedFuelInLiters !== "number" || consumptedFuelInLiters <= 0) {
            throw new Error("Invalid Information!");
        } else if (litersPerHundredKm <= 7) {
            return `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`;
        } else {
            return `The car burns too much fuel - ${litersPerHundredKm} liters!`;
        }
    }
}

import { expect } from "chai";

describe("testing chooseYourCar functionality ", function() {
    describe("testing •	choosingType (type, color, year)", function() {
        it("throws invalid year with year before 1900", function() {
            expect(() => chooseYourCar.choosingType('Sedan', 'test', 1890 )).to.throw('Invalid Year!');
        });

        it("throws invalid year with year after 2022", function() {
            expect(() => chooseYourCar.choosingType('Sedan', 'test', 2222 )).to.throw('Invalid Year!');
        });

        it("throws invalid model with a model not sedan", function() {
            expect(() => chooseYourCar.choosingType('test', 'test', 2021 )).to.throw('This type of car is not what you are looking for.');
        });

        it("returns properly with valid params and year after 2010", function() {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2015 )).to.equal('This red Sedan meets the requirements, that you have.');
        });

        it("returns properly with valid params and year after 2010", function() {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010 )).to.equal('This red Sedan meets the requirements, that you have.');
        });


        it("returns properly with valid params and year before 2010", function() {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2002 )).to.equal('This Sedan is too old for you, especially with that red color.');
        });

        it("returns properly with valid params and year before 2010", function() {
            expect(chooseYourCar.choosingType('Sedan', undefined, 2002 )).to.equal('This Sedan is too old for you, especially with that undefined color.');
        });
     });

     describe("testing • brandName (brands, brandIndex)", function() {
        it("throws with invalid params", function() {
            expect(() => chooseYourCar.brandName(undefined, undefined)).to.throw('Invalid Information!');
        });

        it("throws with invalid index - 1", function() {
            expect(() => chooseYourCar.brandName(['BMW', 'Audi'], -1)).to.throw('Invalid Information!');
        });

        it("throws with invalid index - 1", function() {
            expect(() => chooseYourCar.brandName(['BMW', 'Audi'], 2)).to.throw('Invalid Information!');
        });

        it("returns properly", function() {
            expect(chooseYourCar.brandName(['BMW', 'Audi'], 1)).to.equal('BMW');
        });

        it("returns properly", function() {
            expect(chooseYourCar.brandName(['BMW', 'Audi', 'Trotinetka'], 2)).to.equal('BMW, Audi');
        });

        
     });

     describe("testing • CarFuelConsumption (distanceInKilometers, consumptedFuelInLitres)", function() {
        it("throws with invalid params", function() {
            expect(() => chooseYourCar.carFuelConsumption(undefined, undefined)).to.throw('Invalid Information!');
        });

        
     describe("testing • CarFuelConsumption (distanceInKilometers, consumptedFuelInLitres)", function() {
        it("throws with invalid params", function() {
            expect(() => chooseYourCar.carFuelConsumption(-5, -5)).to.throw('Invalid Information!');
        });

        it("returns properly with liters less than 7", function() {
            expect(chooseYourCar.carFuelConsumption(100, 5)).to.equal('The car is efficient enough, it burns 5.00 liters/100 km.');
        });

        it("returns properly with liters equal to 7", function() {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        });

        it("returns properly with liters more than 7", function() {
            expect(chooseYourCar.carFuelConsumption(100, 50)).to.equal('The car burns too much fuel - 50.00 liters!');
        });

     });
     
});
});
