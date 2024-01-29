function calculator(area, vol, input) {
    let output = []
    const data = JSON.parse(input);

    for (let obj of data) {
        output.push({ 'area': area.call(obj), 'volume': vol.call(obj) })
    }

    return output;
}

const input = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`

calculator(area, vol, input)

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};




