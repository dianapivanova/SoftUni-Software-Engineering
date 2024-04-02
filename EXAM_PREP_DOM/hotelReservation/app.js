window.addEventListener("load", solve);

function solve() {
  const firstNameRef = document.getElementById("first-name");
  const lastNameRef = document.getElementById("last-name");
  const dateInRef = document.getElementById("date-in");
  const dateOutRef = document.getElementById("date-out");
  const peopleCountRef = document.getElementById("people-count");
  const nextBtn = document.getElementById("next-btn");
  const infoList = document.querySelector(".info-list");
  const confirmList = document.querySelector(".confirm-list");
  const verification = document.getElementById("verification");

  nextBtn.addEventListener("click", onDefault);

  function onDefault(e) {
    e.preventDefault();
    if (
      firstNameRef.value == "" ||
      lastNameRef.value == "" ||
      dateInRef.value == "" ||
      dateOutRef.value == "" ||
      peopleCountRef.value == ""
    ) {
      return;
    }
    if (new Date(dateInRef.value) > new Date(dateOutRef.value)) {
      return;
    }


    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let dateIn = dateInRef.value;
    let dateOut = dateOutRef.value;
    let people = peopleCountRef.value;

    let liElement = document.createElement("li");
    liElement.classList.add("reservation-content");
    let article = document.createElement("article");
    let h3El = document.createElement("h3");
    h3El.textContent = `Name: ${firstName} ${lastName}`;
    let par1 = document.createElement("p");
    par1.textContent = `From date: ${dateIn}`;
    let par2 = document.createElement("p");
    par2.textContent = `To date: ${dateOut}`;
    let par3 = document.createElement("p");
    par3.textContent = `For ${people} people`;

    article.appendChild(h3El);
    article.appendChild(par1);
    article.appendChild(par2);
    article.appendChild(par3);

    liElement.appendChild(article);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    let continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-btn");
    continueBtn.textContent = "Continue";

    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);

    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);

    infoList.appendChild(liElement);

    nextBtn.disabled = true;
    firstNameRef.value = "";
    lastNameRef.value = "";
    dateInRef.value = "";
    dateOutRef.value = "";
    peopleCountRef.value = "";

    function onEdit(e) {
      nextBtn.disabled = false;
      liElement.remove();
      firstNameRef.value = firstName;
      lastNameRef.value = lastName;
      dateInRef.value = dateIn;
      dateOutRef.value = dateOut;
      peopleCountRef.value = people;
    }

    function onContinue(e) {
      liElement.remove();
      let newLiElement = document.createElement("li");
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

      confirmList.appendChild(newLiElement);

      confirmBtn.addEventListener("click", onConfirm);
      cancelBtn.addEventListener("click", onCancel);

      function onConfirm(e) {
        newLiElement.remove();
        nextBtn.disabled = false;
        verification.classList.add("reservation-confirmed");
        verification.textContent = `Confirmed.`;
      }

      function onCancel(e) {
        newLiElement.remove();
        nextBtn.disabled = false;
        verification.classList.add("reservation-cancelled");
        verification.textContent = `Cancelled.`;
      }
    }
  }
}
