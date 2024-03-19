const petAdoptionAgency = {
  isPetAvailable(pet, availableCount, vaccinated) {
    if (
      typeof pet !== "string" ||
      typeof availableCount !== "number" ||
      typeof vaccinated !== "boolean"
    ) {
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
      return `Recommended pets with the desired traits (${desiredTraits}): ${recommendedPets.join(
        ", "
      )}`;
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

describe("testing petAdoptionAgency functionality", function () {
  describe("testing •	isPetAvailable(pet, availableCount, vaccinated) functionality", function () {
    it("throws an error with invalid parameters", function () {
      expect(() => petAdoptionAgency.isPetAvailable(2, 'test', 'test')).to.throw('Invalid input')
    });

    it("works with availableCount =0 and last param false", function () {
      expect(petAdoptionAgency.isPetAvailable('mangusta', 0, false)).to.equal('Sorry, there are no mangusta(s) available for adoption at the agency.')
    });

    it("works with availableCount  > 0 and last parameter false", function () {
      expect(petAdoptionAgency.isPetAvailable('mangusta', 1, false)).to.equal('Great! We have 1 mangusta(s) available for adoption, but they need vaccination.')
    });

    it("works with availableCount  > 0 and last parameter true", function () {
      expect(petAdoptionAgency.isPetAvailable('mangusta', 1, true)).to.equal('Great! We have 1 vaccinated mangusta(s) available for adoption at the agency.')
    });
    
  });

  describe("testing •	getRecommendedPets(petList, desiredTraits) functionality", function () {
    it("throws an error with invalid parameters", function () {
      expect(() => petAdoptionAgency.getRecommendedPets('test', 2)).to.throw('Invalid input')
    });

    it("works with vald parameters and match", function () {
      expect(petAdoptionAgency.getRecommendedPets([{name: 'Sharo', traits: 'red'}], "red")).to.equal('Recommended pets with the desired traits (red): Sharo')
    });

    it("works with vald parameters and match", function () {
      expect(petAdoptionAgency.getRecommendedPets([{name: 'Sharo', traits: 'red'}], "blue")).to.equal('Sorry, we currently have no recommended pets with the desired traits: blue.')
    });
    
  });

  describe("testing •	adoptPet(pet, adopterName) functionality", function () {
    it("throws an error with invalid parameters", function () {
      expect(() => petAdoptionAgency.adoptPet(2, 2)).to.throw('Invalid input')
    });

    it("works with vald parameters and match", function () {
      expect(petAdoptionAgency.adoptPet('mangusta', 'Stoqn Kolev')).to.equal("Congratulations, Stoqn Kolev! You have adopted mangusta from the agency. Enjoy your time with your new furry friend!")
    });
    
    
  });
});
