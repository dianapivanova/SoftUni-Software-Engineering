window.addEventListener("load", solve);

function solve() {
  const nameRef = document.getElementById('name');
  const emailRef =document.getElementById('email');
  const contactNumRef = document.getElementById('contact-number');
  const classTypeRef = document.getElementById('class-type');
  const classTimeRef = document.getElementById('class-time');
  const previewList = document.querySelector('.class-info');
  const confirmList = document.querySelector('.confirm-class');
  const main = document.getElementById('main');
  const body = document.querySelector('body');
  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', onDefault);

  function onDefault(e) {
    e.preventDefault();
    if(nameRef.value == '' || 
    emailRef.value == '' ||
    contactNumRef.value == '' ||
    classTimeRef.value == '' ||
    classTypeRef.value == '') {
      return;
    }

    let name = nameRef.value;
    let email = emailRef.value;
    let contact = contactNumRef.value;
    let classTime = classTimeRef.value;
    let classType = classTypeRef.value;

    let liElement = document.createElement('li');
    liElement.classList.add('info-item');
    let article = document.createElement('article');
    article.classList.add('personal-info');
    let par1 = document.createElement('p');
    par1.textContent = name;
    let par2 = document.createElement('p');
    par2.textContent = email;
    let par3 = document.createElement('p');
    par3.textContent = contact;
    let par4 = document.createElement('p');
    par4.textContent = classType;
    let par5 = document.createElement('p');
    par5.textContent = classTime;

    article.appendChild(par1);
    article.appendChild(par2);
    article.appendChild(par3);
    article.appendChild(par4);
    article.appendChild(par5);
    liElement.appendChild(article);
    
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    let continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-btn");
    continueBtn.textContent = "Continue";

    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);

    previewList.appendChild(liElement);

    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);

    nextBtn.disabled = true;
    nameRef.value = '' ;
    emailRef.value = '';
    contactNumRef.value = '';
    classTimeRef.value = '';
    classTypeRef.value = '';

    function onEdit(e) {
      liElement.remove();
      nextBtn.disabled = false;
      nameRef.value = name;
      emailRef.value = email;
      contactNumRef.value = contact;
      classTimeRef.value = classTime;
      classTypeRef.value = classType;
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

      confirmList.appendChild(newLiElement);

      cancelBtn.addEventListener('click', onCancel);
      confirmBtn.addEventListener('click', onConfirm);


      function onCancel(e) {
        nextBtn.disabled = false;
        newLiElement.remove();
      }

      function onConfirm(e) {
        main.remove();
        let h1El = document.createElement('p');
        h1El.id = 'thank-you';
        h1El.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!';
        let doneBtn = document.createElement('button');
        doneBtn.textContent = 'Done';
        doneBtn.id = 'done-btn';
        body.appendChild(h1El);
        body.appendChild(doneBtn);
        doneBtn.addEventListener('click', onDone);

        function onDone(e) {
          location.reload();
        }
      }
    }
  }
}
