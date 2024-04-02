const findNewApartment = {
  isGoodLocation(city, nearPublicTransportation) {
    if (
      typeof city !== "string" ||
      typeof nearPublicTransportation !== "boolean"
    ) {
      throw new Error("Invalid input!");
    }
    if (city !== "Sofia" && city !== "Plovdiv" && city !== "Varna") {
      return "This location is not suitable for you.";
    } else {
      if (nearPublicTransportation == true) {
        return "You can go on home tour!";
      } else {
        return "There is no public transport in area.";
      }
    }
  },
  isLargeEnough(apartments, minimalSquareMeters) {
    let resultArr = [];
    if (
      !Array.isArray(apartments) ||
      typeof minimalSquareMeters !== "number" ||
      apartments.length == 0
    ) {
      throw new Error("Invalid input!");
    }
    apartments.map((apartment) => {
      if (apartment >= minimalSquareMeters) {
        resultArr.push(apartment);
      }
    });
    return resultArr.join(", ");
  },
  isItAffordable(price, budget) {
    if (
      typeof price !== "number" ||
      typeof budget !== "number" ||
      price <= 0 ||
      budget <= 0
    ) {
      throw new Error("Invalid input!");
    }
    let result = budget - price;
    if (result < 0) {
      return "You don't have enough money for this house!";
    } else {
      return "You can afford this home!";
    }
  },
};

import { expect } from "chai";

describe("testing findNewApartment functionality", function () {
  describe("testing •isGoodLocation (city, nearPublicTransportation)", function () {
    it("throws with invalid params", function () {
      expect(() => findNewApartment.isGoodLocation({}, {})).to.throw(
        "Invalid input!"
      );
    });

    it("throws with invalid params", function () {
      expect(() => findNewApartment.isGoodLocation([], [])).to.throw(
        "Invalid input!"
      );
    });

    it("throws with invalid params", function () {
      expect(() => findNewApartment.isGoodLocation(false, "test")).to.throw(
        "Invalid input!"
      );
    });

    it("returns with the city diff from S, P, V", function () {
      expect(findNewApartment.isGoodLocation("test", true)).to.equal(
        "This location is not suitable for you."
      );
    });

    it("returns if the second param is false", function () {
      expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal(
        "There is no public transport in area."
      );
    });

    it("returns if voth params are valid", function () {
      expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal(
        "You can go on home tour!"
      );
    });
  });

  describe("testing •isLargeEnough (apartments, minimalSquareMeters)", function () {
    
    it("throws with an empty array", function () {
      expect(() => findNewApartment.isLargeEnough([], 50)).to.throw(
        "Invalid input!"
      );
    });

    it("throws with second param not a num", function () {
      expect(() => findNewApartment.isLargeEnough(['test', 'test', 'test'], 'test')).to.throw(
        "Invalid input!"
      );
    });

    it("throws with first param not an array", function () {
      expect(() => findNewApartment.isLargeEnough({}, 'test')).to.throw(
        "Invalid input!"
      );
    });

    it("throws with invalid params", function () {
      expect(() => findNewApartment.isLargeEnough({}, {})).to.throw(
        "Invalid input!"
      );
    });

    it("throws with invalid params", function () {
      expect(() => findNewApartment.isLargeEnough(null, null)).to.throw(
        "Invalid input!"
      );
    });

    it("works with valid params", function () {
      expect(findNewApartment.isLargeEnough([40,50,60], 50)).to.deep.equal(
        '50, 60'
      );
    });

    it("works with valid params", function () {
      expect(findNewApartment.isLargeEnough([40,50,60], 40)).to.deep.equal(
        '40, 50, 60'
      );
    });

  });

  describe("testing •isItAffordable (price, budget)", function () {
    it("throws with first param not an array", function () {
      expect(() => findNewApartment.isItAffordable({}, {})).to.throw(
        "Invalid input!"
      );
    });

    it("throws with first param not an array", function () {
      expect(() => findNewApartment.isItAffordable([], [])).to.throw(
        "Invalid input!"
      );
    });

    it("throws with first param not an array", function () {
      expect(() => findNewApartment.isItAffordable('test', 'test')).to.throw(
        "Invalid input!"
      );
    });

    it("returns properly with valid params", function () {
      expect(findNewApartment.isItAffordable(100000, 100000)).to.equal(
        "You can afford this home!"
      );
    });

    it("returns properly with valid params", function () {
      expect(findNewApartment.isItAffordable(100000, 50000)).to.equal(
        "You don't have enough money for this house!"
      );
    });
  
});
});
