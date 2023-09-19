function Main(input) {
    let totalPrice = Number(input) * 7.61;
    let discount = totalPrice * 0.18;
    let totalPriceDiscount = totalPrice - discount;

    console.log(`The final price is: ${totalPriceDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
Main(550)