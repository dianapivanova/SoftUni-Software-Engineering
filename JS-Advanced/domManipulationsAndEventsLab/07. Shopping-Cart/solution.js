function solve() {
   Array.from(document.querySelectorAll("button.add-product")).forEach(x => x.addEventListener('click', onAdd));
   document.querySelector(".checkout").addEventListener("click", checkout);
   const products = {
      'Bread': 0.80,
      'Milk': 1.09,
      'Tomatoes': 0.99
   }

   let output = document.querySelector("textarea");
   const bought = [];
   let total = 0;
   let textOutput = '';

   function onAdd(event) {
      const currentProduct = event.target.parentNode.parentNode.querySelector(".product-title").textContent;
      textOutput = `Added ${currentProduct} for ${products[currentProduct].toFixed(2)} to the cart.\n`;
      total += products[currentProduct];
      if (!bought.includes(currentProduct)) {
         bought.push(currentProduct);
      }
      output.value += textOutput
   }

   function checkout() {
      textOutput = `You bought ${bought.join(', ')} for ${total.toFixed(2)}.`;
      output.value += textOutput;
      Array.from(document.querySelectorAll('button')).forEach(x => x.disabled = true);
   }
}