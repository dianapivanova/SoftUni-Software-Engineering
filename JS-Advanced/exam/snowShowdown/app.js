window.addEventListener("load", solve);

function solve() {

  const nameRef = document.getElementById('snowman-name');
  const heightRef = document.getElementById('snowman-height');
  const locationRef = document.getElementById('location');
  const creatorRef = document.getElementById('creator-name');
  const specialAttributeRef = document.getElementById('special-attribute');
  const snowManPreviewSec = document.querySelector('.snowman-preview');
  const yourSnowmanSec = document.querySelector('.snow-list');
  let imgRef = document.getElementById('back-img');
  const mainRef = document.querySelector('main')
  const bodyRef = document.querySelector('body')

  const addBtn = document.querySelector('.add-btn');

  addBtn.addEventListener('click', onDefault);

  function onDefault(e) {
    e.preventDefault();


    let name = nameRef.value;
    let height = heightRef.value;
    let locationV = locationRef.value;
    let creator = creatorRef.value;
    let specialAttribute = specialAttributeRef.value;

    if (nameRef.value == ''
      || heightRef.value == ''
      || locationRef.value == ''
      || creatorRef.value == ''
      || specialAttributeRef.value == '') {
      return;
    }


    nameRef.value = '';
    heightRef.value = '';
    locationRef.value = '';
    creatorRef.value = '';
    specialAttributeRef.value = '';

    addBtn.disabled = true;

    let liElement = document.createElement('li')
    liElement.setAttribute('class', 'snowman-info')

    let article = document.createElement('article')
    let namePar = document.createElement('p')
    namePar.textContent = `Name: ${name}`
    let heightPar = document.createElement('p')
    heightPar.textContent = `Height: ${height}`
    let locationPar = document.createElement('p')
    locationPar.textContent = `Location: ${locationV}`
    let creatorPar = document.createElement('p')
    creatorPar.textContent = `Creator: ${creator}`
    let attributePar = document.createElement('p')
    attributePar.textContent = `Attribute: ${specialAttribute}`

    article.appendChild(namePar);
    article.appendChild(heightPar);
    article.appendChild(locationPar);
    article.appendChild(creatorPar);
    article.appendChild(attributePar);

    liElement.appendChild(article);

    let divEl = document.createElement('div');
    divEl.setAttribute('class', 'btn-container');
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('class', 'edit-btn');
    let nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.setAttribute('class', 'next-btn');
    snowManPreviewSec.appendChild(liElement);
    divEl.appendChild(editBtn);
    divEl.append(nextBtn);
    liElement.appendChild(divEl);


    editBtn.addEventListener('click', onEdit);

    function onEdit() {
      nameRef.value = name;
      heightRef.value = height;
      locationRef.value = locationV;
      creatorRef.value = creator;
      specialAttributeRef.value = specialAttribute;
      addBtn.disabled = false;
      liElement.remove();
    }

    nextBtn.addEventListener('click', onNext);

    function onNext() {
      liElement.remove();

      let newLiElement = document.createElement('li');
      newLiElement.setAttribute('class', 'snowman-content');
      let sendBtn = document.createElement('button');
      sendBtn.textContent = 'Send';
      sendBtn.setAttribute('class', 'send-btn');
      article.appendChild(sendBtn);
      newLiElement.appendChild(article);

      yourSnowmanSec.appendChild(newLiElement);

      sendBtn.addEventListener('click', onSend);

      function onSend() {
        mainRef.remove();
        let backBtn = document.createElement('button');
        backBtn.setAttribute('class', 'back-btn');
        backBtn.textContent = 'Back'

        imgRef.style.display = 'block'
        bodyRef.appendChild(backBtn);

        backBtn.addEventListener('click', onBack)

        function onBack() {
          location.reload()
        }

      }

    }
  }


}
