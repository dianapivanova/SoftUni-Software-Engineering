class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }
    jobApplication(candidates) {
        let names = [];
        for(let candidate of candidates) {
            let [name, education, yearsOfExperience] = candidate.split('-')
            yearsOfExperience = Number(yearsOfExperience);

            let findName = this.jobCandidates.find( x=> x.name ===name);
            if(!findName) {
                this.jobCandidates.push({name, education, yearsOfExperience})
                names.push(name);
            } else {
                if(findName.yearsOfExperience < yearsOfExperience) {
                    findName.yearsOfExperience = yearsOfExperience
                }
            }
        }
        return `You successfully added candidates: ${names.join(', ')}.`
    }
    jobOffer(chosenPerson) {
        let [name, experienceRequired] = chosenPerson.split('-');
        let findName = this.jobCandidates.find( x=> x.name ===name);

        if(!findName) {
            throw new Error(`${name} is not in the candidates list!`)
        }

        if(experienceRequired > findName.yearsOfExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${experienceRequired} years.`)
        }

        findName.yearsOfExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`
    }
    salaryBonus(name) {
        let findName = this.jobCandidates.find( x=> x.name ===name);
        if(!findName) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if(findName.education == 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        } else if(findName.education == 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
        
    }
    candidatesDatabase() {
        if(this.jobCandidates.length == 0) {
            throw new Error(`Candidate Database is empty!`)
        }
        let result = ['Candidates list:'];
        let sortedArr = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        sortedArr.map(x => result.push(`${x.name}-${x.yearsOfExperience}`));
        return result.join("\n")
    }
}

let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());


