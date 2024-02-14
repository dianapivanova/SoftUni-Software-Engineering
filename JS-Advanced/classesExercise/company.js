class Company {

    departments = {};

    addEmployee(name, salary, position, department) {
        if (name == '' || name == undefined || name == null) {
            throw new Error('Invalid input!')
        }
        if (salary == '' || salary == undefined || salary == null) {
            throw new Error('Invalid input!')
        }
        if (position == '' || position == undefined || position == null) {
            throw new Error('Invalid input!')
        }
        if (department == '' || department == undefined || department == null) {
            throw new Error('Invalid input!')
        }
        if (salary < 0) {
            throw new Error('Invalid input!')
        }


        if (this.departments[department]) {
            this.departments[department].push({ name, salary, position })
        } else {
            this.departments[department] = [{ name, salary, position }]
        }
        return (`New employee is hired. Name: ${name}. Position: ${position}`)
    }


    bestDepartment() {
        let bestAvgSalary = 0;
        let bestDepartment = 0;
        let bestWorkers = []

        for (let employee of Object.entries(this.departments)) {
            let avgSalary = 0;
            let workersNum = 0;
            for (let currentEmployee of employee[1]) {
                avgSalary += currentEmployee.salary
                workersNum++
            }
            avgSalary /= workersNum

            if (bestAvgSalary < avgSalary) {
                bestAvgSalary = avgSalary
                bestDepartment = employee[0]
                bestWorkers = employee[1]
            }

        }

        let sortedWorkersArr = bestWorkers.sort((a, b) => {
            if (b.salary !== a.salary) {
                return b.salary - a.salary;
            }
            // If salary is the same, sort by name in ascending order
            return a.name.localeCompare(b.name);
        })

        return (`Best Department is: ${bestDepartment}\nAverage salary: ${bestAvgSalary.toFixed(2)}\n${sortedWorkersArr.map(x => `${x.name} ${x.salary} ${x.position}`).join('\n')}`)
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());