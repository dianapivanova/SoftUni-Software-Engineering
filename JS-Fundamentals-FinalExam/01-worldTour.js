function worldTour(arr) {
    let stops = arr.shift();
    let command = arr.shift();

    while (command != 'Travel') {
        let tokens = command.split(':');
        let action = tokens.shift();

        if (action == 'Add Stop') {
            let index = Number(tokens[0]);
            let string = tokens[1];
            if (index >= 0 && index < stops.length) {
                stops = stops.split('');
                stops.splice(index, 0, string);
                stops = stops.join('');
                console.log(stops);
            }
        } else if (action == 'Remove Stop') {
            let startIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);

            if ((startIndex >= 0 && startIndex < stops.length) && (endIndex >= 0 && endIndex < stops.length)) {
                stops = stops.split('');
                stops.splice(startIndex, endIndex - startIndex + 1);
                stops = stops.join('');

            }
            console.log(stops);
        } else {
            let oldString = tokens[0];
            let newString = tokens[1];

            if (stops.includes(oldString)) {
                stops = stops.split(oldString).join(newString)
            }
            console.log(stops);
        }

        command = arr.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);

}

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])


