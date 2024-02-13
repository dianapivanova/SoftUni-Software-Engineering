class List {
    collection = [];
    size = 0;
    add(el) {
        this.collection.push(el);
        this.collection = this.collection.sort((a, b) => (a[0] - b[0]));
        this.size++
    };
    remove(index) {
        if (index < 0 || index >= this.collection.length) {
            throw new Error('Invalid index');
        }
        this.collection.splice(index, 1)
        this.size--;
    };
    get(index) {
        if (index < 0 || index >= this.collection.length) {
            throw new Error('Invalid index');
        }
        return this.collection[index]
    };

}

let list = new List();
list.add(5);
list.add(3);
console.log(list.get(0));
list.remove(0);

