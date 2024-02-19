class OnlineShop {

    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error('Not enough space in the warehouse.');
        };

        let findProduct = this.products.find(x => x.product === product);
        if (!findProduct) {
            this.products.push({ product, quantity });
        } else {
            findProduct.quantity += quantity;
        }

        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {
        let findProduct = this.products.find(x => x.product === product);
        if (!findProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }
        if (minimalQuantity <= findProduct.quantity) {
            return `You have enough from product ${product}.`
        } else {
            let difference = minimalQuantity - findProduct.quantity;
            findProduct.quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`
        }
    }

    sellProduct(product) {
        let findProduct = this.products.find(x => x.product === product);
        if (!findProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        findProduct.quantity -= 1;
        this.sales.push({ product, quantity: 1 });
        return `The ${product} has been successfully sold.`

    }

    revision() {
        let result = [];
        if (this.sales.length == 0) {
            throw new Error(`There are no sales today!`)
        } else {
            result.push(`You sold ${this.sales.length} products today!`);
        }

        result.push(`Products in the warehouse:`)
        for (let item of this.products) {
            result.push(`${item.product}-${item.quantity} more left`)
        }
        return result.join('\n');
    }
}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 10, 200));
console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.revision());





