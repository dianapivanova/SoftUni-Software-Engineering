const motorcycleRider = {
  licenseRestriction(category) {
    if (category === "AM") {
      return "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.";
    } else if (category === "A1") {
      return "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.";
    } else if (category === "A2") {
      return "Motorcycles with maximum power of 35KW. and the minimum age is 18.";
    } else if (category === "A") {
      return "No motorcycle restrictions, and the minimum age is 24.";
    } else {
      throw new Error("Invalid Information!");
    }
  },
  motorcycleShowroom(engineVolume, maximumEngineVolume) {
    if (
      !Array.isArray(engineVolume) ||
      typeof maximumEngineVolume !== "number" ||
      engineVolume.length < 1 ||
      maximumEngineVolume < 50
    ) {
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
        totalPrice += 200;
      } else if (element === "jacked") {
        totalPrice += 300;
      }
    });

    consumables.forEach((element) => {
      if (element === "engine oil") {
        totalPrice += 70;
      } else if (element === "oil filter") {
        totalPrice += 30;
      }
    });
    if (discount) {
      totalPrice = totalPrice * 0.9;
      return `You spend $${totalPrice.toFixed(
        2
      )} for equipment and consumables with 10% discount!`;
    } else {
      return `You spend $${totalPrice.toFixed(
        2
      )} for equipment and consumables!`;
    }
  },
};

import { expect } from "chai";

describe("testing MotorcycleRider", function () {
  describe("testing •	licenseRestriction (category)", function () {
    it("throws an error with invalid param", function () {
      expect(() => motorcycleRider.licenseRestriction('test')).to.throw('Invalid Information!')
    });

    it("throws an error with invalid param", function () {
      expect(() => motorcycleRider.licenseRestriction({})).to.throw('Invalid Information!')
    });

    it("throws an error with invalid param", function () {
      expect(() => motorcycleRider.licenseRestriction([])).to.throw('Invalid Information!')
    });

    it("throws an error with invalid param", function () {
      expect(() => motorcycleRider.licenseRestriction(undefined)).to.throw('Invalid Information!')
    });

    it("returns properly with AM", function () {
      expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
    });

    it("returns properly with A1", function () {
      expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
    });

    it("returns properly with A2", function () {
      expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.')
    });

    it("returns properly with A", function () {
      expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.')
    });

  });

  describe("testing • motorcycleShowroom (engineVolume, maximumEngineVolume)", function () {
    it("throws an error with invalid param", function () {
      expect(() => motorcycleRider.motorcycleShowroom([], 50)).to.throw('Invalid Information!')
    });

    it("throws an error with invalid param", function () {
      expect(() => motorcycleRider.motorcycleShowroom(["55", "60", "65"], 45)).to.throw('Invalid Information!')
    });

    it("throws an error with invalid param", function () {
      expect(() => motorcycleRider.motorcycleShowroom({}, {})).to.throw('Invalid Information!')
    });

    it("throws an error with invalid param", function () {
      expect(() => motorcycleRider.motorcycleShowroom(undefined, undefined)).to.throw('Invalid Information!')
    });

    it("throws an error with invalid param", function () {
      expect(() => motorcycleRider.motorcycleShowroom([], [])).to.throw('Invalid Information!')
    });

    it("works with valid param", function () {
      expect(motorcycleRider.motorcycleShowroom(["55","60","100"], 100)).to.equal('There are 3 available motorcycles matching your criteria!')
    });

    it("works with valid param", function () {
      expect(motorcycleRider.motorcycleShowroom(["150","200","250"], 100)).to.equal('There are 0 available motorcycles matching your criteria!')
    });

  describe("testing • otherSpendings (equipment, consumables, discount)", function () {
    it("throws an error with invalid param", function () {
      expect(() => motorcycleRider.otherSpendings({}, {}, {})).to.throw('Invalid Information!')
    });

    it("throws an error with invalid param", function () {
      expect(() => motorcycleRider.otherSpendings(undefined, undefined, undefined)).to.throw('Invalid Information!')
    });

    it("throws an error with invalid param", function () {
      expect(() => motorcycleRider.otherSpendings([], [], [])).to.throw('Invalid Information!')
    });

    it("works with valid param", function () {
      expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.equal('You spend $600.00 for equipment and consumables!')
    });

    it("works with valid param", function () {
      expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!')
    });

  });
});
});
