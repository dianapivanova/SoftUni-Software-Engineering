window.addEventListener("load", solve);

function solve() {
  const firsttNameRef = document.getElementById('first-name');
  const lastnameRef = document.getElementById('last-name');
  const ageRef = document.getElementById('age');
  const storyTitleRef = document.getElementById('story-title');
  const genreRef = document.getElementById('genre');
  const storyRef = document.getElementById('story');
  const previewListRef = document.getElementById('preview-list');
  const mainDiv = document.getElementById('main');

  const publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', onSubmit);

  function onSubmit(e) {
    e.preventDefault();
    if (firsttNameRef.value == '' ||
      lastnameRef.value == '' ||
      ageRef.value == '' ||
      storyTitleRef.value == '' ||
      genreRef.value == '' ||
      storyRef.value == '') {
      return;
    }

    let firstName = firsttNameRef.value;
    let lastName = lastnameRef.value;
    let age = ageRef.value;
    let storyTitle = storyTitleRef.value;
    let genre = genreRef.value;
    let story = storyRef.value;

    let liElement = document.createElement('li');
    liElement.classList.add('story-info');

    let article = document.createElement('article');
    let h4El = document.createElement('h4');
    h4El.textContent = `Name: ${firstName} ${lastName}`;
    let agePar = document.createElement('p');
    agePar.textContent = `Age: ${age}`;
    let titlePar = document.createElement('p');
    titlePar.textContent = `Title: ${storyTitle}`;
    let genrePar = document.createElement('p');
    genrePar.textContent = `Genre: ${genre}`;
    let storyPar = document.createElement('p');
    storyPar.textContent = story;

    article.appendChild(h4El);
    article.appendChild(agePar);
    article.appendChild(titlePar);
    article.appendChild(genrePar);
    article.appendChild(storyPar);

    liElement.appendChild(article);

    let saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save Story';
    saveBtn.classList.add('save-btn');
    saveBtn.addEventListener('click', onSave);

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Story';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', onEdit);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Story';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', onDelete);

    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(deleteBtn);

    previewListRef.appendChild(liElement);

    firsttNameRef.value = '';
    lastnameRef.value = '';
    ageRef.value = '';
    storyTitleRef.value = '';
    genreRef.value = '';
    storyRef.value = '';

    publishBtn.disabled = true;

    function onEdit() {
      liElement.remove();
      publishBtn.disabled = false;
      firsttNameRef.value = firstName;
      lastnameRef.value = lastName;
      ageRef.value = age;
      storyTitleRef.value = storyTitle;
      genreRef.value = genre
      storyRef.value = story;

    }

    function onSave() {
      mainDiv.innerHTML = '';
      let h1El = document.createElement('h1');
      h1El.textContent = "Your scary story is saved!"
      mainDiv.appendChild(h1El);
    }

    function onDelete() {
      publishBtn.disabled = false;
      liElement.remove();
    }
  }
}
