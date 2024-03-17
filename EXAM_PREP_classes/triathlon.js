class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = []
    }
    addParticipant (participantName, participantGender) {
        if(this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;
        }
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }
    completeness (participantName, condition) {
        if(!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`)
        }
        if(condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`)
        }
        let disciplines = Math.floor(condition /30);
        if(disciplines == 1 || disciplines == 2) {
            return(`${participantName} could only complete ${disciplines} of the disciplines`)
        }
        let gender = this.participants[participantName]
        this.listOfFinalists.push({ participantName, participantGender:gender });
        delete this.participants[participantName];
        return `Congratulations, ${participantName} finished the whole competition`
    }
    rewarding (participantName) {
        let findName = this.listOfFinalists.find(x => x.participantName == participantName);
        if(!findName) {
            return `${participantName} is not in the current finalists list`;
        }
        return `${participantName} was rewarded with a trophy for his performance`
    }
    showRecord (criteria) {
        if(this.listOfFinalists.length == 0) {
            return `There are no finalists in this competition`
        }
        let result = [];
        if(criteria !== 'all') {
            result = this.listOfFinalists.filter(x => x.participantGender == criteria);
            if(result.length == 0) {
                return `There are no ${participantGender}'s that finished the competition`;
            }
            let finalist = result[0];
            return `${finalist.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        } else {
            let result = [`List of all ${this.competitionName} finalists:`]
            let sortedArr = this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName));
            sortedArr.map(x => result.push(x.participantName));
            return result.join('\n');
        }
    }
}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));



