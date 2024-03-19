const weddingDay = {
    pickVenue(capacity,pricePerGuest,location) {
        if (typeof capacity !== 'number' || typeof pricePerGuest !== 'number' || typeof location !== 'string' || location === '') {
            throw new Error("Invalid Information!")
          };
            if (location == "Varna") {

                if (capacity >= 150 && pricePerGuest <= 120) {
                    return `This venue meets the requirements, with capacity of ${capacity} guests and ${pricePerGuest}$ cover.`;
                } else {
                    return `This venue does not meet your requirements!`;
                }
            }else {
                  throw new Error(`The location of this venue is not in the correct area!`);
            };
    },

    otherSpendings(weddingDecoration, photography, discount) {
        if (!Array.isArray(weddingDecoration) || !Array.isArray(photography) || typeof discount !== "boolean") {
          throw new Error("Invalid Information!");
        }
        let totalPrice = 0;
    
        weddingDecoration.forEach((decoration) => {
          if (decoration === "flowers") {
            totalPrice += 500
          } else if (decoration === "Fabric drapes and curtains") {
            totalPrice += 400
          }
        });
    
        photography.forEach((service) => {
          if (service === "pictures") {
            totalPrice += 700
          } else if (service === "video") {
            totalPrice += 1300
          }
        });
        if (discount) {
          totalPrice = totalPrice * 0.85;
          return `You spend ${totalPrice}$ for wedding decoration and photography with 15% discount!`
        } else {
          return `You spend ${totalPrice}$ for wedding decoration and photography!`
        }
    
      }
    ,
    tableDistribution(guests, tables) {
        if (typeof guests !== "number" || guests <= 0 ||
            typeof tables !== "number" || tables <= 0) {
            throw new Error("Invalid Information!");
        }
        let peopleOnTable = Math.round(guests / tables);

        if(peopleOnTable < 6) {
            return `There is only ${peopleOnTable} people on every table, you can join some tables.`
        }else{
            return `You have ${tables} tables with ${peopleOnTable} guests on table.`
        }
    }
}
import { expect } from "chai";

describe("testing weddingDay functionality", function () {
    describe("testing •	PickVenue (capacity, pricePerGuest, location) functionality", function () {

      it("throws an error with invalid parameters", function () {
        expect(() => weddingDay.pickVenue("test","test", undefined)).to.throw(
          "Invalid Information!"
        );
      });

      it("throws an error with empty string", function () {
        expect(() => weddingDay.pickVenue(100,100, "")).to.throw(
          "Invalid Information!"
        );
      });
  
      it("throws an error with location not Varna", function () {
        expect(() => weddingDay.pickVenue(100,100, "Sofia")).to.throw(
          "The location of this venue is not in the correct area!"
        );
      });

      it("works with proper params - return that venue does not meet capacity properly", function () {
        expect(weddingDay.pickVenue(100,200, "Varna")).to.equal(
          "This venue does not meet your requirements!"
        );
      });

      it("works with proper params", function () {
        expect(weddingDay.pickVenue(200,100, "Varna")).to.equal(
          "This venue meets the requirements, with capacity of 200 guests and 100$ cover."
        );
      });
    });

    describe("testing •	otherSpendings (weddingDecoration, photography, discount) functionality", function () {

        it("throws an error with invalid parameters", function () {
          expect(() => weddingDay.otherSpendings("test","test", undefined)).to.throw(
            "Invalid Information!"
          );
        });
  
        it("works with proper params and discount", function () {
          expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], true)).to.equal(
            "You spend 2465$ for wedding decoration and photography with 15% discount!"
          );
        });

        it("works with proper params and no discount", function () {
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], false)).to.equal(
              "You spend 2900$ for wedding decoration and photography!"
            );
          });
  
      });

      describe("testing •	tableDistribution (guests, tables) functionality", function () {

        it("throws an error with invalid parameters", function () {
          expect(() => weddingDay.tableDistribution("test","test")).to.throw(
            "Invalid Information!"
          );
        });
  
        it("works with proper params - 1", function () {
          expect(weddingDay.tableDistribution(100, 10)).to.equal(
            "You have 10 tables with 10 guests on table."
          );
        });

        it("works with proper params - 2", function () {
            expect(weddingDay.tableDistribution(50, 10)).to.equal(
              "There is only 5 people on every table, you can join some tables."
            );
          });;
  
      });
});