function salaryProblem(input) {
    let tabs = Number(input[0])
    let salary = Number(input[1])

    for (let index = 2; index <= input.length; index++) {
        let currentrow = input[index]

        switch (currentrow) {
            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
        }

        if (salary <= 0) {
            console.log('You have lost your salary.'); break;
        }
    }

    if (salary > 0) {
        console.log(Math.round(salary))
    }

}
salaryProblem()