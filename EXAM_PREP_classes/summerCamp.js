class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }
  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp.hasOwnProperty(condition)) {
      throw new Error("Unsuccessful registration at the camp.");
    }
    let findParticipant = this.listOfParticipants.find((x) => x.name === name);
    if (findParticipant) {
      return `The ${name} is already registered at the camp.`;
    }

    if (money < this.priceForTheCamp[condition]) {
      return `The money is not enough to pay the stay at the camp.`;
    }

    this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
    return `The ${name} was successfully registered.`;
  }
  unregisterParticipant(name) {
    let findParticipant = this.listOfParticipants.find((x) => x.name === name);
    if (!findParticipant) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }
    let idx = this.listOfParticipants.indexOf(findParticipant);
    this.listOfParticipants.splice(idx, 1);
    return `The ${name} removed successfully.`;
  }
  timeToPlay(typeOfGame, participant1, participant2) {
    if (typeOfGame === "WaterBalloonFights") {
      let findParticipant1 = this.listOfParticipants.find(
        (x) => x.name === participant1
      );
      let findParticipant2 = this.listOfParticipants.find(
        (x) => x.name === participant2
      );
      if(!findParticipant1 || !findParticipant2) {
        throw new Error(`Invalid entered name/s.`)
      }
      if(findParticipant1.condition !== findParticipant2.condition) {
        throw new Error(`Choose players with equal condition.`)
      }
      if(findParticipant1.power !== findParticipant2.power) {
        if(findParticipant1.power > findParticipant2.power) {
            findParticipant1.wins++
            return `The ${findParticipant1.name} is winner in the game ${typeOfGame}.`
        } else {
            findParticipant2.wins++
            return `The ${findParticipant2.name} is winner in the game ${typeOfGame}.`
        }
      } else {
        return `There is no winner.`
      }
    } else {
      let findParticipant = this.listOfParticipants.find(
        (x) => x.name === participant1
      );
      if(!findParticipant) {
        throw new Error(`Invalid entered name/s.`)
      }
      findParticipant.power += 20;
      return `The ${findParticipant.name} successfully completed the game ${typeOfGame}.`
    }
  }
  toString() {
    let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
    let sortedArr = this.listOfParticipants.sort((a, b) => b.wins - a.wins)
    sortedArr.map(x => result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`))
    return result.join('\n')
  }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

