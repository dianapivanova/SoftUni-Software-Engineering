function cinemaTickets(input) {

    let index = 0
    let command = input[index]
    index++

    let standardTickets = 0
    let kidTickets = 0
    let studentTickets = 0
    let totalTickets = 0

    while (command !== "Finish") {

        let movieName = command
        let seats = Number(input[index])
        index++
        let ticketType = input[index]
        index++

        let countSoldTickets = 0

        while (ticketType !== "End") {
            countSoldTickets++

            switch (ticketType) {
                case "standard": standardTickets++; break;
                case "student": studentTickets++; break;
                case "kid": kidTickets++; break;
            }

            if (countSoldTickets === seats) {
                break;
            }
            ticketType = input[index];
            index++
        }

        totalTickets += countSoldTickets
        let percentageFull = countSoldTickets / seats * 100
        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`)

        command = input[index]
        index++
    }

    let percentageStudentTicket = studentTickets / totalTickets * 100;
    let percentageStandardTicket = standardTickets / totalTickets * 100;
    let percentageKidTicket = kidTickets / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${percentageStudentTicket.toFixed(2)}% student tickets.`)
    console.log(`${percentageStandardTicket.toFixed(2)}% standard tickets.`)
    console.log(`${percentageKidTicket.toFixed(2)}% kids tickets.`)

}
cinemaTickets()