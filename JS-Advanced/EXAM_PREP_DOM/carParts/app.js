window.addEventListener("load", solve);

function solve() {
  const carModelRef = document.getElementById("car-model");
  const carYearRef = document.getElementById("car-year");
  const partNameRef = document.getElementById("part-name");
  const partNumRef = document.getElementById("part-number");
  const conditionRef = document.getElementById("condition");
  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", onDefault);
  const partInfoRef = document.querySelector(".info-list");
  const confirmInfoRef = document.querySelector(".confirm-list");
  const completeImgRef = document.getElementById("complete-img");
  const completeTextRef = document.getElementById("complete-text");

  function onDefault(e) {
    e.preventDefault();
    completeImgRef.style.visibility = 'hidden';
    completeTextRef.textContent = '';
    if (
      carModelRef.value == "" ||
      carYearRef.value == "" ||
      partNameRef.value == "" ||
      partNumRef.value == "" ||
      conditionRef.value == ""
    ) {
      return;
    }
    if (carYearRef.value < 1980 || carYearRef.value > 2023) {
      return;
    }

    let carModel = carModelRef.value;
    let carYear=  carYearRef.value;
    let partName = partNameRef.value;
    let partNum = partNumRef.value;
    let condition = conditionRef.value;

    let liElement = document.createElement('li');
    liElement.classList.add('part-content');
    let article = document.createElement('article');
    
    let parModel = document.createElement('p');
    parModel.textContent = `Car Model: ${carModel}`;
    
    let parYear = document.createElement('p');
    parYear.textContent = `Car Year: ${carYear}`;

    let parPartName = document.createElement('p');
    parPartName.textContent = `Part Name: ${partName}`;

    let parPartNum = document.createElement('p');
    parPartNum.textContent = `Part Number: ${partNum}`;

    let parCondition = document.createElement('p');
    parCondition.textContent = `Condition: ${condition}`;

    article.appendChild(parModel);
    article.appendChild(parYear);
    article.appendChild(parPartName);
    article.appendChild(parPartNum);
    article.appendChild(parCondition);

    liElement.appendChild(article);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    let continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-btn");
    continueBtn.textContent = "Continue";

    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);

    partInfoRef.appendChild(liElement);

    editBtn.addEventListener('click', onEdit);
    continueBtn.addEventListener('click', onContinue);

    nextBtn.disabled = true;
    carModelRef.value = "";
    carYearRef.value = "";
    partNameRef.value = "";
    partNumRef.value = "";
    conditionRef.value = "";

    function onEdit(e) {
        liElement.remove();
        nextBtn.disabled = false;
        carModelRef.value = carModel;
        carYearRef.value =carYear;
        partNameRef.value =partName;
        partNumRef.value =partNum;
        conditionRef.value =condition;
    }

    function onContinue(e) {
        liElement.remove();
        let newLiElement = document.createElement('li');
        newLiElement.classList.add('part-content');
        newLiElement.appendChild(article);
        
        let confirmBtn = document.createElement("button");
        confirmBtn.classList.add("confirm-btn");
        confirmBtn.textContent = "Confirm";
    
        let cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.textContent = "Cancel";

        newLiElement.appendChild(confirmBtn);
        newLiElement.appendChild(cancelBtn);
       
        confirmInfoRef.appendChild(newLiElement);
    
        confirmBtn.addEventListener("click", onConfirm);
        cancelBtn.addEventListener("click", onCancel);

        function onCancel(e) {
                nextBtn.disabled = false;
                newLiElement.remove();
        }

        function onConfirm(e) {
                newLiElement.remove();
                nextBtn.disabled= false;
                completeImgRef.style.visibility = 'visible';
                completeTextRef.textContent = 'Part is Ordered!'
        }

    }
  }
}
