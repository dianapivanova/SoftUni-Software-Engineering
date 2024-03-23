window.addEventListener("load", solve);

function solve() {
  const nameRef = document.getElementById("name");
  const emailRef = document.getElementById("email");
  const contactNumRef = document.getElementById("contact-number");
  const classTypeRef = document.getElementById("class-type");
  const classTimeRef = document.getElementById("class-time");
  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", onDefault);

  const mainRef = document.getElementById("main");
  const body = document.querySelector("body");

  const previewCl = document.querySelector(".class-info");
  const confirmCl = document.querySelector(".confirm-class");

  function onDefault(e) {
    e.preventDefault();
    if (
      nameRef.value == "" ||
      emailRef.value == "" ||
      contactNumRef.value == "" ||
      classTypeRef.value == "" ||
      classTimeRef.value == ""
    ) {
      return;
    }

    let name = nameRef.value;
    let email = emailRef.value;
    let contactNum = contactNumRef.value;
    let classType = classTypeRef.value;
    let classTime = classTimeRef.value;

    let liElement = document.createElement('li');
    liElement.classList.add('info-item');
    let article = document.createElement('article');
    article.classList.add('personal-info');
    let namePar = document.createElement('p');
    namePar.textContent = `${name}`;
    let emailPar = document.createElement('p');
    emailPar.textContent = `${email}`;
    let contactPar = document.createElement('p');
    contactPar.textContent = `${contactNum}`;
    let classTypePar = document.createElement('p');
    classTypePar.textContent = `${classType}`;
    let classTimePar = document.createElement('p');
    classTimePar.textContent = `${classTime}`;

    article.appendChild(namePar);
    article.appendChild(emailPar);
    article.appendChild(contactPar);
    article.appendChild(classTypePar);
    article.appendChild(classTimePar);
    liElement.appendChild(article);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    let continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-btn");
    continueBtn.textContent = "Continue";

    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);

    previewCl.appendChild(liElement);

    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);

    nameRef.value = "";
    emailRef.value = "";
    contactNumRef.value = "";
    classTypeRef.value = "";
    classTimeRef.value = "";
    nextBtn.disabled = true;

    function onEdit(e) {
        liElement.remove();
        nameRef.value = name;
        emailRef.value = email;
        contactNumRef.value = contactNum;
        classTypeRef.value = classType;
        classTimeRef.value = classTime;
        nextBtn.disabled = false;
    }

    function onContinue(e) {
        liElement.remove();

        let newLiElement = document.createElement('li');
        newLiElement.classList.add('continue-info');
        newLiElement.appendChild(article);

        let cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.textContent = "Cancel";
    
        let confirmBtn = document.createElement("button");
        confirmBtn.classList.add("confirm-btn");
        confirmBtn.textContent = "Confirm";
    
        newLiElement.appendChild(cancelBtn);
        newLiElement.appendChild(confirmBtn);
    
        confirmCl.appendChild(newLiElement);
    
        cancelBtn.addEventListener("click", onCancel);
        confirmBtn.addEventListener("click", onConfirm);

        function onCancel(e) {
            newLiElement.remove();
            nextBtn.disabled = false;
        }

        function onConfirm(e) {
            newLiElement.remove();
            mainRef.remove();

            let h1El = document.createElement('h1');
            h1El.textContent = `Thank you for scheduling your appointment, we look forward to seeing you!`;
            h1El.id = 'thank-you';

            let doneBtn = document.createElement('button');
            doneBtn.textContent = 'Done';
            doneBtn.id = 'done-btn';

            body.appendChild(h1El);
            body.appendChild(doneBtn);

            doneBtn.addEventListener('click', onReload);

            function onReload(e) {
                location.reload();
            }
        }

    }
  }
}
