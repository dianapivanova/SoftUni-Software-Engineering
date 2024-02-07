function solve() {
  let [inputArea, outputArea] = document.querySelectorAll('textarea');
  let [generateBtn, buyBtn] = document.querySelectorAll('button');

  generateBtn.addEventListener('click', addProduct)
  buyBtn.addEventListener('click', printProduct)

  function addProduct() {
    let productObject = JSON.parse(inputArea.value)
    let table = document.querySelector('tbody')

    for (let entry of productObject) {
      let newRow = document.createElement('tr');
      newRow.innerHTML = `
          <td><img src="${entry.img}"></td>
          <td><p>${entry.name}</p></td>
          <td><p>${entry.price}</p></td>
          <td><p>${entry.decFactor}</p></td>
          <td><input type="checkbox"></td>
      `;
      table.appendChild(newRow);
    }
  }

  function printProduct() {
    let boughtFurniture = []
    let totalPrice = 0;
    let avgFactor = 0

    let table = document.querySelectorAll('tbody tr')

    for (let row of table) {
      let mark = row.querySelector('input[type="checkbox"]')
      if (mark.checked) {
        boughtFurniture.push(row.querySelectorAll("td")[1].textContent)
        totalPrice += Number(row.querySelectorAll("td")[2].textContent)
        avgFactor += Number(row.querySelectorAll("td")[3].textContent)
      }
    }

    outputArea.value = `Bought furniture: ${boughtFurniture.join(', ')}\n`
    outputArea.value += `Total price: ${totalPrice.toFixed(2)}\n`
    outputArea.value += `Average decoration factor: ${avgFactor / boughtFurniture.length}`
  }
}
