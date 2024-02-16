class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        let findFlight = this.flights.find(x => x.flightNumber === flightNumber);
        if (!findFlight) {
            this.flights.push({ flightNumber, destination, departureTime, price });
            return `Flight ${flightNumber} to ${destination} has been added to the system.`
        } else {
            return `Flight ${flightNumber} to ${destination} is already available.`
        }
    }
    bookFlight(passengerName, flightNumber) {
        let findFlight = this.flights.find(x => x.flightNumber === flightNumber);
        if (!findFlight) {
            return `Flight ${flightNumber} is not available for booking.`
        } else {
            this.bookings.push({ flightNumber, passengerName, price: findFlight.price });
            this.bookingsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
        }
    }
    cancelBooking(passengerName, flightNumber) {
        let findBookedFlight = this.bookings.find(x => x.flightNumber == flightNumber);
        if (findBookedFlight) {
            let idx = this.bookings.indexOf(findBookedFlight);
            this.bookings.splice(idx, 1);
            this.bookingsCount--;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
        } else {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        }
    }
    showBookings(criteria) {

        if (this.bookings.length == 0) {
            throw new Error(`No bookings have been made yet.`)
        }

        if (criteria === "all") {
            return (`All bookings(${this.bookingsCount}):` +
                "\n" +
                this.bookings.map(x => `${x.passengerName} booked for flight ${x.flightNumber}.`).join('\n')
            )
        } else if (criteria === "expensive") {
            let filteredArr = this.bookings.filter(x => x.price > 100);
            if (filteredArr.length == 0) {
                return `No expensive bookings found.`
            } else {
                return (
                    `Expensive bookings:` +
                    "\n" +
                    filteredArr.map(x => `${x.passengerName} booked for flight ${x.flightNumber}.`).join("\n")
                )
            }
        } else if (criteria === "cheap") {
            let filteredArr = this.bookings.filter(x => x.price <= 100);
            if (filteredArr.length == 0) {
                return `No cheap bookings found.`
            } else {
                return (
                    `Cheap bookings:` +
                    "\n" +
                    filteredArr.map(x => `${x.passengerName} booked for flight ${x.flightNumber}.`).join("\n")
                )
            }
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




