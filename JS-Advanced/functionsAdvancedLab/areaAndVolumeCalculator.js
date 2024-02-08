function calculator(area, vol, input) {
    let figures = JSON.parse(input);
    let result = []
    for (let figure of figures) {
        result.push({ 'area': area.call(figure), 'volume': vol.call(figure) })
    }

    return result
}
const input = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};


let fn = calculator(area, vol, input)
console.log(fn)

//[
// { area: 2, volume: 20 },
// { area: 49, volume: 490 },
// { area: 10, volume: 100 }
// ]




