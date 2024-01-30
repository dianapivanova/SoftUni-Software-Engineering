function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
    let formatter = function (value) {
        return currencyFormatter(separator, symbol, symbolFirst, value);
    }
    return formatter;
}



let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));
console.log(dollarFormatter(3.1429));
console.log(dollarFormatter(2.709));

