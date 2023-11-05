function solve(array) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }

    }

    let catArray = []

    for (let entries of array) {
        [name, age] = entries.split(' ')
        let cat = new Cat(name, age)
        catArray.push(cat)
    }

    for (let cat of catArray) {
        cat.meow()
    }

}
solve(['Mellow 2', 'Tom 5'])