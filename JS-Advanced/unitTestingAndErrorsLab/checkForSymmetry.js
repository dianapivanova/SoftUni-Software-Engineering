import { expect } from "chai"
import { isSymmetric } from "./isSymmetric.js"

describe('Suite', function () {
    it('returns false if the argument is a num', function () {
        let arr = 1
        expect(isSymmetric(arr)).to.be.false;
    });

    it('returns false if the argument is an object', function () {
        let arr = { name: 'Diana' }
        expect(isSymmetric(arr)).to.be.false;
    });

    it('returns false if the argument is a null', function () {
        let arr = null
        expect(isSymmetric(arr)).to.be.false;
    });

    it('returns false if the argument is an undefined', function () {
        let arr = undefined;
        expect(isSymmetric(arr)).to.be.false;
    });

    it('returns false if the argument is a function', function () {
        let arr = function () { };
        expect(isSymmetric(arr)).to.be.false;
    });

    it('returns false if the argument is a boolean', function () {
        let arr = true
        expect(isSymmetric(arr)).to.be.false;
    });

    it('returns false if the argument is a string', function () {
        let arr = 'string'
        expect(isSymmetric(arr)).to.be.false;
    })

    it('works if the arrays are symmetric and contain odd number of elements', function () {
        expect(isSymmetric([1, 2, 1])).to.be.true
    });

    it('works if the arrays are symmetric and contain even number of elements', function () {
        expect(isSymmetric([10, 20, 20, 10])).to.be.true
    })

    it('returns false if the arrays are not symmetric and contain odd number of elements', function () {
        expect(isSymmetric([1, 2, -1])).to.be.false
    })

    it('returns false if the arrays are not symmetric and contain even number of elements', function () {
        expect(isSymmetric([10, 20, 10, -1])).to.be.false
    })

    it('returns true if the arrays are symmetric and contain elements with mixed type of data', function () {
        expect(isSymmetric([10, 'test', 'test', 10])).to.be.true
    })

    it('returns false if the arrays are not symmetric and contain elements with mixed type of data', function () {
        expect(isSymmetric(['test', 20, 10, -1])).to.be.false
    })

    it('returns false on ["2", 2]', function () {
        expect(isSymmetric(['2', 2])).to.be.false
    })

})