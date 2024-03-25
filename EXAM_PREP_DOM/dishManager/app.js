window.addEventListener("load", solve);

function solve() {
  const fNameRef = document.getElementById('first-name');
  const lNameRef = document.getElementById('last-name');
  const ageRef = document.getElementById('age');
  const genderRef = document.getElementById('genderSelect');
  const descriptionRef = document.getElementById('task');
  const inProgressSec = document.getElementById('in-progress');
  const finishCookingSec = document.getElementById('finished');
  let progressCount = 0;

  const submitBtn = document.getElementById('form-btn');
  submitBtn.addEventListener('click', onSubmit);

  const clearBtn = document.getElementById('clear-btn');


  function onSubmit(e) {
    e.preventDefault();

    if(fNameRef.value == '' ||
    lNameRef.value == '' ||
    ageRef.value == '' ||
    genderRef.value == '' ||
    descriptionRef.value == '') {
      return;
    }

    let fName = fNameRef.value;
    let lName = lNameRef.value;
    let age = ageRef.value;
    let gender = genderRef.value;
    let description = descriptionRef.value;

    let liElement = document.createElement('li');
    liElement.classList.add('each-line');
    let article = document.createElement('article');
    let h4El = document.createElement('h4');
    h4El.textContent = `${fName} ${lName}`;
    let ageGenderPar = document.createElement('p');
    ageGenderPar.textContent = `${gender}, ${age}`;
    let descPar = document.createElement('p');
    descPar.textContent = `Dish description: ${description}`;

    article.appendChild(h4El);
    article.appendChild(ageGenderPar);
    article.appendChild(descPar);

    liElement.appendChild(article);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    let completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.textContent = "Mark as complete";

    liElement.appendChild(editBtn);
    liElement.appendChild(completeBtn);

    inProgressSec.appendChild(liElement);

    editBtn.addEventListener('click', onEdit);
    completeBtn.addEventListener('click', onComplete);

    progressCount +=1;
    document.getElementById('progress-count').textContent = progressCount;
    fNameRef.value = '';
    lNameRef.value = '';
    ageRef.value = '';
    genderRef.value = '';
    descriptionRef.value = '';

    function onEdit(e) {
      progressCount -=1;
      document.getElementById('progress-count').textContent = progressCount;
      liElement.remove();
      fNameRef.value = fName;
      lNameRef.value = lName;
      ageRef.value = age;
      genderRef.value = gender;
      descriptionRef.value = description;
    }

    function onComplete(e) {
      liElement.remove();
      progressCount -=1;
      document.getElementById('progress-count').textContent = progressCount;
      let newLiElement = document.createElement('li');
      newLiElement.classList.add('each-line');
      newLiElement.appendChild(article);
      finishCookingSec.appendChild(newLiElement);
    }

    clearBtn.addEventListener('click', onClear);

    function onClear(e) {
      finishCookingSec.innerHTML = '';
    }
  }
}
