class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let invited = [];
        for(let player of footballPlayers) {
            let [name, age, playerValue] = player.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            let findName = this.invitedPlayers.find(x => x.name === name);
            if(!findName) {
                this.invitedPlayers.push({name, age, playerValue});
                invited.push(name)
            } else {
                if(playerValue > findName.playerValue) {
                    findName.playerValue = playerValue
                }
            }
        }
        return `You successfully invite ${invited.join(', ')}.`
    }
    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        let findName = this.invitedPlayers.find(x => x.name === name);
        if(!findName) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if(findName.playerValue > playerOffer) {
            let difference = findName.playerValue - playerOffer
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${difference} million more are needed to sign the contract!`)
        }
        findName.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }
    ageLimit(name, age) {
        let findName = this.invitedPlayers.find(x => x.name === name);
        if(!findName) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
       if(findName.age < age) {
        let difference = age - findName.age;
        if(difference < 5) {
            return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`
        } else {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }
       } else {
        return `${name} is above age limit!`
       }
    }
    transferWindowResult(){
        let result = ['Players list:'];
        let sortedArr = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        sortedArr.map(x => result.push(`Player ${x.name}-${x.playerValue}`));
        return result.join("\n")
    }

}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());


