const numberOperations = {
  powNumber: function (num) {
    return num * num;
  },
  numberChecker: function (input) {
    input = Number(input);

    if (isNaN(input)) {
      throw new Error("The input is not a number!");
    }

    if (input < 100) {
      return "The number is lower than 100!";
    } else {
      return "The number is greater or equal to 100!";
    }
  },
  sumArrays: function (array1, array2) {
    const longerArr = array1.length > array2.length ? array1 : array2;
    const rounds =
      array1.length < array2.length ? array1.length : array2.length;

    const resultArr = [];

    for (let i = 0; i < rounds; i++) {
      resultArr.push(array1[i] + array2[i]);
    }

    resultArr.push(...longerArr.slice(rounds));

    return resultArr;
  },
};

import { expect } from "chai";

describe("testing numberOperations", function () {
  describe("testing •powNumber(num)", function () {
    it("works with an integer", function () {
      expect(numberOperations.powNumber(2)).to.equal(4);
    });

    it("works with an integer", function () {
      expect(numberOperations.powNumber(-2)).to.equal(4);
    });

    it("works with a negative integer", function () {
      expect(numberOperations.powNumber(1)).to.equal(1);
    });

    it("works with a negative integer", function () {
      expect(numberOperations.powNumber(0)).to.equal(0);
    });

    it("works with a non-integer", function () {
      expect(numberOperations.powNumber(2.5)).to.equal(6.25);
    });
  });

  describe("testing •numberChecker(input)", function () {
    it("returns properly with a number lower to 100", function () {
      expect(numberOperations.numberChecker(99)).to.equal(
        "The number is lower than 100!"
      );
    });

    it("returns properly with a string that is number lower to 100", function () {
      expect(numberOperations.numberChecker("99")).to.equal(
        "The number is lower than 100!"
      );
    });

    it("returns properly with a number equal to 100", function () {
      expect(numberOperations.numberChecker(100)).to.equal(
        "The number is greater or equal to 100!"
      );
    });

    it("returns properly with a number over 100", function () {
      expect(numberOperations.numberChecker(101)).to.equal(
        "The number is greater or equal to 100!"
      );
    });

    it("throws with NaN", function () {
      expect(() => numberOperations.numberChecker("test")).to.throw(
        "The input is not a number!"
      );
    });

    it("throws with NaN", function () {
      expect(() => numberOperations.numberChecker()).to.throw(
        "The input is not a number!"
      );
    });
  });

  describe("testing •sumArrays(array1, array2)", function () {
    it("returns properly with empty arrays", function () {
      expect(numberOperations.sumArrays([], [])).to.deep.equal([]);
    });

    it("returns properly with non-empty arrays", function () {
      expect(numberOperations.sumArrays([1, 1, 1], [1, 2, 3])).to.deep.equal([
        2, 3, 4,
      ]);
    });

    it("returns properly with non-empty arrays", function () {
      expect(
        numberOperations.sumArrays([1, 1, 1, 1, 1], [1, 2, 3])
      ).to.deep.equal([2, 3, 4, 1, 1]);
    });

    it("returns properly with non-empty arrays", function () {
        expect(
          numberOperations.sumArrays([1, 1, 1], [1, 2, 3,1,1])
        ).to.deep.equal([2, 3, 4, 1, 1]);
      });
  });
});
