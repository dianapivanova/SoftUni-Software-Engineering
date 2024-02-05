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
        if (isValid(index)) {
            collection.splice(index, 1);
            collection.sort((a, b) => (a - b))
            this.size--
        }
    }

    function get(index) {
        if (isValid(index)) {
            return collection[index]
        }
    }

    function isValid(index) {
        if (index >= 0 && index < collection.length) {
            return true;
        } else {
            return false;
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

