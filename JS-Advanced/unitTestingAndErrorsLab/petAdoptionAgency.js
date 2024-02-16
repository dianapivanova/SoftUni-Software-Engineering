const petAdoptionAgency = {
    isPetAvailable(pet, availableCount, vaccinated) {
        if (typeof pet !== "string" || typeof availableCount !== "number" || typeof vaccinated !== "boolean") {
            throw new Error("Invalid input");
        }

        if (availableCount <= 0) {
            return `Sorry, there are no ${pet}(s) available for adoption at the agency.`;
        } else {
            if (vaccinated) {
                return `Great! We have ${availableCount} vaccinated ${pet}(s) available for adoption at the agency.`;
            } else {
                return `Great! We have ${availableCount} ${pet}(s) available for adoption, but they need vaccination.`;
            }

        }
    },
    getRecommendedPets(petList, desiredTraits) {
        let recommendedPets = [];

        if (!Array.isArray(petList) || typeof desiredTraits !== "string") {
            throw new Error("Invalid input");
        }

        petList.forEach((pet) => {
            if (pet.traits === desiredTraits) {
                recommendedPets.push(pet.name);
            }
        });

        if (recommendedPets.length === 0) {
            return `Sorry, we currently have no recommended pets with the desired traits: ${desiredTraits}.`;
        } else {
            return `Recommended pets with the desired traits (${desiredTraits}): ${recommendedPets.join(", ")}`;
        }
    },
    adoptPet(pet, adopterName) {
        if (typeof pet !== "string" || typeof adopterName !== "string") {
            throw new Error("Invalid input");
        }

        return `Congratulations, ${adopterName}! You have adopted ${pet} from the agency. Enjoy your time with your new furry friend!`;
    },
};

import { expect } from "chai";

describe("Testing Pet adoption agency", function () {
    describe("testing isPetAvailable method and all functionalities", function () {

        it("works with available count higher than 0 and vaccinated true", function () {
            expect(petAdoptionAgency.isPetAvailable('cat', 1, true)).to.equal(`Great! We have 1 vaccinated cat(s) available for adoption at the agency.`)
        });

        it("works with available count equal to 0 and vaccinated true", function () {
            expect(petAdoptionAgency.isPetAvailable('cat', 0, true)).to.equal(`Sorry, there are no cat(s) available for adoption at the agency.`)
        });

        it("works with available count less than 0 and vaccinated true", function () {
            expect(petAdoptionAgency.isPetAvailable('cat', -1, true)).to.equal(`Sorry, there are no cat(s) available for adoption at the agency.`)
        });

        it("works with available count higher than 0 and vaccinated false", function () {
            expect(petAdoptionAgency.isPetAvailable('cat', 1, false)).to.equal(`Great! We have 1 cat(s) available for adoption, but they need vaccination.`)
        });

        it("throws an error with first parameter not a string - a number", function () {
            expect(() => petAdoptionAgency.isPetAvailable(1, 1, false)).to.throw('Invalid input');
        });

        it("throws an error with first parameter not a string - an array", function () {
            expect(() => petAdoptionAgency.isPetAvailable([], 1, false)).to.throw('Invalid input');
        });

        it("throws an error with first parameter not a string - an undefined", function () {
            expect(() => petAdoptionAgency.isPetAvailable(undefined, 1, false)).to.throw('Invalid input');
        });

        it("throws an error with first parameter not a string - a null", function () {
            expect(() => petAdoptionAgency.isPetAvailable(null, 1, false)).to.throw('Invalid input');
        });

        it("throws an error with second parameter not a number - a string", function () {
            expect(() => petAdoptionAgency.isPetAvailable('cat', "test", false)).to.throw('Invalid input');
        });

        it("throws an error with second parameter not a number - an array", function () {
            expect(() => petAdoptionAgency.isPetAvailable('cat', [], false)).to.throw('Invalid input');
        });

        it("throws an error with second parameter not a number - undefined", function () {
            expect(() => petAdoptionAgency.isPetAvailable('cat', undefined, false)).to.throw('Invalid input');
        });

        it("throws an error with second parameter not a number - null", function () {
            expect(() => petAdoptionAgency.isPetAvailable('cat', null, false)).to.throw('Invalid input');
        });

        it("throws an error with the third parameter not a boolean - string", function () {
            expect(() => petAdoptionAgency.isPetAvailable('cat', 1, 'test')).to.throw('Invalid input');
        });

        it("throws an error with the third parameter not a boolean - num", function () {
            expect(() => petAdoptionAgency.isPetAvailable('cat', 1, 1)).to.throw('Invalid input');
        });

        it("throws an error with the third parameter not a boolean - an array", function () {
            expect(() => petAdoptionAgency.isPetAvailable('cat', 1, [])).to.throw('Invalid input');
        });

        it("throws an error with the third parameter not a boolean - an undefined", function () {
            expect(() => petAdoptionAgency.isPetAvailable('cat', 1, undefined)).to.throw('Invalid input');
        });

        it("throws an error with the third parameter not a boolean - a null", function () {
            expect(() => petAdoptionAgency.isPetAvailable('cat', 1, null)).to.throw('Invalid input');
        });
    });
    describe("testing isPetAvailable method and all functionalities", function () {
        it("works with both inputs valid", function () {
            expect(petAdoptionAgency.getRecommendedPets([{ name: "Meow", traits: "red" }, { name: 'Stanko', traits: "blue" }], "blue")).to.equal(`Recommended pets with the desired traits (blue): Stanko`);
        })

        it("works with both inputs valid but no matches", function () {
            expect(petAdoptionAgency.getRecommendedPets([{ name: "Meow", traits: "red" }, { name: 'Stanko', traits: "blue" }], "yellow")).to.equal(`Sorry, we currently have no recommended pets with the desired traits: yellow.`);
        });

        it("throws an error with the first parameter not an array", function () {
            expect(() => petAdoptionAgency.getRecommendedPets(1, "yellow")).to.throw('Invalid input');
        })

        it("throws an error with the second parameter not a string", function () {
            expect(() => petAdoptionAgency.getRecommendedPets([], -5)).to.throw('Invalid input');
        })
    });
    describe("testing adoptPed method and all functionalities", function () {
        it("works with both inputs valid", function () {
            expect(petAdoptionAgency.adoptPet("dog", "Misho")).to.equal(`Congratulations, Misho! You have adopted dog from the agency. Enjoy your time with your new furry friend!`)
        });
        it("throws an error with the first parameter not a string - a num", function () {
            expect(() => petAdoptionAgency.adoptPet(1, "Gosho")).to.throw('Invalid input');
        });
        it("throws an error with the second parameter not a string - a num", function () {
            expect(() => petAdoptionAgency.adoptPet("dog", -5)).to.throw('Invalid input');
        })
    })

});

