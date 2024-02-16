class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location
        this.productStock = []
    }

    addProduct(productName, size, quantity, price) {
        let findProduct = this.productStock.find(x => x.productName == productName)
        if (!findProduct) {
            this.productStock.push({ productName, size, quantity, price });
            return `The product ${productName}, size ${size} was successfully added to the inventory`
        } else {
            if (findProduct.size !== size) {
                this.productStock.push({ productName, size, quantity, price });
                return `The product ${productName}, size ${size} was successfully added to the inventory`
            } else {
                findProduct.quantity += quantity;
                return `You added ${quantity} more pieces of product ${productName} size ${size}`
            }
        }
    }
    sendProduct(productName, size) {
        const index = this.productStock.findIndex(
            (x) => x.productName === productName && x.size === size
        );
        if (index !== -1) {
            let idx = this.productStock[index]
            this.productStock.splice(idx, 1);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;

        } else {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }

    }
    findProductsBySize(size) {
        let result = []
        for (let products of this.productStock) {
            if (products.size == size) {
                result.push(`${products.productName}-${products.quantity} pieces`)
            }
        }

        if (result.length == 0) {
            return (`There are no products available in that size`)
        } else {
            return result.join(', ')
        }
    }
    listProducts() {
        if (this.productStock.length == 0) {
            return (`${this.storehouse} storehouse is empty`)
        } else {
            let sortedArr = this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));
            let productsString = sortedArr.map(x => `${x.productName}/Size:${x.size}/Quantity:${x.quantity}/Price:${x.price}`).join('\n');
            return `${this.storehouse} storehouse in ${this.location} available products:\n${productsString}`;
        }
    }
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.sendProduct("Sweather", "M"));




