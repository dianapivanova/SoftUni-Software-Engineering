window.addEventListener("load", solve);

function solve() {
  const timeRef = document.getElementById("time");
  const dateRef = document.getElementById("date");
  const placeRef = document.getElementById("place");
  const eventRef = document.getElementById("event-name");
  const emailRef = document.getElementById("email");
  const addbtn = document.getElementById("add-btn");
  addbtn.addEventListener("click", onDefault);

  const upcomingDivRef = document.getElementById("upcoming-list");
  const lastCheckDivRef = document.getElementById("check-list");
  const finishedkDivRef = document.getElementById("finished-list");
  const clearButton = document.getElementById("clear");

  function onDefault(e) {
    e.preventDefault();

    if (
      timeRef.value == "" ||
      dateRef.value == "" ||
      placeRef.value == "" ||
      eventRef.value == "" ||
      emailRef.value == ""
    ) {
      return;
    }

    let time = timeRef.value;
    let date = dateRef.value;
    let place = placeRef.value;
    let event = eventRef.value;
    let email = emailRef.value;

    let liElement = document.createElement("li");
    liElement.classList.add("event-content");
    let article = document.createElement("article");
    let parTime = document.createElement("p");
    parTime.textContent = `Begins: ${date} at: ${time}`;
    let parPlace = document.createElement("p");
    parPlace.textContent = `In: ${place} `;
    let parEvent = document.createElement("p");
    parEvent.textContent = `Event: ${event} `;
    let parContact = document.createElement("p");
    parContact.textContent = `Contact: ${email} `;
    article.appendChild(parTime);
    article.appendChild(parPlace);
    article.appendChild(parEvent);
    article.appendChild(parContact);

    liElement.appendChild(article);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    let continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-btn");
    continueBtn.textContent = "Continue";

    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);

    lastCheckDivRef.appendChild(liElement);

    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);

    addbtn.disabled = true;

    timeRef.value = "";
    dateRef.value = "";
    placeRef.value = "";
    eventRef.value = "";
    emailRef.value = "";

    function onEdit(e) {
      addbtn.disabled = false;
      liElement.remove();
      timeRef.value = time;
      dateRef.value = date;
      placeRef.value = place;
      eventRef.value = event;
      emailRef.value = email;
    }

    function onContinue(e) {
        addbtn.disabled = false;
        liElement.remove();
        let newLiElement = document.createElement('li');
        newLiElement.classList.add('event-content');
        newLiElement.appendChild(article);

        let finishBtn = document.createElement('button');
        finishBtn.classList.add('finished-btn');
        finishBtn.textContent = 'Move to Finished';
        finishBtn.addEventListener('click', onFinish);
        newLiElement.appendChild(finishBtn)
        upcomingDivRef.appendChild(newLiElement);

        function onFinish(e) {
            newLiElement.remove();

            let finalLiEl = document.createElement('li');
            finalLiEl.classList.add('event-content');
            finalLiEl.appendChild(article);
            finishedkDivRef.appendChild(finalLiEl);

            clearButton.addEventListener('click', onClear);

            function onClear(e) {
                finalLiEl.remove();
            }
        }
    }
  }
}
