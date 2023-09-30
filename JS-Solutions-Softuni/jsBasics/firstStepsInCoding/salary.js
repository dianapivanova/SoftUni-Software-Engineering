function salary1(input) {
    let tabs = Number(input[0])
    let salary = Number(input[1])

    for (index = 2; index <= input.length; index++) {
        let currentrow = input[index]
        switch (currentrow) {
            case "Facebook": salary = salary - 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
        }
        if (salary <= 0) {
            console.log('You have lost your salary.'); break;
        }

    }
    if (salary > 0) {
        console.log(salary)
    }
}
salary1(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])
