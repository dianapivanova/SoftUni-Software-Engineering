function solution() {

    const storage = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 }
    const SUCCESS_MSG = 'Success'
    const ERROR_MSG = (ingredient) => `Error: not enough ${ingredient} in stock`

    function getParams(input) {
        let tokens = input.split(' ')
        let command = tokens[0]
        let recipes = {
            apple: { carbohydrate: 1, flavour: 2 },
            lemonade: { carbohydrate: 10, flavour: 20 },
            burger: { carbohydrate: 5, fat: 7, flavour: 3 },
            eggs: { protein: 5, fat: 1, flavour: 1 },
            turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
        }

        function prepare(recipe, quantity) {
            switch (recipe) {
                case 'apple':
                    storage.carbohydrate -= 1 * quantity;
                    storage.flavour -= 2 * quantity; break;
                case 'lemonade':
                    storage.carbohydrate -= 10 * quantity;
                    storage.flavour -= 20 * quantity; break;
                case 'burger':
                    storage.carbohydrate -= 5 * quantity;
                    storage.fat -= 7 * quantity;
                    storage.flavour -= 3 * quantity; break;
                case 'eggs':
                    storage.protein -= 5 * quantity;
                    storage.fat -= 1 * quantity;
                    storage.flavour -= 1 * quantity; break;
                case 'turkey':
                    storage.protein -= 10 * quantity;
                    storage.carbohydrate -= 10 * quantity;
                    storage.fat -= 10 * quantity;
                    storage.flavour -= 10 * quantity; break;
            }
        }

        function checkStorage(recipe, recipeQuantity) {
            let missingIngredient = ''
            for (let entries of Object.entries(recipes[recipe])) {
                let [microelement, qty] = entries
                if (qty * recipeQuantity > storage[microelement]) {
                    missingIngredient = microelement;
                    ; break;
                }
            }
            return missingIngredient;
        }

        if (command == 'restock') {
            let microElement = tokens[1]
            let qty = Number(tokens[2])
            storage[microElement] += qty
            return SUCCESS_MSG;
        } else if (command == 'prepare') {
            let recipe = tokens[1]
            let qty = Number(tokens[2])
            if (checkStorage(recipe, qty) == "") {
                prepare(recipe, qty);
                return SUCCESS_MSG;
            } else {
                return ERROR_MSG(checkStorage(recipe, qty))
            }
        } else {
            return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
        }
    }

    return getParams
}

let manager = solution();
console.log(manager("prepare turkey 1"))
console.log(manager("restock protein 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock carbohydrate 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock fat 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock flavour 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("report"))

