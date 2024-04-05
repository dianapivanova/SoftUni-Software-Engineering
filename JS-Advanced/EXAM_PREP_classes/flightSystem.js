class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName - agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight (flightNumber, destination, departureTime, price) {

        let findFlight = this.flights.find(x => x.flightNumber === flightNumber);
        if(findFlight) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        } else {
            this.flights.push({flightNumber, destination, departureTime, price});
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }
    }
    bookFlight (passengerName, flightNumber) {
        let findFlight = this.flights.find(x => x.flightNumber === flightNumber);
        if(!findFlight) {
            return `Flight ${flightNumber} is not available for booking.`;
        } else {
            let price = findFlight.price;
            this.bookings.push({passengerName, flightNumber, price});
            this.bookingsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
        }
    }
    cancelBooking (passengerName, flightNumber) {
        let booking = this.bookings.find( x=> x.passengerName === passengerName);
        if(!booking) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        } else {
            let idx = this.bookings.indexOf(booking);
            this.bookings.splice(idx, 1);
            this.bookingsCount--;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
        }
    }
    showBookings (criteria) {
        if(this.bookings.length == 0) {
            throw new Error (`No bookings have been made yet.`)
        }
        if(criteria == 'all') {
            let result = [`All bookings(${this.bookingsCount}):`];
            this.bookings.map(x => result.push(`${x.passengerName} booked for flight ${x.flightNumber}.`))
            return result.join('\n');
        } else if(criteria == 'cheap') {
            let filteredArr = this.bookings.filter(x => x.price <= 100);
            if(filteredArr.length == 0) {
                return `No cheap bookings found.`
            };
            let result = ["Cheap bookings:"];
            filteredArr.map(x => result.push(`${x.passengerName} booked for flight ${x.flightNumber}.`));
            return result.join('\n');
        } else if(criteria == 'expensive') {
            let filteredArr = this.bookings.filter(x => x.price > 100);
            if(filteredArr.length == 0) {
                return `No expensive bookings found.`;
            };
            let result = ["Expensive bookings:"];
            filteredArr.map(x => result.push(`${x.passengerName} booked for flight ${x.flightNumber}.`));
            return result.join('\n');
    }

}
}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));




