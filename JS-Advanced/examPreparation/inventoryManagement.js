class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.')
        }
        if (this.items.length >= this.capacity) {
            throw new Error('The inventory is already full.')
        }

        let findItem = this.items.find(x => x.itemName == itemName);

        if (!findItem) {
            this.items.push({ itemName, quantity })
        } else {
            findItem.quantity += quantity;
        }

        return `Added ${quantity} ${itemName}(s) to the inventory.`
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.')
        }
        let findItem = this.items.find(x => x.itemName == itemName);

        if (!findItem) {
            throw new Error(`The item ${itemName} is not available in the inventory.`)
        }
        if (quantity > findItem.quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`)
        }
        findItem.quantity -= quantity;
        if (findItem.quantity == 0) {
            let idx = this.items.indexOf(findItem)
            this.items.splice(idx, 1);
            this.outOfStock.push(findItem.itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`
    }
    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.')
        }
        let findItem = this.items.find(x => x.itemName == itemName);

        if (!findItem) {
            this.items.push({ itemName, quantity })
        } else {
            findItem.quantity += quantity;
        }

        let findOutOfStockItem = this.outOfStock.find(x => x.itemName == itemName)
        if (findOutOfStockItem) {
            let idx = this.outOfStock.indexOf(findOutOfStockItem);
            this.outOfStock.splice(idx, 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`
    }
    getInventorySummary() {
        if (this.outOfStock.length == 0) {
            return (
                `Current Inventory:` + "\n" +
                `${this.items.map(x => `${x.itemName}: ${x.quantity}`).join('\n')}`
            )
        } else {
            return (
                `Current Inventory:` +
                "\n" +
                `${this.items.map(x => `${x.itemName}: ${x.quantity}`).join('\n')}` +
                "\n" +
                `Out of Stock: ${this.outOfStock.join(', ')}`
            )
        }
    }
}
const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());


