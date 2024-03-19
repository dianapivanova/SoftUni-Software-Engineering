const lottery = {
    buyLotteryTicket(ticketPrice, ticketCount, buy) {
      if (buy === false) {
        throw new Error("Unable to buy lottery ticket!");
      } else {
        if (
          ticketPrice <= 0 ||
          ticketCount < 1 ||
          typeof ticketPrice !== "number" ||
          typeof ticketCount !== "number"||
          typeof buy !== "boolean"
        ) {
          throw new Error("Invalid input!");
        } else {
          let totalPrice = ticketPrice * ticketCount;
          return `You bought ${ticketCount} tickets for ${totalPrice}$.`;
        }
      }
    },
   checkTicket(ticketNumbers, luckyNumbers) {
      if (
        !Array.isArray(ticketNumbers) ||
        !Array.isArray(luckyNumbers) ||
        ticketNumbers.length !== 6 ||
        luckyNumbers.length !== 6
      ) {
        throw new Error("Invalid input!");
      }
    
      const uniqueTicketNumbers = ticketNumbers.filter(
        (number, index, array) => array.indexOf(number) === index
      );
      let winningNumbers = 0;
    
      for (const number of uniqueTicketNumbers) {
        if (luckyNumbers.includes(number)) {
          winningNumbers++;
        }
      }
    
      if (winningNumbers >= 3 && winningNumbers < 6) {
        return "Congratulations you win, check your reward!";
      } else if (winningNumbers === 6) {
        return "You win the JACKPOT!!!";
      }
    }
    ,
    secondChance(ticketID, secondChanceWinningIDs) {
      if (typeof ticketID !== "number" || !Array.isArray(secondChanceWinningIDs)) {
        throw new Error("Invalid input!");
      }
      if (secondChanceWinningIDs.includes(ticketID)) {
        return "You win our second chance prize!";
      } else {
        return "Sorry, your ticket didn't win!";
      }
    },
  };

  import { expect } from "chai";

  describe("testing Lottery class functionality", function () {
    describe("testing •	buyLotteryTicket (ticketPrice,ticketCount,buy)  functionality", function () {
      it("throws an error with invalid parameters", function () {
        expect(() => lottery.buyLotteryTicket("test","test", "test")).to.throw(
          "Invalid input"
        );
      });

      it("throws an error with invalid parameters", function () {
        expect(() => lottery.buyLotteryTicket(10, 10 , false)).to.throw(
          "Unable to buy lottery ticket!"
        );
      });
  
      it("works with valid parameters", function () {
        expect(lottery.buyLotteryTicket(10, 10 , true)).to.equal(
          "You bought 10 tickets for 100$."
        );
      });
    })

    describe("testing •	checkTicket (ticketNumbers,luckyNumbers) functionality", function () {
        it("throws an error with invalid parameters", function () {
          expect(() => lottery.checkTicket("test","test")).to.throw(
            "Invalid input"
          );
        });
    
        it("works with valid parameters and 4 matches", function () {
          expect(lottery.checkTicket([1,2,3,4,5,6], [1,2,3,8,9,6])).to.equal(
            "Congratulations you win, check your reward!"
          );
        });

        it("works with valid parameters and 4 matches", function () {
            expect(lottery.checkTicket([1,2,3,4,5,6], [1,2,3,4,5,6])).to.equal(
              "You win the JACKPOT!!!"
            );
          });
      })

      describe("testing •	secondChance (ticketID, secondChanceWinningIDs) functionality", function () {
        it("throws an error with invalid parameters", function () {
          expect(() => lottery.secondChance("test","test")).to.throw(
            "Invalid input"
          );
        });
    
        it("works with valid parameters and a match", function () {
          expect(lottery.secondChance(1, [1,2,3])).to.equal(
            "You win our second chance prize!"
          );
        });

        it("works with valid parameters and a match", function () {
            expect(lottery.secondChance(1, [2,3,4])).to.equal(
              "Sorry, your ticket didn't win!"
            );
          });
      })
});