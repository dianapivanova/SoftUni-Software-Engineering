function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

import { expect } from "chai";

describe('Suite tests', function () {
    it('returns undefined if the first argument is not a string but a num', function () {
        let string = 1;
        let index = 1;
        expect(lookupChar(string, index)).to.equal(undefined)
    })

    it('returns undefined if the first argument is not a string but an array', function () {
        let string = [];
        let index = 1;
        expect(lookupChar(string, index)).to.equal(undefined)
    })

    it('returns undefined if the first argument is not a string but an array', function () {
        let string = [];
        let index = 1;
        expect(lookupChar(string, index)).to.equal(undefined)
    })

    it('returns undefined if the seecond argument is not a number but a string', function () {
        let string = 'test';
        let index = 'test';
        expect(lookupChar(string, index)).to.equal(undefined)
    })

    it('returns undefined if the seecond argument is not a number but a string representing a number', function () {
        let string = 'test';
        let index = '1';
        expect(lookupChar(string, index)).to.equal(undefined)
    })

    it('returns "Incorrect index" if the index is a negative num', function () {
        let string = 'test';
        let index = -1;
        expect(lookupChar(string, index)).to.equal("Incorrect index")
    })

    it('returns "Incorrect index" if the index is a floating-point num', function () {
        let string = 'test';
        let index = 1.5;
        expect(lookupChar(string, index)).to.equal(undefined)
    })

    it('returns "Incorrect index" if the index is bigger than the string length', function () {
        let string = 'test';
        let index = 5;
        expect(lookupChar(string, index)).to.equal("Incorrect index")
    })

    it('returns "Incorrect index" if the index is equal to the string length', function () {
        let string = 'test';
        let index = 4;
        expect(lookupChar(string, index)).to.equal("Incorrect index")
    })

    it('works if the string and the index are with the correct parameters and the index takes the last char from the string', function () {
        let string = 'test';
        let index = 3;
        expect(lookupChar(string, index)).to.equal("t")
    })

    it('works if the string and the index are with the correct parameters and the index takes the first char from the string', function () {
        let string = 'test';
        let index = 0;
        expect(lookupChar(string, index)).to.equal("t")
    })

    it('works if the string and the index are with the correct parameters and the index takes a middle char from the string', function () {
        let string = 'This is a test';
        let index = 2;
        expect(lookupChar(string, index)).to.equal("i")
    })

})