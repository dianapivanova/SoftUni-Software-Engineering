class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
    if (this.warehouseSpace < spaceRequired) {
      throw new Error("Not enough space in the warehouse");
    }
    this.products.push({ product, quantity });
    this.warehouseSpace -= spaceRequired;
    return `The ${product} has been successfully delivered in the warehouse.`;
  }
  quantityCheck(product, minimalQuantity) {
    let findProduct = this.products.find(x => x.product === product);
    if (!findProduct) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    if (minimalQuantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }
    if (minimalQuantity <= findProduct.quantity) {
      return `You have enough from product ${product}.`;
    }
    let diff = minimalQuantity - findProduct.quantity;
    findProduct.quantity = minimalQuantity;
    return `You added ${diff} more from the ${product} products.`;
  }
  sellProduct(product) {
    let findProduct = this.products.find(x => x.product === product);
    if (!findProduct) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    findProduct.quantity -= 1;
    this.sales.push({ product: product, quantity: 1 });
    return `The ${product} has been successfully sold.`;
  }
  revision() {
    if (this.sales.length == 0) {
      throw new Error(`There are no sales today!`);
    }
    let result = [
      `You sold ${this.sales.length} products today!`,"Products in the warehouse:"];
    this.products.map(x => result.push(`${x.product}-${x.quantity} more left`))
    return result.join('\n');
  }

}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 0));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());







