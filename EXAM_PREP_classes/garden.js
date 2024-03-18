class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }
  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable - spaceRequired < 0) {
      throw new Error(`Not enough space in the garden.`);
    }
    this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
    this.spaceAvailable -= spaceRequired;
    return `The ${plantName} has been successfully planted in the garden.`;
  }
  ripenPlant(plantName, quantity) {
    let findPlant = this.plants.find((x) => x.plantName === plantName);
    if (!findPlant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if ((findPlant.ripe == true)) {
      throw new Error(`The ${plantName} is already ripe.`);
    }
    if (quantity < 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }
    findPlant.ripe = true;
    findPlant.quantity += quantity;
    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }
  harvestPlant(plantName) {
    let findPlant = this.plants.find((x) => x.plantName === plantName);
    if (!findPlant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (findPlant.ripe == false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }

    let quantity = findPlant.quantity;
    this.spaceAvailable += findPlant.spaceRequired;
    this.storage.push({ plantName, quantity });
    let idx = this.plants.indexOf(findPlant);
    this.plants.splice(idx, 1)
    return `The ${plantName} has been successfully harvested.`;
  }
  generateReport() {
    let result = [`The garden has ${this.spaceAvailable} free space left.`];
    let sortedArr = this.plants.sort((a, b) =>
      a.plantName.localeCompare(b.plantName)
    );
    result.push(`Plants in the garden: ${sortedArr.map(x => `${x.plantName}`).join(', ')}`)

    if (this.storage.length == 0) {
      console.log("Plants in storage: The storage is empty.");
    } else {
        result.push(`Plants in storage: ${this.storage.map(x => `${x.plantName} (${x.quantity})`).join(', ')}`)
    }
    return result.join('\n')
  }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());








