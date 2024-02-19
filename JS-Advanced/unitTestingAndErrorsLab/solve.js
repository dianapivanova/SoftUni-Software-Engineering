const planYourTrip = {
    choosingDestination(destination, season, year) {
        if (year != 2024) {
            throw new Error(`Invalid Year!`);
        } else {
            if (destination == "Ski Resort") {
                if (season === "Winter") {
                    return `Great choice! The ${season} is the perfect time to visit the ${destination}.`;
                } else {
                    return `Consider visiting during the Winter for the best experience at the ${destination}.`;
                }
            } else {
                throw new Error(`This destination is not what you are looking for.`);
            }
        }
    },

    exploreOptions(activities, activityIndex) {
        let result = [];

        if (
            !Array.isArray(activities) ||
            !Number.isInteger(activityIndex) ||
            activityIndex < 0 ||
            activityIndex >= activities.length
        ) {
            throw new Error("Invalid Information!");
        }
        for (let i = 0; i < activities.length; i++) {
            if (i !== activityIndex) {
                result.push(activities[i]);
            }
        }
        return result.join(", ");
    },

    estimateExpenses(distanceInKilometers, fuelCostPerLiter) {
        let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);

        if (
            typeof distanceInKilometers !== "number" ||
            distanceInKilometers <= 0 ||
            typeof fuelCostPerLiter !== "number" ||
            fuelCostPerLiter <= 0
        ) {
            throw new Error("Invalid Information!");
        } else if (totalCost <= 500) {
            return `The trip is budget-friendly, estimated cost is $${totalCost}.`;
        } else {
            return `The estimated cost for the trip is $${totalCost}, plan accordingly.`;
        }
    },
};


import { expect } from "chai";

describe("Suite Tests on planYourTrip functionality and each of its methods", function () {
    describe("testing choosingDestination functionality", function () {

        it("throws an error if the year is different than 2024", function () {
            expect(() => (planYourTrip.choosingDestination("Ski Resort", "Winter", 2022)).to.throw('Invalid Year!'));
        });

        it("throws an error if the year is different than 2024 and the destination is wrong", function () {
            expect(() => (planYourTrip.choosingDestination("Seaside", "Winter", 2022)).to.throw('Invalid Year!'));
        });

        it("throws an error if the destination is different from Ski Resort", function () {
            expect(() => (planYourTrip.choosingDestination("Seaside", "Winter", 2024)).to.throw('This destination is not what you are looking for.'));
        });

        it("returns great choice if the season is winter and the params are valie", function () {
            expect(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)).to.equal(`Great choice! The Winter is the perfect time to visit the Ski Resort.`);
        });

        it("returns great choice if the season is winter and the params are valie", function () {
            expect(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024)).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`);
        });

    });
    describe("testing exploreOptions functionality", function () {

        it("throws an error if the activity is not an array - a number", function () {
            expect(() => (planYourTrip.exploreOptions(1, 1)).to.throw('Invalid Information!'));
        });

        it("returns undefined if we get both params undefined", function () {
            expect(() => (planYourTrip.exploreOptions(undefined, undefined)).be.undefined);
        });

        it("throws an error if the activity is not an array - undefined", function () {
            expect(() => (planYourTrip.exploreOptions(undefined, 1)).to.throw('Invalid Information!'));
        });

        it("throws an error if the activity is not an array - undefined", function () {
            expect(() => (planYourTrip.exploreOptions([], undefined)).to.throw('Invalid Information!'));
        });


        it("throws an error if the activity is not an array - null", function () {
            expect(() => (planYourTrip.exploreOptions(null, null)).to.throw('Invalid Information!'));
        });


        it("throws an error if the activity is not an array - an object", function () {
            expect(() => (planYourTrip.exploreOptions({}, 1)).to.throw('Invalid Information!'));
        });

        it("throws an error if the activityIndex is not a number - a string", function () {
            expect(() => (planYourTrip.exploreOptions([], "test")).to.throw('Invalid Information!'));
        });

        it("throws an error if the activityIndex is not a number - an array", function () {
            expect(() => (planYourTrip.exploreOptions([], [])).to.throw('Invalid Information!'));
        });

        it("throws an error if the activityIndex is outside of the scope - a negative number", function () {
            expect(() => (planYourTrip.exploreOptions([], -1)).to.throw('Invalid Information!'));
        });

        it("throws an error if the activityIndex is outside of the scope - much higher number", function () {
            expect(() => (planYourTrip.exploreOptions(["Skiing"], 3)).to.throw('Invalid Information!'));
        });

        it("throws an error if the activityIndex is outside of the scope - the array length", function () {
            expect(() => (planYourTrip.exploreOptions(["Skiing"], 1)).to.throw('Invalid Information!'));
        });

        it("throws an error if the activityIndex is not an integer", function () {
            expect(() => (planYourTrip.exploreOptions(["Skiing"], 3.5)).to.throw('Invalid Information!'));
        });

        it("works properly with both parameters valid and array with 2 elements", function () {
            expect(planYourTrip.exploreOptions(["Hiking", "Skiing"], 0)).to.equals('Skiing');
        });

        it("works properly with both parameters valid and array with 3 elements", function () {
            expect(planYourTrip.exploreOptions(["Hiking", "Skiing", "Snowboarding"], 0)).to.equals('Skiing, Snowboarding');
        });

    });
    describe("testing estimateExpenses functionality", function () {

        it("throws an error if the first parameter is a string", function () {
            expect(() => (planYourTrip.estimateExpenses("test", 2)).to.throw('Invalid Information!'));
        });

        it("throws an error if the first parameter is a string", function () {
            expect(() => (planYourTrip.estimateExpenses(0, 0)).to.throw('Invalid Information!'));
        });

        it("throws an error if the both parameters are a string", function () {
            expect(() => (planYourTrip.estimateExpenses("test", "test")).to.throw('Invalid Information!'));
        });

        it("throws an error if the both parameters are undefined", function () {
            expect(() => (planYourTrip.estimateExpenses(undefined, undefined)).to.throw('Invalid Information!'));
        });

        it("returns undefined if we get both params undefined", function () {
            expect(() => (planYourTrip.estimateExpenses(undefined, undefined)).be.undefined);
        });

        it("throws an error if first parameter is undefined", function () {
            expect(() => (planYourTrip.estimateExpenses(undefined, 100)).to.throw('Invalid Information!'));
        });

        it("throws an error if second parameter is undefined", function () {
            expect(() => (planYourTrip.estimateExpenses(100, undefined)).to.throw('Invalid Information!'));
        });;

        it("throws an error if the both parameters are null", function () {
            expect(() => (planYourTrip.estimateExpenses(null, null)).to.throw('Invalid Information!'));
        });

        it("throws an error if the both parameters are an array", function () {
            expect(() => (planYourTrip.estimateExpenses([], [])).to.throw('Invalid Information!'));
        });

        it("throws an error if the second parameter is a string", function () {
            expect(() => (planYourTrip.estimateExpenses(2, "test")).to.throw('Invalid Information!'));
        });

        it("throws an error if the first parameter is equal to 0", function () {
            expect(() => (planYourTrip.estimateExpenses(0, 2)).to.throw('Invalid Information!'));
        });

        it("throws an error if the second parameter is equal to 0", function () {
            expect(() => (planYourTrip.estimateExpenses(2, 0)).to.throw('Invalid Information!'));
        });

        it("throws an error if the first parameter is less than 0", function () {
            expect(() => (planYourTrip.estimateExpenses(-5, 2)).to.throw('Invalid Information!'));
        });

        it("throws an error if the second parameter is less than 0", function () {
            expect(() => (planYourTrip.estimateExpenses(100, -5)).to.throw('Invalid Information!'));
        });

        it("throws an error if the both parameters are less than 0", function () {
            expect(() => (planYourTrip.estimateExpenses(-5, -5)).to.throw('Invalid Information!'));
        });

        it("throws an error if the first parameter is not a number - a string", function () {
            expect(() => (planYourTrip.estimateExpenses("test", 2)).to.throw('Invalid Information!'));
        });

        it("throws an error if the second parameter is not a number - a string", function () {
            expect(() => (planYourTrip.estimateExpenses(100, "-2")).to.throw('Invalid Information!'));
        });

        it("throws an error if the first parameter is not a number - a string", function () {
            expect(() => (planYourTrip.estimateExpenses("-2", 2)).to.throw('Invalid Information!'));
        });

        it("throws an error if the both parameter are not a number - a string", function () {
            expect(() => (planYourTrip.estimateExpenses("-2", "-2")).to.throw('Invalid Information!'));
        });

        it("throws an error if the second parameter is not a number - a string", function () {
            expect(() => (planYourTrip.estimateExpenses(100, "test")).to.throw('Invalid Information!'));
        });

        it("works properly with both parameters valid and a total under $500", function () {
            expect(planYourTrip.estimateExpenses(100, 2)).to.equal(`The trip is budget-friendly, estimated cost is $200.00.`);
        });

        it("works properly with both parameters valid and a total  $500", function () {
            expect(planYourTrip.estimateExpenses(100, 5)).to.equal(`The trip is budget-friendly, estimated cost is $500.00.`);
        });

        it("works properly with both parameters valid and a total over $500", function () {
            expect(planYourTrip.estimateExpenses(500, 2)).to.equal(`The estimated cost for the trip is $1000.00, plan accordingly.`);
        });

        it("works properly with both parameters valid and a floating-point numbers", function () {
            expect(planYourTrip.estimateExpenses(50.5, 5.5)).to.equal(`The trip is budget-friendly, estimated cost is $277.75.`);
        });

        it("works properly with both parameters valid and a floating-point numbers", function () {
            expect(planYourTrip.estimateExpenses(50.5, 5.75)).to.equal(`The trip is budget-friendly, estimated cost is $290.38.`);
        });


    });
});