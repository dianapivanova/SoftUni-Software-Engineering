class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(products) {
        let result = [];
        for(let product of products) {
            let [name, qty, totalPrice] = product.split(' ');
            qty = Number(qty);
            totalPrice = Number(totalPrice);
            if(totalPrice <= this.budgetMoney) {
                this.budgetMoney -= totalPrice;
                if(this.stockProducts.hasOwnProperty(product)) {
                    this.stockProducts[product] += qty;
                } else {
                    this.stockProducts[product] = qty;
                }
                result.push(`Successfully loaded ${qty} ${name}`)
            } else {
                result.push(`There was not enough money to load ${qty} ${name}`)
            }
        }

        return result.join("\n")

    }
    addToMenu(meal, neededProducts, price) {
        if(this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`
        }
        let productsObj = {};
        for(let productInfo of neededProducts) {
            let [product, qty] = productInfo.split(' ');
            qty = Number(qty);
            productsObj[product] = qty;
        }
        this.menu[meal] = {products: productsObj, price: price};

        if(Object.keys(this.menu).length == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        } else {
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        }
    }
    showTheMenu() {
        if(Object.keys(this.menu).length == 0) {
            return `Our menu is not ready yet, please come later...`;
        } else {
            let result = [];
            for(let entries of Object.entries(this.menu)) {
                result.push(`${entries[0]} - $ ${entries[1].price}`)
            }
            return result.join("\n")
        }
    }
    makeTheOrder(meal) {
        if(!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let neededProducts = Object.entries(this.menu[meal].products);
        for(let [product, qty] of neededProducts) {
            if(qty > this.stockProducts[product]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }
        for(let [product, qty] of neededProducts) {
            this.stockProducts[product] -= qty;
        }
        let price = this.menu[meal].price
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`
    }
}
let kitchen = new Restaurant(5);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));


