import { createCalculator } from "./createCalculator";
import { expect } from "chai";

describe('Add Subtract', function () {
    let calc;

    beforeEach(function () {
        calc = createCalculator();
    })

    it('01. Start calculating from 0', function () {
        let value = calc.get();
        expect(value).to.be.equal(0);
    })
    it('02. Add test', function () {
        calc.add(2);
        calc.add(3);
        let value = calc.get();
        expect(value).to.be.equal(5);
    })
    it('03. Subtract test', function () {
        calc.subtract(3);
        calc.subtract(2);
        let value = calc.get();
        expect(value).to.be.equal(-5);
    })
    it('04. Add and subtract floating point numbers test', function () {
        calc.add(5.3);
        calc.subtract(1.1);
        expect(calc.get()).to.be.equal(5.3 - 1.1);
    })
    it('05. Double subtract & floating point numbers test', function () {
        calc.add(10);
        calc.subtract(7);
        calc.add('-2');
        calc.subtract(-1);
        expect(calc.get()).to.be.equal(2);
    })
    it('06. Add String input test', function () {
        calc.add('hello');
        expect(calc.get()).to.be.NaN;
    })
    it('07. Subtract String input test', function () {
        calc.subtract('hello');
        expect(calc.get()).to.be.NaN;
    })
})