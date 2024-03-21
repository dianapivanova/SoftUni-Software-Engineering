import { expect } from "chai";

const flowerShop = {
    calcPriceOfFlowers(flower, price, quantity) {
         if (typeof flower != 'string' || !Number.isInteger(price) || !Number.isInteger(quantity)) {
             throw new Error('Invalid input!');
         } else {
             let result = price * quantity;
             return `You need $${result.toFixed(2)} to buy ${flower}!`;
       }
   },
    checkFlowersAvailable(flower, gardenArr) {
       if (gardenArr.indexOf(flower) >= 0) {
           return `The ${flower} are available!`;
       } else {
           return `The ${flower} are sold! You need to purchase more!`;
       }
   },
    sellFlowers(gardenArr, space) {
       let shop = [];
       let i = 0;
       if (!Array.isArray(gardenArr) || !Number.isInteger(space) || space < 0 || space >= gardenArr.length) {
           throw new Error('Invalid input!');
       } else {
           while (gardenArr.length > i) {
               if (i != space) {
                   shop.push(gardenArr[i]);
               }
               i++
           }
       }
       return shop.join(' / ');
   }
}

import { expect } from "chai";

describe("testing flowersShop functionality", function() {
    describe("testing •	calcPriceOfFlowers(flower, price, quantity)", function() {
        it("throws an error with invalid params", function() {
            expect(() => flowerShop.calcPriceOfFlowers(undefined, undefined, undefined)).to.throw('Invalid input!')
        });

        it("works with valid params", function() {
            expect(flowerShop.calcPriceOfFlowers('Gandja', 10, 10)).to.equal('You need $100.00 to buy Gandja!')
        });
     });

     describe("testing • checkFlowersAvailable(flower, gardenArr) ", function() {
        it("works with valid params - 1", function() {
            expect(flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"])).to.equal('The Rose are available!')
        });

        it("works with valid params - 2", function() {
            expect(flowerShop.checkFlowersAvailable("Rose", ["test", "Lily", "Orchid"])).to.equal('The Rose are sold! You need to purchase more!')
        });
     });

     describe("testing • sellFlowers(gardenArr, space)", function() {
        it("throws an error with invalid params", function() {
            expect(() => flowerShop.sellFlowers(undefined, undefined)).to.throw('Invalid input!')
        });

        it("throws an error with invalid params - index", function() {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).to.throw('Invalid input!')
        });

        it("throws an error with invalid params - index", function() {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)).to.throw('Invalid input!')
        });

        it("works with valid params", function() {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal('Rose / Lily')
        });

     });
     
});
