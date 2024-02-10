window.addEventListener('load', solution);

function solution() {

  let [problemSec, previewSec, pendingSec, resolvedSec] = document.querySelectorAll('#wrapper section');
  let formRef = document.querySelector('form');

  let submitBtn = formRef.querySelector('button');
  formRef.addEventListener('submit', onDefault);

  let employeeField = document.getElementById('employee')
  let categoryField = document.getElementById('category')
  let urgencyField = document.getElementById('urgency')
  let assignedTeam = document.getElementById('team')
  let description = document.getElementById('description')

  let inputValues = [];

  function onDefault(e) {
    e.preventDefault();

    if (employeeField.value == '' || categoryField.value == '' || urgencyField.value == '' || assignedTeam.value == '' || description.value == '') {
      return;
    }

    inputValues.push(employeeField.value, categoryField.value, urgencyField.value, assignedTeam.value, description.value)
    createArticle(employeeField, categoryField, urgencyField, assignedTeam, description);
    clearField(employeeField, categoryField, urgencyField, assignedTeam, description)
    document.querySelector('#add-btn').disabled = true;
  }

  function clearField(employeeField, categoryField, urgencyField, assignedTeam, description) {
    employeeField.value = ''
    categoryField.value = ''
    urgencyField.value = ''
    assignedTeam.value = ''
    description.value = ''

  }

  function createArticle(employeeField, categoryField, urgencyField, assignedTeam, description) {
    let articleLi = document.createElement('li')
    articleLi.classList.add('problem-content')
    articleLi.innerHTML +=
      `<article>` +
      `<p>From: ${employeeField.value}</p>` +
      `<p>Category: ${categoryField.value}</p>` +
      `<p>Urgency: ${urgencyField.value}</p>` +
      `<p>Assigned to: ${assignedTeam.value}</p>` +
      `<p>"Description: ${description.value}"</p>` +
      `</article>` +
      getButtons({ class: 'edit-btn', text: 'Edit' }, { class: 'continue-btn', text: 'Continue' })
    let btns = articleLi.querySelectorAll('button')
    Array.from(btns).forEach(x => x.addEventListener('click', buttonCommands[x.textContent.toLowerCase()]))
    previewSec.querySelector('.preview-list').appendChild(articleLi);
  }

  function getButtons(btn1, btn2) {
    return (`<button class=${btn1.class}>${btn1.text}</button>` +
      `<button class=${btn2.class}>${btn2.text}</button>`)
  }

  const buttonCommands = {
    edit: (e) => {
      employeeField.value = inputValues[0]
      categoryField.value = inputValues[1]
      urgencyField.value = inputValues[2]
      assignedTeam.value = inputValues[3]
      description.value = inputValues[4]

      document.querySelector('#add-btn').disabled = false;
      e.target.parentElement.remove();
    },
    continue: (e) => {
      let liEl = e.target.parentElement;
      Array.from(liEl.querySelectorAll('button')).forEach(x => x.remove());
      liEl.innerHTML += `<button class="resolve-btn">Resolved</button>`
      liEl.querySelector('button').addEventListener('click', buttonCommands['resolved'])
      pendingSec.querySelector('ul').appendChild(liEl);
    },
    resolved: (e) => {
      let liEl = e.target.parentElement;
      liEl.querySelector('button').remove()
      liEl.innerHTML += `<button class="clear-btn">Clear</button>`
      liEl.querySelector('button').addEventListener('click', buttonCommands['clear'])
      resolvedSec.querySelector('ul').appendChild(liEl);
    },
    clear: (e) => {
      e.target.parentElement.remove()
      document.querySelector('#add-btn').disabled = false;
    }
  }
}




