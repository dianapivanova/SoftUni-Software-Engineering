function solve() {
   let outputField = document.querySelector('textarea')
   let buttons = document.getElementsByClassName('add-product');

   for (let button of Array.from(buttons)) {
      button.addEventListener('click', onClick)
   }

   let totalPrice = 0;
   let products = []

   function onClick(e) {
      let product = e.target.parentElement.parentElement.querySelector('.product-title').textContent;
      let price = e.target.parentElement.parentElement.querySelector('.product-line-price').textContent;
      outputField.value += `Added ${product} for ${price} to the cart.\n`
      if (!products.includes(product)) {
         products.push(product)
      }
      totalPrice += Number(price)
   }

   let checkoutButton = document.querySelector('.checkout')
   checkoutButton.addEventListener('click', checkoutClick)

   function checkoutClick(e) {
      outputField.value += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`
      checkoutButton.disabled = true;
      for (let button of Array.from(buttons)) {
         button.disabled = true;
      }
   }
}