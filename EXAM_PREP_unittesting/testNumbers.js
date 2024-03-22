const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
             sum = (num1 + num2).toFixed(2);
             return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

import { expect } from "chai";

describe("testing testNumbers functionality", function() {
    describe("testing •	sumNumber(num1, num2)", function() {
        it("returns undefined with 1st param not a number", function() {
            expect(testNumbers.sumNumbers(undefined, 1)).to.equal(undefined)
        });

        it("returns undefined with 2nd param not a number", function() {
            expect(testNumbers.sumNumbers(1, undefined)).to.equal(undefined)
        });

        it("returns undefined with both parameters not a number", function() {
            expect(testNumbers.sumNumbers(undefined, undefined)).to.equal(undefined)
        });

        it("returns undefined with both parameters not a number", function() {
            expect(testNumbers.sumNumbers('test')).to.equal(undefined)
        });

        it("returns undefined with both parameters not a number", function() {
            expect(testNumbers.sumNumbers()).to.equal(undefined)
        });

        it("returns properly with positive numbers", function() {
            expect(testNumbers.sumNumbers(1, 1)).to.deep.equal("2.00")
        });

        it("returns properly with negative numbers", function() {
            expect(testNumbers.sumNumbers(-1, -1)).to.equal("-2.00")
        });

        it("returns properly with non-integer numbers", function() {
            expect(testNumbers.sumNumbers(2.22, 2.22)).to.equal('4.44')
        });
     });

     describe("testing •  numberChecker(input) ", function() {
        it("throws with non-number argument", function() {
            expect(() => testNumbers.numberChecker(undefined)).to.throw('The input is not a number!')
        });

        it("throws with missing argument", function() {
            expect(() => testNumbers.numberChecker()).to.throw('The input is not a number!')
        });

        it("returns properly with string as a num", function() {
            expect(testNumbers.numberChecker("5")).to.equal('The number is odd!')
        });

        it("returns properly with string as a num", function() {
            expect(testNumbers.numberChecker("6")).to.equal('The number is even!')
        });

        it("returns properly with odd num", function() {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!')
        });

        it("returns properly with odd num", function() {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!')
        });

        it("returns properly with odd num", function() {
            expect(testNumbers.numberChecker(-2)).to.equal('The number is even!')
        });

        it("returns properly with odd num", function() {
            expect(testNumbers.numberChecker(-1)).to.equal('The number is odd!')
        });

     });

     describe("testing •  averageSumArray(arr)", function() {
        it("returns properly with odd num", function() {
            expect(testNumbers.averageSumArray([1,1,1,1])).to.equal(1)
        });

        it("returns properly with odd num", function() {
            expect(testNumbers.averageSumArray([2.5, 2.5])).to.equal(2.5)
        });

        it("returns properly with odd num", function() {
            expect(testNumbers.averageSumArray([])).to.deep.equal(NaN)
        });
     });
     
});
