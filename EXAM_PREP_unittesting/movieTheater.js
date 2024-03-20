const movieTheater = {
    ageRestrictions(movieRating) {
      switch (movieRating) {
        case "G":
          return "All ages admitted to watch the movie";
        case "PG":
          return "Parental guidance suggested! Some material may not be suitable for pre-teenagers";
        case "R":
          return "Restricted! Under 17 requires accompanying parent or adult guardian";
        case "NC-17":
          return "No one under 17 admitted to watch the movie";
        default:
          return "There are no age restrictions for this movie";
      }
    },
    moneySpent(tickets, food, drinks) {
      if (
        typeof tickets !== "number" ||
        !Array.isArray(food) ||
        !Array.isArray(drinks)
      ) {
        throw new Error("Invalid input");
      }
  
      let bill = 0;
  
      bill += tickets * 15;
  
      food.forEach((element) => {
        switch (element) {
          case "Nachos":
            bill += 6;
            break;
          case "Popcorn":
            bill += 4.5;
            break;
        }
      });
  
      drinks.forEach((element) => {
        switch (element) {
          case "Soda":
            bill += 2.5;
            break;
          case "Water":
            bill += 1.5;
            break;
        }
      });
  
      if (bill > 50) {
        bill -= bill * 0.2;
        return `The total cost for the purchase with applied discount is ${bill.toFixed(
          2
        )}`;
      } else {
        return `The total cost for the purchase is ${bill.toFixed(2)}`;
      }
    },
    reservation(rowsArray, neededSeatsCount) {
      if (!Array.isArray(rowsArray) || typeof neededSeatsCount !== "number") {
        throw new Error("Invalid input");
      }
  
      let availableRows = [];
      rowsArray.forEach((row) => {
        if (row.freeSeats >= neededSeatsCount) {
          availableRows.push(row.rowNumber);
        }
      });
  
      return Math.max(...availableRows);
    },
  };
  
  import { expect } from "chai";

  describe("testing movieTheater functionaity", function() {
    describe("testing ageRestrictions (movieRating)", function() {

        it("works with category 'G'", function() {
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie')
        });

        it("works with category 'PG'", function() {
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers')
        });

        it("works with category 'R'", function() {
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian')
        });

        it("works with category 'NC-17'", function() {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie')
        });

        it("works with category everythin else", function() {
            expect(movieTheater.ageRestrictions('test')).to.equal('There are no age restrictions for this movie');
        });
     });

     describe("testing moneySpent (tickets, food, drinks)", function() {

        it("throws with all params invalid", function() {
            expect(() => movieTheater.moneySpent('test', 'test', 'test')).to.throw("Invalid input");
        });

        it("returns properly with discount", function() {
            expect(movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal("The total cost for the purchase is 29.50");
        });

        it("returns properly with no discount", function() {
            expect(movieTheater.moneySpent(10, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal("The total cost for the purchase with applied discount is 131.60");
        });
     });

     describe("testing reservation (rowsArray, neededSeatsCount)", function() {

        it("throws with all params invalid", function() {
            expect(() => movieTheater.reservation('test', 'test')).to.throw("Invalid input");
        });

        

            it("works with valid input", function() {
                expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 4)).to.equal(2)
            });
        
     });

     
});

  