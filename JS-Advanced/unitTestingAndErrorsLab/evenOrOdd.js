function evenOrOdd(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


import { expect } from "chai";

describe('Suite tests to test for invalid param', function () {

    it('returns undefined if the agrument is not a string but a Number', function () {
        let string = 1
        expect(evenOrOdd(string)).to.be.undefined
    })

    it('returns undefined if the agrument is not a string but an array', function () {
        let string = [1, 2, 3]
        expect(evenOrOdd(string)).to.be.undefined
    })

    it('works if the string has an odd num of chars', function () {
        let string = 'abc'
        expect(evenOrOdd(string)).to.equal('odd')
    })

    it('works if the string has an even num of chars', function () {
        let string = 'abcd'
        expect(evenOrOdd(string)).to.equal('even')
    })

    it('works if the string is a sentence with letters and whitespaces', function () {
        let string = 'This is a test'
        expect(evenOrOdd(string)).to.equal('even')
    })
})


