function workingHours(input) {
    let time = Number(input[0])
    let timeOfDay = input[1]

    if (time >= 10 && time < 18) {
        switch (timeOfDay) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open");
                break;
            default:
                console.log("closed");
                break;
        }
    }
    else {
        console.log("closed")
    }

}


