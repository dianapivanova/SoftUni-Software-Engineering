const cinema = {
    showMovies: function(movieArr) {
 
        if (movieArr.length == 0) {
          return 'There are currently no movies to show.';
         } else{
             let result = movieArr.join(', ');
             return result;
         }
 
     },
     ticketPrice: function(projectionType) {
 
         const schedule = {
             "Premiere": 12.00,
             "Normal": 7.50,
             "Discount": 5.50
         }
         if (schedule.hasOwnProperty(projectionType)) {
             let price = schedule[projectionType];
             return price;
         } else {
             throw new Error('Invalid projection type.')
         }
 
     },
     swapSeatsInHall: function(firstPlace, secondPlace) {
 
         if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
         !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 || firstPlace === secondPlace) {
             return "Unsuccessful change of seats in the hall.";
         } else {
             return "Successful change of seats in the hall.";
         }
 
     }
  };
  
  import { expect } from "chai";

  describe("testing cinema functionality ", function() {
    describe("testing showMovies(movieArr)", function() {
        it("returns properly with an empty array", function() {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.')
        });

        it("returns properly with full array", function() {
            expect(cinema.showMovies(['test', 'test2', 'test3'])).to.equal('test, test2, test3')
        });

        it("returns properly with full array", function() {
            expect(cinema.showMovies(['test'])).to.equal('test')
        });
     });

     describe("testing ticketPrice(projectionType)", function() {
        it("expect to throw with invalid string", function() {
            expect(() => cinema.ticketPrice('test')).to.throw('Invalid projection type.')
        });

        it("expect to throw with invalid string", function() {
            expect(() => cinema.ticketPrice(undefined)).to.throw('Invalid projection type.')
        });

        it("expect to throw with invalid string", function() {
            expect(() => cinema.ticketPrice({})).to.throw('Invalid projection type.')
        });


        it("expect to return properly with valid string", function() {
            expect(cinema.ticketPrice('Premiere')).to.equal(12)
        });

        it("expect to return properly with valid string", function() {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50)
        });

        it("expect to return properly with valid string", function() {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50)
        });
     });

     describe("testing swapSeatsInHall(firstPlace, secondPlace)", function() {
        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(1.5, 1)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall({}, {})).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(undefined, undefined)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(null, null)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall([], [])).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall("test1", "test2")).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall([], ['test'])).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall('test', 1)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(1, 'test')).to.equal('Unsuccessful change of seats in the hall.')
        });


        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(-1,1)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(0,1)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(21,1)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(21,21)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(1,1)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(1, 1.5)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(1.5, 2.5)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(1, -1)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall()).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(1,0 )).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(1,21)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(1,2)).to.equal('Successful change of seats in the hall.')
        });

        it("expect to throw with invalid num", function() {
            expect(cinema.swapSeatsInHall(1,20)).to.equal('Successful change of seats in the hall.')
        });
    });
     
})
