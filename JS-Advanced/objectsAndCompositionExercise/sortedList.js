function createSortedList() {
    let collection = []
    let size = 0;
    return { add, remove, get, size }


    function add(element) {
        collection.push(element)
        collection.sort((a, b) => (a - b))
        this.size++
    }

    function remove(index) {
        if ((index >= 0 && index < this.size)) {
            collection.splice(index, 1);
            collection.sort((a, b) => (a - b))
        }
    }

    function get(index) {
        if ((index >= 0 && index < this.size)) {
            return collection[index]
        }
    }

}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

