class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (model == "" ||
            horsepower < 0 ||
            !Number.isInteger(horsepower) ||
            price < 0 ||
            mileage < 0) {
            throw new Error('Invalid input!')
        }
        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }
    sellCar(model, desiredMileage) {
        let findCar = this.availableCars.find(x => x.model == model);
        if (!findCar) {
            throw new Error(`${model} was not found!`)
        }
        if (findCar.mileage <= desiredMileage) {
            findCar.price = findCar.price;
        } else if (findCar.mileage - desiredMileage <= 40000) {
            findCar.price -= findCar.price * 0.05
        } else if (findCar.mileage - desiredMileage > 40000) {
            findCar.price -= findCar.price * 0.10
        }
        let horsePower = findCar.horsepower;
        let soldPrice = findCar.price;
        this.soldCars.push({ model, horsePower, soldPrice });
        this.totalIncome += soldPrice;
        let idx = this.availableCars.indexOf(findCar);
        this.availableCars.splice(idx, 1);
        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }
    currentCar() {
        if (this.availableCars.length == 0) {
            return `There are no available cars`
        }
        let result = [];
        result.push(`-Available cars:`);
        for (let car of this.availableCars) {
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
        }
        return result.join('\n');
    }
    salesReport(criteria) {
        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error(`Invalid criteria!`);
        }
        let sortedArr = [];
        if (criteria == 'horsepower') {
            sortedArr = this.soldCars.sort((a, b) => (b.horsePower - a.horsePower));
        } else if (criteria == 'model') {
            sortedArr = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }
        let result = [];
        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);
        for (let car of this.soldCars) {
            result.push(`---${car.model} - ${car.horsePower} HP - ${car.soldPrice.toFixed(2)}$`)
        }
        return result.join('\n');
    }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));



