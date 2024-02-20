const lottery = {
  buyLotteryTicket(ticketPrice, ticketCount, buy) {
    if (buy === false) {
      throw new Error("Unable to buy lottery ticket!");
    } else {
      if (
        ticketPrice <= 0 ||
        ticketCount < 1 ||
        typeof ticketPrice !== "number" ||
        typeof ticketCount !== "number" ||
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

describe("Suite Tests of lottery object and its functionalities", function () {
  describe("testing •	buyLotteryTicket ", function () {
    it("throws an error with invalid parameters ", function () {
      expect(() => lottery.buyLotteryTicket('test', 'test', 1)).to.throw('Invalid input!');
    });
    it("throws an error with invalid buy parameter false ", function () {
      expect(() => lottery.buyLotteryTicket('test', 'test', false)).to.throw('Unable to buy lottery ticket!');
    });
    it("throws an error with invalid parameters equal to 0 ", function () {
      expect(() => lottery.buyLotteryTicket(0, 0, true)).to.throw('Invalid input!');
    });
    it("works with valid parameters", function () {
      expect(lottery.buyLotteryTicket(2, 2, true)).to.equal('You bought 2 tickets for 4$.');
    });
  });

  describe("testing •	checkTicket ", function () {
    it("throws an error with invalid parameters ", function () {
      expect(() => lottery.checkTicket('test', 'test')).to.throw('Invalid input!');
    });
    it("throws an error with invalid parameters - less than 6 numbers in each array", function () {
      expect(() => lottery.checkTicket([1, 2, 3], [1, 2, 3])).to.throw('Invalid input!');
    });
    it("works with valid parameters - 5 numbers matching ", function () {
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6])).to.equal('Congratulations you win, check your reward!');
    });
    it("works with valid parameters - JACKPOT arguments passed", function () {
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
    });
  });

  describe("testing •	secondChance ", function () {
    it("throws an error with invalid parameters ", function () {
      expect(() => lottery.secondChance('test', 'test')).to.throw('Invalid input!');
    });
    it("works with valid parameters - number does not match", function () {
      expect(lottery.secondChance(7, [1, 2, 3, 4, 5, 6])).to.equal("Sorry, your ticket didn't win!");
    });
    it("works with valid parameters - number matches", function () {
      expect(lottery.secondChance(2, [1, 2, 3, 4, 5, 6])).to.equal("You win our second chance prize!");
    });
  });

});
