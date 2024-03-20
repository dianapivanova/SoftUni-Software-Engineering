import { expect } from "chai";

const carService = {
    isItExpensive(issue) {
      if (issue === "Engine" || issue === "Transmission") {
        return `The issue with the car is more severe and it will cost more money`;
      } else {
        return `The overall price will be a bit cheaper`;
      }
    },
    discount(numberOfParts, totalPrice) {
      if (
        typeof numberOfParts !== "number" ||
        typeof totalPrice !== "number"
      ) {
        throw new Error("Invalid input");
      }
  
      let discountPercentage = 0;
  
      if (numberOfParts > 2 && numberOfParts <= 7) {
        discountPercentage = 15;
      } else if (numberOfParts > 7) {
        discountPercentage = 30;
      }
  
      let result = (discountPercentage / 100) * totalPrice;
  
      if (numberOfParts <= 2) {
        return "You cannot apply a discount";
      } else {
        return `Discount applied! You saved ${result}$`;
      }
    },
    partsToBuy(partsCatalog, neededParts) {
      let totalSum = 0;
  
      if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
        throw new Error("Invalid input");
      }
      neededParts.forEach((neededPart) => {
        partsCatalog.map((obj) => {
          if (obj.part === neededPart) {
            totalSum += obj.price;
          }
        });
      });
  
      return totalSum;
    },
  };

  describe("testing carService", function() {
    describe("isItExpensive (issue)", function() {

        it("works with argument Engine", function() {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money')
        });

        it("works with argument Transmission", function() {
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money')
        });

        it("works with argument anything else", function() {
            expect(carService.isItExpensive('test')).to.equal('The overall price will be a bit cheaper')
        });
     });

     describe("discount (numberOfParts, totalPrice)", function() {

        it("throws an error with params not numbers", function() {
            expect(() => carService.discount(undefined, undefined)).to.throw('Invalid input')
        });

        it("returns properly with elements less than 2", function() {
            expect(carService.discount(1, 10)).to.equal('You cannot apply a discount')
        });

        it("returns properly with elements equal to 2", function() {
            expect(carService.discount(2, 10)).to.equal('You cannot apply a discount')
        });

        it("returns properly with elements between 2 and 7", function() {
            expect(carService.discount(5, 1000)).to.equal('Discount applied! You saved 150$')
        });

        it("returns properly with elements between 2 and 7", function() {
            expect(carService.discount(7, 1000)).to.equal('Discount applied! You saved 150$')
        });

        it("returns properly with elements between 2 and 7", function() {
            expect(carService.discount(10, 1000)).to.equal('Discount applied! You saved 300$')
        });


     });

     describe("partsToBuy (partsCatalog, neededParts)", function() {

        it("throws an error with params not numbers", function() {
            expect(() => carService.partsToBuy(undefined, undefined)).to.throw('Invalid input')
        });

        it("returns 0 if parts catalog is empty", function() {
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0)
        });

        it("returns price if both params are valid and not empty", function() {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).to.equal(145)
        });

     });
     
});
