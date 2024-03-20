const findNewApartment = {
    isGoodLocation(city, nearPublicTransportation) {
      if (typeof city !== "string" || typeof nearPublicTransportation !== "boolean"){
          throw new Error("Invalid input!");
      }
      if (city !== "Sofia" && city !== "Plovdiv" && city !== "Varna") {
          return "This location is not suitable for you.";
      }else {
          if (nearPublicTransportation == true) {
              return "You can go on home tour!";
          }
          else {
              return "There is no public transport in area.";
          }
      }
    },
    isLargeEnough(apartments, minimalSquareMeters) {
      let resultArr = [];
      if (!Array.isArray(apartments) || typeof minimalSquareMeters !== "number" || apartments.length == 0) {
        throw new Error("Invalid input!");
      }
      apartments.map((apartment) => {
        if (apartment >= minimalSquareMeters) {
          resultArr.push(apartment);
        }
      });
      return resultArr.join(', ');
    },
    isItAffordable(price, budget) {
      if (typeof price !== "number" || typeof budget !== "number"
       || price <= 0 || budget <= 0) {
        throw new Error("Invalid input!");
      }
      let result = budget - price;
      if (result < 0) {
        return "You don't have enough money for this house!";
      } else {
        return "You can afford this home!";
      }
    },
  };

  import { expect } from "chai";

  describe("Testing findNewApartment functionality", function() {
    describe("testing •	isGoodLocation (city, nearPublicTransportation) ", function() {

        it("throws with both params invalid", function() {
            expect(() => findNewApartment.isGoodLocation(1, 1)).to.throw('Invalid input!')
        });

        it("returns not suitable with invalid location", function() {
            expect(findNewApartment.isGoodLocation("test", false)).to.equal('This location is not suitable for you.')
        });

        it("returns no public transport with a false", function() {
            expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal('There is no public transport in area.')
        });

        it("returns appropriately with valid city and true as second param", function() {
            expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal('You can go on home tour!')
        });
        
     });

     describe("testing •	isLargeEnough (apartments, minimalSquareMeters)", function() {

        it("throws with both params invalid", function() {
            expect(() => findNewApartment.isLargeEnough(undefined, undefined)).to.throw('Invalid input!')
        });

        it("throws with empty array", function() {
            expect(() => findNewApartment.isLargeEnough([], 200)).to.throw('Invalid input!')
        });

        it("throws with empty array", function() {
            expect(findNewApartment.isLargeEnough([20,20,20], 10)).to.deep.equal("20, 20, 20")
        });
     });

     describe("testing •	isItAffordable (price, budget)", function() {

        it("throws with both params invalid", function() {
            expect(() => findNewApartment.isItAffordable(undefined, undefined)).to.throw('Invalid input!')
        });

        it("throws with both params less than 0", function() {
            expect(() => findNewApartment.isItAffordable(-5, -5)).to.throw('Invalid input!')
        });

        it("throws with both params equal to 0", function() {
            expect(() => findNewApartment.isItAffordable(0, 0)).to.throw('Invalid input!')
        });

        it("throws with both params equal to 0", function() {
            expect(findNewApartment.isItAffordable(500000, 200000)).to.equal("You don't have enough money for this house!")
        });

        it("throws with both params equal to 0", function() {
            expect(findNewApartment.isItAffordable(200000, 500000)).to.equal("You can afford this home!")
        });
     });

     
});
