function petshop(input) {

    let dogs = Number(input[0]);

    let cat = Number(input[1]);

    let total = (dogs * 2.50 + cat * 4);

    console.log(total.toFixed(2) + " lv.");
}
petshop()