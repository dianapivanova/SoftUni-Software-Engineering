class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value
    }

    toString() {
        return ('0x' + this.value.toString(16))
    }

}