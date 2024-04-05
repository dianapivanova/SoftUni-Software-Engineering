window.addEventListener("load", solve);

function solve() {
  const firstNameRef = document.getElementById('first-name');
  const lastNameRef = document.getElementById('last-name');
  const numPeopleRef = document.getElementById('people-count');
  const fromDateRef = document.getElementById('from-date');
  const daysRef = document.getElementById('days-count');
  const nextBtn = document.getElementById('next-btn');
  const ticketPreview = document.querySelector('.ticket-info-list');
  const confirmTicket = document.querySelector('.confirm-ticket');
  const main = document.getElementById('main');
  const body = document.querySelector('body');

  nextBtn.addEventListener('click', onDefault);

  function onDefault(e) {
    e.preventDefault();
    
    if(firstNameRef.value == '' ||
    lastNameRef.value == '' ||
    numPeopleRef.value == '' ||
    fromDateRef.value == '' ||
    daysRef.value == '') {
      return;
    }

    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let numPeople = numPeopleRef.value;
    let fromDate = fromDateRef.value;
    let days = daysRef.value;

    let liElement = document.createElement('li');
    liElement.classList.add('ticket');
    let article = document.createElement('article');
    let h3El = document.createElement('h3');
    h3El.textContent = `Name: ${firstName} ${lastName}`;
    let par1 = document.createElement('p');
    par1.textContent = `From date: ${fromDate}`;
    let par2 = document.createElement('p');
    par2.textContent = `For ${days} days`;
    let par3 = document.createElement('p');
    par3.textContent = `For ${numPeople} people`;

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

    ticketPreview.appendChild(liElement);

    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);

    nextBtn.disabled = true;
    firstNameRef.value = '';
    lastNameRef.value = '';
    numPeopleRef.value = '';
    fromDateRef.value = '';
    daysRef.value = '';

    function onEdit(e) {
      nextBtn.disabled = false;
      liElement.remove();
      firstNameRef.value = firstName;
      lastNameRef.value = lastName;
      numPeopleRef.value = numPeople;
      fromDateRef.value = fromDate;
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

      confirmTicket.appendChild(newLiElement);

      cancelBtn.addEventListener('click', onCancel);
      confirmBtn.addEventListener('click', onConfirm);

      function onCancel(e) {
        newLiElement.remove();
        nextBtn.disabled = false;
      }

      function onConfirm(e) {
        main.remove();
        const h1El = document.createElement('h1');
        h1El.id = 'thank-you';
        h1El.textContent = 'Thank you, have a nice day!';
        const backBtn = document.createElement('button');
        backBtn.id = 'back-btn';
        backBtn.textContent = 'Back';
        body.appendChild(h1El);
        body.appendChild(backBtn);
        backBtn.addEventListener('click', onBack);

        function onBack() {
          location.reload();
        }
      }
    }
  }
}
