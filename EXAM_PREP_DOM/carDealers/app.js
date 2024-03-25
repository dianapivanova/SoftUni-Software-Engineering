window.addEventListener("load", solve);

function solve() {
  const makeRef = document.getElementById("make");
  const modelRef = document.getElementById("model");
  const yearRef = document.getElementById("year");
  const fuelRef = document.getElementById("fuel");
  const originlCostRef = document.getElementById("original-cost");
  const sellingPriceRef = document.getElementById("selling-price");
  const publishBtn = document.getElementById("publish");
  publishBtn.addEventListener("click", onDefault);
  const table = document.getElementById("table-body");
  const tableSoldCars = document.getElementById("cars-list");
  const profitSpan = document.getElementById("profit");
  let totalProfit = 0;

  function onDefault(e) {
    e.preventDefault();
    if (
      makeRef.value == "" ||
      modelRef.value == "" ||
      yearRef.value == "" ||
      fuelRef.value == "" ||
      originlCostRef.value == "" ||
      sellingPriceRef.value == ""
    ) {
      return;
    }
    if(Number(originlCostRef.value) > Number(sellingPriceRef.value)) {
      return;
    }

    let make = makeRef.value;
    let model = modelRef.value;
    let year = yearRef.value;
    let fuel = fuelRef.value;
    let originalCost = originlCostRef.value;
    let sellingPrice = sellingPriceRef.value;

    let tRow = document.createElement('tr');
    tRow.classList.add('row');
    let td1 = document.createElement('td');
    td1.textContent = make;
    let td2 = document.createElement('td');
    td2.textContent = model;
    let td3 = document.createElement('td');
    td3.textContent = year;
    let td4 = document.createElement('td');
    td4.textContent = fuel;
    let td5 = document.createElement('td');
    td5.textContent = originalCost;
    let td6 = document.createElement('td');
    td6.textContent = sellingPrice;
 

    tRow.appendChild(td1);
    tRow.appendChild(td2);
    tRow.appendChild(td3);
    tRow.appendChild(td4);
    tRow.appendChild(td5);
    tRow.appendChild(td6);

    let editBtn = document.createElement('button');
    editBtn.textContent = `Edit`;
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');

    let sellBtn = document.createElement('button');
    sellBtn.textContent = `Sell`;
    sellBtn.classList.add('action-btn');
    sellBtn.classList.add('sell');

    let td7 = document.createElement('td');
    td7.appendChild(sellBtn);
    td7.appendChild(editBtn);
    tRow.appendChild(td7);
    table.appendChild(tRow);

    editBtn.addEventListener('click', onEdit);
    sellBtn.addEventListener('click', onSell);

    makeRef.value = "";
    modelRef.value = "";
    yearRef.value = "";
    fuelRef.value = "";
    originlCostRef.value = "";
    sellingPriceRef.value = "";

    function onEdit(e) {
      tRow.remove();
      makeRef.value = make;
      makeRef.value = model;
      yearRef.value = year;
      fuelRef.value = fuel;
      originlCostRef.value = originalCost;
      sellingPriceRef.value = sellingPrice;
    }

    function onSell(e) {
      tRow.remove();
      let liElement = document.createElement('li');
      liElement.classList.add('each-list');
      const span1 = document.createElement('span');
      span1.textContent = `${make} ${model}`;
      const span2 = document.createElement('span');
      span2.textContent = year;
      const span3 = document.createElement('span');
      const diff = Number(sellingPrice) - Number(originalCost);
      span3.textContent = diff;

      liElement.appendChild(span1);
      liElement.appendChild(span2);
      liElement.appendChild(span3);
      tableSoldCars.appendChild(liElement);

      totalProfit += diff;
      profitSpan.textContent = `${totalProfit.toFixed(2)}`;
    }
  }
}
