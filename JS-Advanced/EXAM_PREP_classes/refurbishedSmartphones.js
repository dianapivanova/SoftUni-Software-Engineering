class RefurbishedSmartphones {
  constructor(retailer) {
    this.retailer = retailer;
    this.availableSmartphones = [];
    this.soldSmartphones = [];
    this.revenue = 0;
  }

  addSmartphone(model, storage, price, condition) {
    if(model == '' || storage < 0 || !Number.isInteger(storage) || price < 0 || condition == '') {
        throw new Error('Invalid smartphone!');
    }
    this.availableSmartphones.push({model, storage, price, condition});
    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
  }
  sellSmartphone(model, desiredStorage) {
    let findPhone = this.availableSmartphones.find(x => x.model == model);
    if(!findPhone) {
        throw new Error(`${model} was not found!`)
    }
    if(findPhone.storage >= desiredStorage) {
        findPhone.price = findPhone.price;
    } else if(desiredStorage - findPhone.storage <= 128) {
        findPhone.price -= findPhone.price * 0.10;
    } else {
        findPhone.price -= findPhone.price * 0.20;
    }
    let idx = this.availableSmartphones.indexOf(findPhone);
    this.availableSmartphones.splice(idx, 1);
    this.revenue += findPhone.price;
    this.soldSmartphones.push({model, storage: findPhone.storage, soldPrice: findPhone.price});
    return `${model} was sold for ${findPhone.price.toFixed(2)}$`;
  }
  upgradePhones() {
    if(this.availableSmartphones.length == 0) {
        throw new Error(`There are no available smartphones!`);
    }
    this.availableSmartphones.map (x => x.storage *= 2);
    let result = [`Upgraded Smartphones:`];
    this.availableSmartphones.forEach(x => result.push(`${x.model} / ${x.storage} GB / ${x.condition} condition / ${x.price.toFixed(2)}$`));
    return result.join('\n');

  }
  salesJournal(criteria) {
    if(criteria !== 'model' && criteria !== 'storage') {
        throw new Error('Invalid criteria!')
    }
    let result = [`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`, `${this.soldSmartphones.length} smartphones sold:`];
    let sortedArr = [];
    if(criteria == 'storage') {
        sortedArr = this.soldSmartphones.sort((a, b) => (b.storage - a.storage));
    } else {
        sortedArr = this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
    }
    sortedArr.forEach(x => result.push(`${x.model} / ${x.storage} GB / ${x.soldPrice.toFixed(2)}$`));
    return result.join('\n')
  }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));




