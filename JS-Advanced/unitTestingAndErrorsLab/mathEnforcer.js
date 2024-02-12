let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

import { expect } from "chai";

describe('Math enforcer tests', function () {
    describe('Testing addFive functionality', function () {
        it('works with an argument 5 and returns a 10', function () {
            expect(mathEnforcer.addFive(5)).to.equal(10)
        })
        it('works with an argument floating-point number 5.5 and returns a 10.5', function () {
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5)
        })
        it('works with an argument negative number -1 and returns a 4', function () {
            expect(mathEnforcer.addFive(-1)).to.equal(4)
        })
        it('returns undefined if the argument is a string', function () {
            expect(mathEnforcer.addFive('test')).to.equal(undefined)
        })
        it('returns undefined if the argument is an array', function () {
            expect(mathEnforcer.addFive([])).to.equal(undefined)
        })
        it('returns undefined if the argument is a string that contains numbers', function () {
            expect(mathEnforcer.addFive("123")).to.equal(undefined)
        })
    })

    describe('Testing subtractTen functionality', function () {
        it('works with an argument 15 and returns a 5', function () {
            expect(mathEnforcer.subtractTen(15)).to.equal(5)
        })
        it('works with a negative argument -1 and returns -11', function () {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11)
        })
        it('works with an argument that is floating-point number 10.5 and returns a 0.5', function () {
            expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5)
        })
        it('returns undefined if the argument is a string', function () {
            expect(mathEnforcer.subtractTen('test')).to.equal(undefined)
        })
        it('returns undefined if the argument is an array', function () {
            expect(mathEnforcer.subtractTen([])).to.equal(undefined)
        })
        it('returns undefined if the argument is a string that contains numbers ', function () {
            expect(mathEnforcer.subtractTen('123')).to.equal(undefined)
        })
        it('returns undefined if the argument is a string', function () {
            expect(mathEnforcer.subtractTen('test')).to.equal(undefined)
        })
    })

    describe('Testing sum functionality', function () {
        it('returns undefined if the first argument is not a number', function () {
            expect(mathEnforcer.sum('test', 1)).to.equal(undefined)
        })
        it('returns undefined if the second argument is not a number', function () {
            expect(mathEnforcer.sum(1, 'test')).to.equal(undefined)
        })
        it('returns undefined if both arguments are not a number', function () {
            expect(mathEnforcer.sum('test', 'test')).to.equal(undefined)
        })
        it('returns 6 if both arguments are equal to 3', function () {
            expect(mathEnforcer.sum(3, 3)).to.equal(6)
        })
        it('returns the sum (6 and -1) if one of the arguments is a negative number', function () {
            expect(mathEnforcer.sum(6, -1)).to.equal(5)
        })
        it('returns the sum (3.5 and 1.5) if arguments are floating-point numbers', function () {
            expect(mathEnforcer.sum(3.5, 1.5)).to.equal(5)
        })
    })
})
