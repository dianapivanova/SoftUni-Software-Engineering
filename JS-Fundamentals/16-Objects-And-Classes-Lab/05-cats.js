function solve(array) {
    class Cat {
        constructor(catName, catYears) {
            this.catName = catName
            this.catYears = catYears
        }

        meow() {
            console.log(`${this.catName}, age ${this.catYears} says Meow`)
        }

    }

    let cats = []
    for (let i = 0; i < array.length; i++) {
        let catData = array[i].split(' ')
        let catName = catData[0]
        let catYears = Number(catData[1])

        let cat = new Cat(catName, catYears)
        cats.push(cat)
    }

    for (let cat of cats) {
        cat.meow()
    }

}
solve(['Mellow 2', 'Tom 5'])