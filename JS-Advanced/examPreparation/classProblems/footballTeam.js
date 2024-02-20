class FootballTeam {

    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let resultArr = [];
        for (let curPlayr of footballPlayers) {
            let [name, age, value] = curPlayr.split('/');
            let findName = this.invitedPlayers.find(x => x.name === name);
            if (!findName) {
                this.invitedPlayers.push({ name, age, value });
                resultArr.push(name)
            } else {
                if (value > findName.value) {
                    findName.value = value;
                }
            }
        }
        return `You successfully invite ${resultArr.join(', ')}.`
    }
    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        let findName = this.invitedPlayers.find(x => x.name === name);
        if (!findName) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if (playerOffer < findName.value) {
            let difference = findName.value - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${difference} million more are needed to sign the contract!"`)
        } else {
            findName.value = 'Bought';
            return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
        }

    }
    ageLimit(name, age) {
        let findName = this.invitedPlayers.find(x => x.name === name);
        if (!findName) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if (findName.age < age) {
            let difference = age - findName.age;
            if (difference < 5) {
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        } else {
            return `${name} is above age limit!`
        }
    }
    transferWindowResult() {
        let result = [];
        result.push(`Players list:`);
        for (let curPlayer of this.invitedPlayers) {
            result.push(`Player ${curPlayer.name}-${curPlayer.value}`);
        }

        return result.join('\n');
    }
}
let fTeam = new FootballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());


