class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        let findProduct = this.productStock.find(x => x.productName === productName && x.size === size);
        if (!findProduct) {
            this.productStock.push({ productName, size, quantity, price });
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        } else {
            findProduct.quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        }
    }
    sendProduct(productName, size) {
        let findProduct = this.productStock.find(x => x.productName === productName && x.size == size);
        if (!findProduct) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`)
        } else {
            let idx = this.productStock.indexOf(findProduct);
            this.productStock.splice(idx, 1);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }
    }
    findProductsBySize(size) {
        let matchedProducts = [];
        for (let product of this.productStock) {
            if (product.size === size) {
                matchedProducts.push(`${product.productName}-${product.quantity} pieces`)
            }
        }
        if (matchedProducts.length == 0) {
            return `There are no products available in that size`;
        } else {
            return matchedProducts.join(', ');
        }
    }
    listProducts() {
        if (this.productStock.length == 0) {
            return `${this.storehouse} storehouse is empty`
        } else {
            let result = [`${this.storehouse} storehouse in ${this.location} available products:`]
            let sortedArr = this.productStock.sort((a, b) => (a.productName.localeCompare(b.productName)));
            for (let product of sortedArr) {
                result.push(`${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$`)
            }
            return result.join('\n')
        }
        

    }
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());







