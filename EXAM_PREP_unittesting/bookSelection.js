import { expect } from "chai";

const bookSelection = {
    isGenreSuitable(genre, age) {
      if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
        return `Books with ${genre} genre are not suitable for kids at ${age} age`;
      } else {
        return `Those books are suitable`;
      }
    },
    isItAffordable(price, budget) {
      if (typeof price !== "number" || typeof budget !== "number") {
        throw new Error("Invalid input");
      }
  
      let result = budget - price;
  
      if (result < 0) {
        return "You don't have enough money";
      } else {
        return `Book bought. You have ${result}$ left`;
      }
    },
    suitableTitles(array, wantedGenre) {
      let resultArr = [];
  
      if (!Array.isArray(array) || typeof wantedGenre !== "string") {
        throw new Error("Invalid input");
      }
      array.map((obj) => {
        if (obj.genre === wantedGenre) {
          resultArr.push(obj.title);
        }
      });
      return resultArr;
    },
  };



describe("testing bookSelection functionality", function() {
    describe("testing isGenreSuitable(genre, age)", function() {

        it("works with age under 12 and genre Thriller", function() {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal('Books with Thriller genre are not suitable for kids at 10 age')
        });

        it("works with age under 12 and genre Horror", function() {
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal('Books with Horror genre are not suitable for kids at 10 age')
        });

        it("works with age under 12 and genre anything else", function() {
            expect(bookSelection.isGenreSuitable('other', 10)).to.equal('Those books are suitable')
        });
     });

     describe("isItAffordable (price, budget)", function() {

        it("throws with invalid parameters", function() {
            expect(() => bookSelection.isItAffordable(undefined, undefined)).to.throw('Invalid input')
        });

        it("works with second param less than first one", function() {
            expect(bookSelection.isItAffordable(100, 50)).to.equal("You don't have enough money")
        });

        it("works with second param less than first one", function() {
            expect(bookSelection.isItAffordable(50, 100)).to.equal("Book bought. You have 50$ left")
        });

     });

     describe("testing suitableTitles (books, wantedGenre)", function() {

        it("throws with invalid parameters", function() {
            expect(() => bookSelection.suitableTitles(undefined, undefined)).to.throw('Invalid input')
        });

        it("throws with invalid parameters", function() {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Thriller")).to.deep.equal(['The Da Vinci Code'])
        });
     });
});
