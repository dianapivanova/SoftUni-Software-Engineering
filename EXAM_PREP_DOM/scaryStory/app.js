window.addEventListener("load", solve);

function solve() {
  const fNameRef = document.getElementById('first-name');
  const lNameRef = document.getElementById('last-name');
  const ageRef = document.getElementById('age');
  const storyTitleRef = document.getElementById('story-title');
  const genreRef = document.getElementById('genre');
  const storyRef = document.getElementById('story');
  const publishBtn = document.getElementById('form-btn');

  const main = document.getElementById('main');

  const previewSec = document.getElementById('preview-list');

  publishBtn.addEventListener('click', onDefault);

  function onDefault(e) {
    e.preventDefault();
    if(fNameRef.value == '' ||
    lNameRef.value == '' ||
    ageRef.value == '' ||
    storyTitleRef.value == '' ||
    genreRef.value == '' ||
    storyRef.value == ''
    ) {
      return;
    }

    let fName = fNameRef.value;
    let lName = lNameRef.value;
    let age = ageRef.value;
    let storyTitle = storyTitleRef.value;
    let genre = genreRef.value;
    let story = storyRef.value;

    let liElement = document.createElement('li');
    liElement.classList.add('story-info');
    let article = document.createElement('article');
    let h4El = document.createElement('h4');
    h4El.textContent = `Name: ${fName} ${lName}`;
    let parAge = document.createElement('p');
    parAge.textContent = `Age: ${age}`;
    let parTitle = document.createElement('p');
    parTitle.textContent = `Title: ${storyTitle}`;
    let parGenre = document.createElement('p');
    parGenre.textContent = `Genre: ${genre}`;
    let parDescription = document.createElement('p');
    parDescription.textContent = `${story}`;

    article.appendChild(h4El);
    article.appendChild(parAge);
    article.appendChild(parTitle);
    article.appendChild(parGenre);
    article.appendChild(parDescription);

    liElement.appendChild(article);

    let saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save Story";

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit Story";

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete Story";

    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(deleteBtn);

    saveBtn.addEventListener('click', onSave);
    editBtn.addEventListener('click', onEdit);
    deleteBtn.addEventListener('click', onDelete);

    previewSec.appendChild(liElement)

    publishBtn.disabled = true;
    fNameRef.value = '';
    lNameRef.value = '';
    ageRef.value = '';
    storyTitleRef.value = '';
    genreRef.value = '';
    storyRef.value = '';

    function onSave(e) {
      main.innerHTML = '';
      let h1El = document.createElement('h1');
      h1El.textContent = 'Your scary story is saved!';
      main.appendChild(h1El);
    }

    function onEdit(e) {
      liElement.remove();
      fNameRef.value = fName;
      lNameRef.value = lName;
      ageRef.value = age;
      storyTitleRef.value = storyTitle ;
      genreRef.value = genre;
      storyRef.value = story;
      publishBtn.disabled = false;
    }

    function onDelete(e) {
      liElement.remove();
      publishBtn.disabled = false;
    }
  }

}
