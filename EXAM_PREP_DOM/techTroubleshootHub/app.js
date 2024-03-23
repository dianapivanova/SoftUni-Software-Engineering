window.addEventListener("load", solution);
function solution() {
  const employeeRef = document.getElementById("employee");
  const categoryRef = document.getElementById("category");
  const urgencyRef = document.getElementById("urgency");
  const teamRef = document.getElementById("team");
  const descriptionRef = document.getElementById("description");
  const addBtn = document.getElementById("add-btn");

  const previewClRef = document.querySelector(".preview-list");
  const pendingClRef = document.querySelector(".pending-list");
  const resolvedClRef = document.querySelector(".resolved-list");

  addBtn.addEventListener("click", onDefault);

  function onDefault(e) {
    e.preventDefault();
    if (
      employeeRef.value == "" ||
      categoryRef.value == "" ||
      urgencyRef.value == "" ||
      teamRef.value == "" ||
      descriptionRef.value == ""
    ) {
      return;
    }

    let employee = employeeRef.value;
    let category = categoryRef.value;
    let urgency = urgencyRef.value;
    let team = teamRef.value;
    let description = descriptionRef.value;

    let liElement = document.createElement("li");
    liElement.classList.add("problem-content");

    let article = document.createElement("article");
    let parEmployee = document.createElement("p");
    parEmployee.textContent = `From: ${employee}`;
    let parCategory = document.createElement("p");
    parCategory.textContent = `Category: ${category}`;
    let parUrgency = document.createElement("p");
    parUrgency.textContent = `Urgency: ${urgency}`;
    let parTeam = document.createElement("p");
    parTeam.textContent = `Assigned to: ${team}`;
    let parDescription = document.createElement("p");
    parDescription.textContent = `Description: ${description}`;

    article.appendChild(parEmployee);
    article.appendChild(parCategory);
    article.appendChild(parUrgency);
    article.appendChild(parTeam);
    article.appendChild(parDescription);

    liElement.appendChild(article);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    let continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-btn");
    continueBtn.textContent = "Continue";

    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);

    previewClRef.appendChild(liElement);

    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);

    addBtn.disabled = true;

    employeeRef.value = "";
    categoryRef.value = "";
    urgencyRef.value = "";
    teamRef.value = "";
    descriptionRef.value = "";

    function onEdit(e) {
      liElement.remove();
      addBtn.disabled = false;
      employeeRef.value = employee;
      categoryRef.value = category;
      urgencyRef.value = urgency;
      teamRef.value = team;
      descriptionRef.value = description;
    }

    function onContinue(e) {
      liElement.remove();
      addBtn.disabled = false;

      let newLiElement = document.createElement('li');
      newLiElement.classList.add('problem-content');
      newLiElement.appendChild(article);

      let resolvedButton = document.createElement('button');
      resolvedButton.textContent = 'Resolved';
      resolvedButton.classList.add('resolve-btn');

      newLiElement.appendChild(resolvedButton);
      pendingClRef.appendChild(newLiElement);

      resolvedButton.addEventListener('click', onResolved);

      function onResolved(e) {
        newLiElement.remove();
        let finalLiEl = document.createElement('li');
        finalLiEl.classList.add('problem-content');
        finalLiEl.appendChild(article);

        let clearBtn = document.createElement('button');
        clearBtn.textContent = 'Clear';
        clearBtn.classList.add('clear-btn')
        clearBtn.addEventListener('click', onClear);

        finalLiEl.appendChild(clearBtn);
        resolvedClRef.appendChild(finalLiEl);

        function onClear(e) {
          finalLiEl.remove();
        }
      }
    }
  }
}
