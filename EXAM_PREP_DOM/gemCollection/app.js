window.addEventListener("load", solve);

function solve() {
  const previewList = document.getElementById("preview-list");
  const collection = document.getElementById("collection");
  const gemNameRef = document.getElementById("gem-name");
  const colorRef = document.getElementById("color");
  const caratsRef = document.getElementById("carats");
  const priceRef = document.getElementById("price");
  const typeRef = document.getElementById("type");
  const addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", onDefault);

  function onDefault(e) {
    e.preventDefault();
    if (
      gemNameRef.value == "" ||
      colorRef.value == "" ||
      caratsRef.value == "" ||
      priceRef.value == "" ||
      typeRef.value == ""
    ) {
      return;
    }

    let gemName = gemNameRef.value;
    let color = colorRef.value;
    let carats = caratsRef.value;
    let price = priceRef.value;
    let type = typeRef.value;

    let liElement = document.createElement("li");
    liElement.classList.add("gem-info");
    let article = document.createElement("article");
    let gemNamePar = document.createElement("h4");
    gemNamePar.textContent = `${gemName}`;
    let colorPar = document.createElement("p");
    colorPar.textContent = `Color: ${color}`;
    let caratsPar = document.createElement("p");
    caratsPar.textContent = `Carats: ${carats}`;
    let pricePar = document.createElement("p");
    pricePar.textContent = `Price: ${price}$`;
    let typePar = document.createElement("p");
    typePar.textContent = `Type: ${type}`;

    article.appendChild(gemNamePar);
    article.appendChild(colorPar);
    article.appendChild(caratsPar);
    article.appendChild(pricePar);
    article.appendChild(typePar);
    liElement.appendChild(article);

    let saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save to Collection";

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit Information";

    let cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.textContent = "Cancel";

    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(cancelBtn);

    previewList.appendChild(liElement);

    saveBtn.addEventListener("click", onSave);
    editBtn.addEventListener("click", onEdit);
    cancelBtn.addEventListener("click", onCancel);

    addBtn.disabled = true;
    gemNameRef.value = "";
    colorRef.value = "";
    caratsRef.value = "";
    priceRef.value = "";
    typeRef.value = "";

    function onSave(e) {
        let newLiElement = document.createElement('li');
        let newP = document.createElement('p');
        newP.classList.add('collection-item');
        newP.textContent = `${gemName} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;
        newLiElement.appendChild(newP);
        collection.appendChild(newLiElement);
        liElement.remove();
        addBtn.disabled = false;
    }
    function onEdit(e) {
        liElement.remove();
        addBtn.disabled = false;
        gemNameRef.value = gemName;
        colorRef.value = color;
        caratsRef.value = carats;
        priceRef.value = price;
        typeRef.value = type;
    }

    function onCancel(e) {
        liElement.remove();
        addBtn.disabled = false;
    }
  }
}
