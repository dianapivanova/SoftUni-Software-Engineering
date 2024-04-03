class BikeRentalService {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }

    addBikes (bikes) {
        let result = []
        for(let bike of bikes) {
            let [brand, quantity, price] = bike.split('-');
            quantity = Number(quantity);
            price = Number(price);

            let findBike = this.availableBikes.find(x => x.brand == brand);
            if(findBike) {
                if(findBike.price < price) {
                    findBike.price = price;
                    findBike.quantity += quantity;
                }
            } else {
                result.push(brand);
                this.availableBikes.push({brand, quantity, price})
            }
        }
        return `Successfully added ${result.join(', ')}`;
    }
    rentBikes(selectedBikes) {
        let totalPrice = 0;
        let isUnavailable = false;
        for(let bike of selectedBikes) {
            let [brand, quantity] = bike.split('-');
            quantity = Number(quantity);
            let findBike = this.availableBikes.find(x => x.brand == brand);
            if(!findBike || findBike.quantity < quantity) {
                isUnavailable = true;
            } else {
                totalPrice += quantity * findBike.price;
                findBike.quantity -= quantity;
            }
        }
        if(isUnavailable) {
            return `Some of the bikes are unavailable or low on quantity in the bike rental service.`
        } else {
            return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`
        }
    }
    returnBikes (returnedBikes) {
       let isOurSelection = true;
       for(let bike of returnedBikes) {
        let [brand, quantity] = bike.split('-');
        quantity = Number(quantity);
        let findBike = this.availableBikes.find(x => x.brand == brand);
        if(!findBike) {
            isOurSelection = false;
        } else {
            findBike.quantity += quantity;
        }
       }
       if(!isOurSelection) {
        return `Some of the returned bikes are not from our selection.`;
       } else {
        return `Thank you for returning!`;
       }
    }
    revision () {
        let result = [`Available bikes:`];
        let sortedArr = this.availableBikes.sort((a,b) => a.price - b.price);
        sortedArr.map(x => result.push(`${x.brand} quantity:${x.quantity} price:$${x.price}`));
        result.push(`The name of the bike rental service is ${this.name}, and the location is ${this.location}.`)
        return result.join('\n');
    }
}

const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());



