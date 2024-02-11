import { sum } from './sum.js'
import { expect } from "chai"


describe("Suite", function () {

    it('returns 0 for empty array', function () {
        let arr = [];
        expect(sum(arr)).to.equal(0)
    })

    it('works with number array', function () {
        let arr = [1, 1, 1]
        expect(sum(arr)).to.equal(3)
    })

    it('throw an error for non-array param', function () {
        expect(() => sum(1)).to.throw()
    })

    it('returns 1 for arr with 1 element', function () {
        expect(sum([1])).to.equal(1)
    })
})