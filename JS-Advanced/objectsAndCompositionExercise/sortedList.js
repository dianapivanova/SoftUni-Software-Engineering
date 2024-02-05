function createSortedList() {
    let collection = [];

    return { add, remove, get, size: 0 }

    function add(element) {
        collection.push(element);
        this.size++
        collection.sort((a, b) => a - b)
    }

    function remove(index) {
        if (checkIndex(index)) {
            collection.splice(index, 1);
            this.size--
        }
    }

    function get(index) {
        if (checkIndex(index)) {
            return collection[index]
        }
    }

    function checkIndex(index) {
        if (index >= 0 && index < collection.length) {
            return true;
        }
        return false;
    }

}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

