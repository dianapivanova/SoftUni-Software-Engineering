class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }
    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`
        } else {
            this.participants[participantName] = participantGender
            return `A new participant has been added - ${participantName}`
        }
    }
    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`)
        } else {
            if (condition < 30) {
                throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
            }
            if (condition / 30 < 2) {
                return `${participantName} could only complete 1 of the disciplines`
            } else if (condition / 30 < 3) {
                return `${participantName} could only complete 2 of the disciplines`
            } else {
                let gender = this.participants[participantName]
                this.listOfFinalists.push({ participantName, gender })
                delete this.participants[participantName];
                return `Congratulations, ${participantName} finished the whole competition`
            }
        }
    }
    rewarding(participantName) {
        let findName = this.listOfFinalists.find(x => x.participantName === participantName);
        if (!findName) {
            return `${participantName} is not in the current finalists list`
        } else {
            return `${participantName} was rewarded with a trophy for his performance`
        }
    }
    showRecord(criteria) {
        if (this.listOfFinalists.length == 0) {
            return `There are no finalists in this competition`
        }
        if (criteria !== 'all') {
            let resultArr = this.listOfFinalists.filter(x => x.gender == criteria);
            if (resultArr.length == 0) {
                return `There are no ${criteria}'s that finished the competition`
            } else if (resultArr.length > 0) {
                let name = resultArr[0].participantName
                return `${name} is the first ${criteria} that finished the ${this.competitionName} triathlon`
            }
        } else {
            let sortedArr = this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName))
            return (`List of all ${this.competitionName} finalists:`
                + "\n" +
                sortedArr.map(x => x.participantName).join('\n')
            )

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




