class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        for (let candidate of candidates) {
            let [name, education, yearsOfExperience] = candidate.split('-');
            yearsOfExperience = Number(yearsOfExperience);
            let findName = this.jobCandidates.find(x => x.name === name);
            if (!findName) {
                this.jobCandidates.push({ name, education, yearsOfExperience })
            } else {
                if (findName.yearsOfExperience < yearsOfExperience) {
                    findName.yearsOfExperience = yearsOfExperience;
                }
            }
        }

        return `You successfully added candidates: ${this.jobCandidates.map(x => x.name).join(', ')}.`
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience)
        let findName = this.jobCandidates.find(x => x.name === name);
        if (!findName) {
            throw new Error(`${name} is not in the candidates list!`)
        } else {
            if (minimalExperience > findName.yearsOfExperience) {
                throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
            } else {
                findName.yearsOfExperience = 'hired';
                return `Welcome aboard, our newest employee is ${name}.`;
            }
        }
    }

    salaryBonus(name) {
        let findName = this.jobCandidates.find(x => x.name === name);
        if (!findName) {
            throw new Error(`${name} is not in the candidates list!`)
        } else {
            if (findName.education == 'Bachelor') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
            } else if (findName.education == 'Master') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
            } else {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
            }
        }
    }

    candidatesDatabase() {
        if (this.jobCandidates.length == 0) {
            throw new Error('Candidate Database is empty!')
        } else {
            let sortedArr = this.jobCandidates.sort((a, b) => (a.name.localeCompare(b.name)));
            return (
                `Candidates list:` +
                `\n` +
                sortedArr.map(x => `${x.name}-${x.yearsOfExperience}`).join('\n')
            );
        }
    }

}
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "John Doe-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("John Doe-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());





