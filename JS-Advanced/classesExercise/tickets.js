function tickets(array, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = []
    for (let ticket of array) {
        let [city, price, status] = ticket.split('|');
        price = Number(price)
        result.push([city, price, status])
    }

    if (criteria == 'destination') {
        result = result.sort((a, b) => (a[0].localeCompare(b[0])))
    } else if (criteria == 'price') {
        result = result.sort((a, b) => (a[1] - b[1]))
    } else {
        result = result.sort((a, b) => (a[2].localeCompare(b[2])))
    }

    let finalResult = []

    for (let ticket of result) {
        let [city, price, destination] = ticket
        finalResult.push(new Ticket(city, price, destination))
    }

    return finalResult

}
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')