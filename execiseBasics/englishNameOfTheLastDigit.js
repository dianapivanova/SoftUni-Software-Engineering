function englishName(num) {

    let lastDigit = num % 10;

    if (lastDigit === 0) {
        console.log('zero');
    } else if (lastDigit === 1) {
        console.log('one');
    } else if (lastDigit === 2) {
        console.log('two');
    } else if (lastDigit === 3) {
        console.log('three');
    } else if (lastDigit === 4) {
        console.log('four');
    } else if (lastDigit === 5) {
        console.log('five');
    } else if (lastDigit === 6) {
        console.log('six');
    } else if (lastDigit === 7) {
        console.log('seven');
    } else if (lastDigit === 8) {
        console.log('eight');
    } else if (lastDigit === 9) {
        console.log('nine');
    }
}
englishName(52871)