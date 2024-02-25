class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHkes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (!this.goals.hasOwnProperty(peak)) {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`
        } else {
            return `${peak} has already been added to your goals`
        }
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`)
        } else if (this.resources == 0) {
            throw new Error(`You don't have enough resources to start the hike`)
        }

        let difference = this.resources - (time * 10);
        if (difference < 0) {
            return `You don't have enough resources to complete the hike`
        } else {
            this.resources = difference
            this.listOfHkes.push({ peak, time, difficultyLevel })
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }
    }
    rest(time) {
        if (this.resources + time * 10 > 100) {
            this.resources = 100
            return `Your resources are fully recharged. Time for hiking!`
        } else {
            this.resources += time * 10
            return `You have rested for ${time} hours and gained ${time * 10}% resources`
        }
    }
    showRecord(criteria) {
        if (this.listOfHkes.length == 0) {
            return `${this.username} has not done any hiking yet`
        }

        if (criteria !== 'all') {
            let filteredArr = this.listOfHkes.filter(x => x.difficultyLevel == criteria);
            if (filteredArr.length == 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            } else {
                let bestHike = filteredArr[0];
                return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`
            }
        } else {
            let result = [];
            result.push(`All hiking records:`)
            for (let hikes of this.listOfHkes) {
                result.push(`${this.username} hiked ${hikes.peak} for ${hikes.time} hours`)
            }
            return result.join('\n')
        }
    }
}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));



