const weddingDay = {
  pickVenue(capacity, pricePerGuest, location) {
    if (
      typeof capacity !== "number" ||
      typeof pricePerGuest !== "number" ||
      typeof location !== "string" ||
      location === ""
    ) {
      throw new Error("Invalid Information!");
    }
    if (location == "Varna") {
      if (capacity >= 150 && pricePerGuest <= 120) {
        return `This venue meets the requirements, with capacity of ${capacity} guests and ${pricePerGuest}$ cover.`;
      } else {
        return `This venue does not meet your requirements!`;
      }
    } else {
      throw new Error(`The location of this venue is not in the correct area!`);
    }
  },

  otherSpendings(weddingDecoration, photography, discount) {
    if (
      !Array.isArray(weddingDecoration) ||
      !Array.isArray(photography) ||
      typeof discount !== "boolean"
    ) {
      throw new Error("Invalid Information!");
    }
    let totalPrice = 0;

    weddingDecoration.forEach((decoration) => {
      if (decoration === "flowers") {
        totalPrice += 500;
      } else if (decoration === "Fabric drapes and curtains") {
        totalPrice += 400;
      }
    });

    photography.forEach((service) => {
      if (service === "pictures") {
        totalPrice += 700;
      } else if (service === "video") {
        totalPrice += 1300;
      }
    });
    if (discount) {
      totalPrice = totalPrice * 0.85;
      return `You spend ${totalPrice}$ for wedding decoration and photography with 15% discount!`;
    } else {
      return `You spend ${totalPrice}$ for wedding decoration and photography!`;
    }
  },
  tableDistribution(guests, tables) {
    if (
      typeof guests !== "number" ||
      guests <= 0 ||
      typeof tables !== "number" ||
      tables <= 0
    ) {
      throw new Error("Invalid Information!");
    }
    let peopleOnTable = Math.round(guests / tables);

    if (peopleOnTable < 6) {
      return `There is only ${peopleOnTable} people on every table, you can join some tables.`;
    } else {
      return `You have ${tables} tables with ${peopleOnTable} guests on table.`;
    }
  },
};

import { expect } from "chai";

describe("testing weddingDay functionality", function () {
  describe("testing PickVenue (capacity, pricePerGuest, location)", function () {
    it("throws an error with invalid params", function () {
      expect(() => weddingDay.pickVenue([], [], [])).to.throw("Invalid Information!");
    });
    it("throws an error with invalid params", function () {
      expect(() => weddingDay.pickVenue({}, {}, {})).to.throw("Invalid Information!");
    });
    it("throws an error with invalid params", function () {
      expect(() => weddingDay.pickVenue('test', 'test', 1)).to.throw("Invalid Information!");
    });
    it("throws an error with invalid params", function () {
      expect(() => weddingDay.pickVenue(10, 10, '')).to.throw("Invalid Information!");
    });
    it("throws an error with location not Varna", function () {
      expect(() => weddingDay.pickVenue(10, 10, 'Sofia')).to.throw("The location of this venue is not in the correct area!");
    });
    it("returns properly with valid params", function () {
      expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal("This venue meets the requirements, with capacity of 150 guests and 120$ cover.");
    });
    it("returns properly with valid params", function () {
      expect(weddingDay.pickVenue(149, 121, 'Varna')).to.equal("This venue does not meet your requirements!");
    });
  });

  describe("testing otherSpendings (weddingDecoration, photography, discount)", function () {
    it("throws an error with invalid params", function () {
      expect(() => weddingDay.otherSpendings(null, null, null)).to.throw("Invalid Information!");
    });

    it("throws an error with invalid params", function () {
      expect(() => weddingDay.otherSpendings({}, {}, {})).to.throw("Invalid Information!");
    });

    it("throws an error with invalid params", function () {
      expect(() => weddingDay.otherSpendings('test', 'test', [])).to.throw("Invalid Information!");
    });

    it("returns properly with valid params and NO discount", function () {
      expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], false)).to.equal("You spend 2900$ for wedding decoration and photography!");
    });

    it("returns properly with valid params and discount", function () {
      expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], true)).to.equal("You spend 2465$ for wedding decoration and photography with 15% discount!");
    });

  describe("testing tableDistribution (guests, tables)", function () {
    it("throws an error with invalid params", function () {
      expect(() => weddingDay.tableDistribution([], [])).to.throw("Invalid Information!");
    });
    it("throws an error with invalid params", function () {
      expect(() => weddingDay.tableDistribution({}, {})).to.throw("Invalid Information!");
    });
    it("throws an error with invalid params", function () {
      expect(() => weddingDay.tableDistribution('test', 'test')).to.throw("Invalid Information!");
    });
    it("throws an error with invalid params", function () {
      expect(() => weddingDay.tableDistribution(-1, -1)).to.throw("Invalid Information!");
    });
    it("returns properly with valid params and discount", function () {
      expect(weddingDay.tableDistribution(100, 10)).to.equal("You have 10 tables with 10 guests on table.");
    });
    it("returns properly with valid params and discount", function () {
      expect(weddingDay.tableDistribution(50, 10)).to.equal("There is only 5 people on every table, you can join some tables.");
    });
});
});
});
