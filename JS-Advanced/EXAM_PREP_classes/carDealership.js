class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }
  addCar(model, horsepower, price, mileage) {
    if (
      model == "" ||
      horsepower < 0 ||
      !Number.isInteger(horsepower) ||
      price < 0 ||
      mileage < 0
    ) {
      throw new Error(`Invalid input!`);
    }
    this.availableCars.push({model, horsepower, price, mileage} );
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
  }
  sellCar(model, desiredMileage) {
    let findCar = this.availableCars.find(x => x.model === model);
    if(!findCar) {
        throw new Error(`${model} was not found!`);
    }
    if(findCar.mileage<=desiredMileage) {
        findCar.mileage = findCar.mileage;
    } else if(findCar.mileage - desiredMileage <= 40000) {
        findCar.price -= findCar.price * 0.05
    }else if (findCar.mileage - desiredMileage > 40000) {
        findCar.price -= findCar.price * 0.10
    }
    
    let horsepower = findCar.horsepower;
    let soldPrice = findCar.price;
    this.soldCars.push({model, horsepower, soldPrice});
    let idx = this.availableCars.indexOf(findCar);
    this.availableCars.splice(idx, 1);
    this.totalIncome += soldPrice;
    return `${model} was sold for ${soldPrice.toFixed(2)}$`;
  }
  currentCar() {
    if(this.availableCars.length == 0) {
        return `There are no available cars`
    }
    let result = ["-Available cars:"];
    this.availableCars.map(x => result.push(`---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`));
    return result.join('\n');

  }
  salesReport(criteria) {
    if(criteria !== 'model' && criteria !=='horsepower') {
        throw new Error('Invalid criteria!')
    };
    let sortedArr = [];
    if(criteria == "horsepower") {
        sortedArr = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else {
        sortedArr = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    }
    let result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`, `-${this.soldCars.length} cars sold:`];
    sortedArr.map(x => result.push(`---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`));
    return result.join('\n')
  }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));













