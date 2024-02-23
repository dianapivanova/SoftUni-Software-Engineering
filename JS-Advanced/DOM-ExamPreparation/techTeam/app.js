window.addEventListener('load', solution);

function solution() {
    const employeeRef = document.getElementById('employee');
    const categoryRef = document.getElementById('category');
    const urgencyRef = document.getElementById('urgency');
    const teamRef = document.getElementById('team');
    const descriptionRef = document.getElementById('description');
    const addBtn = document.getElementById('add-btn');

    const previewListRef = document.getElementsByClassName('preview-list')[0];
    const pendingListRef = document.getElementsByClassName('pending-list')[0];
    const resolvedListRef = document.getElementsByClassName('resolved-list')[0];

    let employee = '';
    let category = '';
    let urgency = '';
    let team = '';
    let description = '';

    addBtn.addEventListener('click', onDefault);

    function onDefault(e) {
        e.preventDefault();
        if (employeeRef.value == "" ||
            categoryRef.value == "" ||
            urgencyRef.value == "" ||
            teamRef.value == "" ||
            descriptionRef.value == "") {
            return;
        }

        employee = employeeRef.value;
        category = categoryRef.value;
        urgency = urgencyRef.value;
        team = teamRef.value;
        description = descriptionRef.value;

        let liElement = document.createElement('li');
        liElement.classList.add('problem-content');

        let article = document.createElement('article');
        let employeeP = document.createElement('p');
        employeeP.textContent = `From: ${employee}`
        let categoryP = document.createElement('p');
        categoryP.textContent = `Category: ${category}`;
        let urgencyP = document.createElement('p');
        urgencyP.textContent = `Urgency: ${urgency}`;
        let teamP = document.createElement('p');
        teamP.textContent = `Assigned to: ${team}`;
        let descriptionP = document.createElement('p');
        descriptionP.textContent = `Description: ${description}`;

        article.appendChild(employeeP);
        article.appendChild(categoryP);
        article.appendChild(urgencyP);
        article.appendChild(teamP);
        article.appendChild(descriptionP);
        liElement.appendChild(article);

        previewListRef.appendChild(liElement);

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');

        let continueBtn = document.createElement('button');
        continueBtn.textContent = 'Continue';
        continueBtn.classList.add('continue-btn');

        addBtn.parentElement.reset();
        addBtn.disabled = true;

        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        previewListRef.appendChild(liElement);

        editBtn.addEventListener('click', onEdit);

        function onEdit(e) {
            employeeRef.value = employee
            categoryRef.value = category
            urgencyRef.value = urgency
            teamRef.value = team
            descriptionRef.value = description

            addBtn.disabled = false;
            liElement.remove();
        }

        continueBtn.addEventListener('click', onContinue);

        function onContinue(e) {
            addBtn.disabled = false;
            liElement.remove();
            let newLiElement = document.createElement('li');
            newLiElement.classList.add('problem-content');
            newLiElement.appendChild(article);
            pendingListRef.appendChild(newLiElement);
            let resolvedBtn = document.createElement('button');
            resolvedBtn.textContent = 'Resolved';
            resolvedBtn.classList.add('resolve-btn');
            newLiElement.appendChild(resolvedBtn);

            resolvedBtn.addEventListener('click', onResolve);

            function onResolve(e) {
                newLiElement.remove();
                let finalLiElement = document.createElement('li');
                finalLiElement.classList.add('problem-content');
                finalLiElement.appendChild(article);
                resolvedListRef.appendChild(finalLiElement)
                let clearBtn = document.createElement('button');
                clearBtn.textContent = 'Clear';
                clearBtn.classList.add('clear-btn');
                finalLiElement.appendChild(clearBtn);

                clearBtn.addEventListener('click', onClear);

                function onClear(e) {
                    finalLiElement.remove();
                }

            }
        }
    }
}




