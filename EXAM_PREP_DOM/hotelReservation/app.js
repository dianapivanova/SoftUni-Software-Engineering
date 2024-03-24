window.addEventListener("load", solve);

function solve() {
  const fNameRef = document.getElementById("first-name");
  const lNameRef = document.getElementById("last-name");
  const dateInRef = document.getElementById("date-in");
  const dateOutRef = document.getElementById("date-out");
  const guestRef = document.getElementById("people-count");

  const resInfoSec = document.querySelector(".info-list");
  const confirmResSec = document.querySelector(".confirm-list");
  const h1El = document.getElementById('verification');

  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", onDefault);

  function onDefault(e) {
    e.preventDefault();
    if (
      fNameRef.value == "" ||
      lNameRef.value == "" ||
      dateInRef.value == "" ||
      dateOutRef.value == "" ||
      guestRef.value == ""
    ) {
      return;
    }
    if (new Date(dateInRef.value) > new Date(dateOutRef.value)) {
      return;
    }

    let fName = fNameRef.value;
    let lName = lNameRef.value;
    let dateIn = dateInRef.value;
    let dateOut = dateOutRef.value;
    let guest = guestRef.value;

    let liElement = document.createElement("li");
    liElement.classList.add("reservation-content");
    let article = document.createElement("article");
    let h3El = document.createElement("h3");
    h3El.textContent = `Name: ${fName} ${lName}`;
    let dateInPar = document.createElement("p");
    dateInPar.textContent = `From date: ${dateIn}`;
    let dateOutPar = document.createElement("p");
    dateOutPar.textContent = `To date: ${dateOut}`;
    let guestPar = document.createElement("p");
    guestPar.textContent = `For ${guest} people`;

    article.appendChild(h3El);
    article.appendChild(dateInPar);
    article.appendChild(dateOutPar);
    article.appendChild(guestPar);

    liElement.appendChild(article);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    let continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-btn");
    continueBtn.textContent = "Continue";

    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);

    resInfoSec.appendChild(liElement);

    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);

    nextBtn.disabled = true;
    fNameRef.value = "";
    lNameRef.value = "";
    dateInRef.value = "";
    dateOutRef.value = "";
    guestRef.value = "";

    function onEdit(e) {
        nextBtn.disabled = false;
        liElement.remove();
        fNameRef.value = fName;
        lNameRef.value = lName;
        dateInRef.value = dateIn;
        dateOutRef.value = dateOut;
        guestRef.value = guest;
    }

    function onContinue(e) {
        liElement.remove();
        let newLiElement = document.createElement('li');
        newLiElement.classList.add("reservation-content");
        newLiElement.appendChild(article);

        let confirmBtn = document.createElement("button");
        confirmBtn.classList.add("confirm-btn");
        confirmBtn.textContent = "Confirm";
    
        let cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.textContent = "Cancel";

        newLiElement.appendChild(confirmBtn);
        newLiElement.appendChild(cancelBtn);

        confirmBtn.addEventListener("click", onConfirm);
        cancelBtn.addEventListener("click", onCancel);

        confirmResSec.appendChild(newLiElement);

        function onCancel(e) {
            newLiElement.remove();
            nextBtn.disabled = false;
            h1El.classList.add('reservation-cancelled');
            h1El.textContent = 'Cancelled.';
        }

        function onConfirm(e) {
            newLiElement.remove();
            nextBtn.disabled = false;
            h1El.classList.add('reservation-confirmed');
            h1El.textContent = 'Confirmed.';
        }
    }
  }
}
