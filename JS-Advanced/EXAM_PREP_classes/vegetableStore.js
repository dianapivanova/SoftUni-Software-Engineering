class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables (vegetables) {
        let result = [];
        for(let vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let findVegetable = this.availableProducts.find(x => x.type == type);
            if(!findVegetable) {
                this.availableProducts.push({type, quantity, price});
                result.push(type);
            } else {
                findVegetable.quantity += quantity;
                if(findVegetable.price < price) {
                    findVegetable.price = price
                }
            }
        }
        return `Successfully added ${result.join(', ')}`
    }
    buyingVegetables (selectedProducts) {
        let totalPrice = 0;
        for(let product of selectedProducts) {
            let [type, quantity] = product.split(' ');
            quantity = Number(quantity)
            let findVegetable = this.availableProducts.find(x => x.type == type);
            if(!findVegetable) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            };
            if(findVegetable.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            };
            let price = findVegetable.price;
            totalPrice += price * quantity
            findVegetable.quantity -= quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
        
    }
    rottingVegetable (type, quantity) {
        let findVegetable = this.availableProducts.find(x => x.type == type);
        if(!findVegetable) {
            throw new Error(`${type} is not available in the store.`)
        }
        if(findVegetable.quantity <= quantity) {
            findVegetable.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        } else {
            findVegetable.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }
    }
    revision () {
        let result = ['Available vegetables:']
        let sortedArr = this.availableProducts.sort((a, b) => a.price - b.price);
        sortedArr.map(x => result.push(`${x.type}-${x.quantity}-$${x.price}`));
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return result.join("\n")
    }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


