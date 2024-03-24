window.addEventListener("load", solve);

function solve() {
  const mainRef = document.getElementById("main");
  const body = document.querySelector("body");

  const fNameRef = document.getElementById("first-name");
  const lNameRef = document.getElementById("last-name");
  const peopleRef = document.getElementById("people-count");
  const dateRef = document.getElementById("from-date");
  const daysRef = document.getElementById("days-count");

  const previewSec = document.querySelector(".ticket-info-list");
  const confirmSec = document.querySelector(".confirm-ticket");

  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", onDefault);

  function onDefault(e) {
    e.preventDefault();
    if (
      fNameRef.value == "" ||
      lNameRef.value == "" ||
      peopleRef.value == "" ||
      dateRef.value == "" ||
      daysRef.value == ""
    ) {
      return;
    }

    let fName = fNameRef.value;
    let lName = lNameRef.value;
    let people = peopleRef.value;
    let date = dateRef.value;
    let days = daysRef.value;

    let liElement = document.createElement('li');
    liElement.classList.add('ticket');
    let article = document.createElement('article');
    let h3El = document.createElement('h3');
    h3El.textContent = `Name: ${fName} ${lName}`;
    let datePar = document.createElement('p');
    datePar.textContent = `From date: ${date}`;
    let daysPar = document.createElement('p');
    daysPar.textContent = `For ${days} days`;
    let peoplePar = document.createElement('p');
    peoplePar.textContent = `For ${people} people`;
    article.appendChild(h3El);
    article.appendChild(datePar);
    article.appendChild(daysPar);
    article.appendChild(peoplePar);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    let continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-btn");
    continueBtn.textContent = "Continue";

    liElement.appendChild(article);
    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);

    previewSec.appendChild(liElement);

    editBtn.addEventListener('click', onEdit);
    continueBtn.addEventListener('click', onContinue);

    nextBtn.disabled = true;
    fNameRef.value = "";
    lNameRef.value = "";
    peopleRef.value = "";
    dateRef.value = "";
    daysRef.value = "";

    function onEdit(e) {
        liElement.remove();
        nextBtn.disabled = false;
        fNameRef.value = fName;
        lNameRef.value = lName;
        peopleRef.value = people;
        dateRef.value = date;
        daysRef.value = days;
    }
    function onContinue(e) {
        liElement.remove();

        let newLiElement = document.createElement('li');
        newLiElement.classList.add('ticket-content');
        newLiElement.appendChild(article);

        let confirmBtn = document.createElement("button");
        confirmBtn.classList.add("confirm-btn");
        confirmBtn.textContent = "Confirm";
    
        let cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.textContent = "Cancel";

        newLiElement.appendChild(confirmBtn);
        newLiElement.appendChild(cancelBtn);
       
        confirmSec.appendChild(newLiElement);
    
        confirmBtn.addEventListener("click", onConfirm);
        cancelBtn.addEventListener("click", onCancel);

        function onCancel(e) {
            newLiElement.remove();
            nextBtn.disabled = false;
        }

        function onConfirm(e) {
            newLiElement.remove();
            mainRef.remove();
            let h1El = document.createElement('h1');
            h1El.id = 'thank-you';
            h1El.textContent = 'Thank you, have a nice day!';
            let backBtn = document.createElement('button');
            backBtn.id = 'back-btn'
            backBtn.textContent = 'Back';
            body.appendChild(h1El);
            body.appendChild(backBtn);
            backBtn.addEventListener('click', onReload);

            function onReload(e) {
                location.reload();
            }

        }
    }
  }
}
