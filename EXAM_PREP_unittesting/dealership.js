let dealership = {
  newCarCost: function (oldCarModel, newCarPrice) {
    let discountForOldCar = {
      "Audi A4 B8": 15000,
      "Audi A6 4K": 20000,
      "Audi A8 D5": 25000,
      "Audi TT 8J": 14000,
    };

    if (discountForOldCar.hasOwnProperty(oldCarModel)) {
      let discount = discountForOldCar[oldCarModel];
      let finalPrice = newCarPrice - discount;
      return finalPrice;
    } else {
      return newCarPrice;
    }
  },

  carEquipment: function (extrasArr, indexArr) {
    let selectedExtras = [];
    indexArr.forEach((i) => {
      selectedExtras.push(extrasArr[i]);
    });

    return selectedExtras;
  },

  euroCategory: function (category) {
    if (category >= 4) {
      let price = this.newCarCost("Audi A4 B8", 30000);
      let total = price - price * 0.05;
      return `We have added 5% discount to the final price: ${total}.`;
    } else {
      return "Your euro category is low, so there is no discount from the final price!";
    }
  },
};

import { expect } from "chai";

describe("testing dealership functionality", function () {
  describe("testing •	newCarCost(oldCarModel, newCarPrice)", function () {
    it("works with returned car", function () {
      expect(dealership.newCarCost("Audi A4 B8", 20000)).to.equal(5000);
    });

    it("works with not returned car", function () {
      expect(dealership.newCarCost("Audi A6 4K", 30000)).to.equal(10000);
    });

    it("works with not returned car", function () {
      expect(dealership.newCarCost("Audi A8 D5", 30000)).to.equal(5000);
    });

    it("works with not returned car", function () {
      expect(dealership.newCarCost("Audi TT 8J", 30000)).to.equal(16000);
    });

    it("works with not returned car", function () {
      expect(dealership.newCarCost("test", 20000)).to.equal(20000);
    });
  });

  describe("testing •	carEquipment(extrasArr, indexArr)", function () {
    it("works with valid params", function () {
      expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0])).to.deep.equal(['heated seats']);
    });

    it("works with valid params", function () {
        expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0,3])).to.deep.equal(['heated seats','navigation']);
      });
  });

  describe("testing •	euroCategory(category)", function () {
    it("works with category over 4", function () {
      expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.');
    });

    it("works with category equal to 4", function () {
        expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
      });

      it("works with category lower than 4", function () {
        expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
      });
  });
});
