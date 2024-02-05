function rectangle(width, height, color) {

    let myObj = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1),
        calcArea() {
            return width * height
        }
    }

    return myObj
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
