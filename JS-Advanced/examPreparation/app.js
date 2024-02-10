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


  const inputValues = {
    employee: employeeField.value,
    categoryField: categoryField.value,
    urgencyField: urgencyField.value,
    assignedTeam: assignedTeam.value,
    description: description.value
  }

  function onDefault(e) {
    e.preventDefault();
    if (employeeField.value == '' || categoryField.value == '' || urgencyField.value == '' || assignedTeam.value == '' || description.value == '') {
      return;
    }

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
      employeeField.value = inputValues[employee]
      categoryField.value = inputValues[categoryField]
      urgencyField.value = inputValues[urgencyField]
      assignedTeam.value = inputValues[assignedTeam]
      description.value = inputValues[description]

      document.querySelector('#add-btn').disabled = false;
      e.target.parentElement.remove();
    },
    continue: (e) => {
      let liEl = e.target.parentElement.parentElement;
      Array.from(liEl.querySelectorAll('button')).forEach(x => x.remove);
      liEl.innerHTML += `<button class="resolve-btn">Resolve</button>`
      liEl.querySelector('button').addEventListener('click', buttonCommands['resolved'])
      pendingSec.querySelector('pending-list').appendChild(liEl);
      e.target.parentElement.remove();
    },
    resolved: (e) => {
      let liEl = e.target.parentElement.parentElement;
      liEl.querySelectorAll('button').remove()
      liEl.innerHTML += `<button class="clear-btn">Clear</button>`
      liEl.querySelector('button').addEventListener('click', buttonCommands['clear'])
      resolvedSec.querySelector('resolved-list').appendChild(liEl);
      e.target.parentElement.remove();
    },
    clear: (e) => {
      e.target.parentElement.remove()
    }
  }
}




