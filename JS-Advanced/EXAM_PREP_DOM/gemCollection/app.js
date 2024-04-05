window.addEventListener("load", solve);

function solve() {
  const gemNameRef = document.getElementById("gem-name");
  const colorRef = document.getElementById("color");
  const caratsRef = document.getElementById("carats");
  const priceRef = document.getElementById("price");
  const preciousRef = document.getElementById("type");
  const addBtn = document.getElementById("add-btn");
  const previewList = document.getElementById("preview-list");
  const collection = document.getElementById("collection");

  addBtn.addEventListener("click", onDefault);

  function onDefault(e) {
    e.preventDefault();
    if (
      gemNameRef.value == "" ||
      colorRef.value == "" ||
      caratsRef.value == "" ||
      priceRef.value == "" ||
      preciousRef.value == ""
    ) {
      return;
    }

    let gemName = gemNameRef.value;
    let color = colorRef.value;
    let carats = caratsRef.value ;
    let price = priceRef.value;
    let precious = preciousRef.value;

    const liElement = document.createElement('li');
    liElement.classList.add('gem-info');
    const article = document.createElement('article');
    const h4El = document.createElement('h4');
    h4El.textContent = gemName;
    const par1 = document.createElement('p');
    par1.textContent = `Color: ${color}`;
    const par2 = document.createElement('p');
    par2.textContent = `Carats: ${carats}`;
    const par3 = document.createElement('p');
    par3.textContent = `Price: ${price}$`;
    const par4 = document.createElement('p');
    par4.textContent = `Type: ${precious}`;

    article.appendChild(h4El);
    article.appendChild(par1);
    article.appendChild(par2);
    article.appendChild(par3);
    article.appendChild(par4);
    liElement.appendChild(article);

    const saveBtn = document.createElement('button');
    saveBtn.textContent = `Save to Collection`;
    saveBtn.classList.add('save-btn');
    
    const editBtn = document.createElement('button');
    editBtn.textContent = `Edit information`;
    editBtn.classList.add('edit-btn');

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = `Cancel`;
    cancelBtn.classList.add('cancel-btn');

    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(cancelBtn);
    previewList.appendChild(liElement);

    saveBtn.addEventListener('click', onSave);
    editBtn.addEventListener('click', onEdit);
    cancelBtn.addEventListener('click', onCancel);

    addBtn.disabled = true;
    gemNameRef.value = ""
    colorRef.value = ""
    caratsRef.value = ""
    priceRef.value = ""
    preciousRef.value = ""

    function onSave(e) {
      liElement.remove();
      let newLiElement = document.createElement('li');
      let par = document.createElement('p');
      par.classList.add('collection-item');4
      par.textContent = `${gemName} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${precious}`;
      newLiElement.appendChild(par);
      collection.appendChild(newLiElement);
    }

    function onEdit(e) {
      liElement.remove();
      addBtn.disabled = false;
      gemNameRef.value = gemName
      colorRef.value = color
      caratsRef.value = carats;
      priceRef.value = price;
      preciousRef.value = precious;
    }

    function onCancel(e) {
      liElement.remove();
      addBtn.disabled = false;
    }
  }
}
