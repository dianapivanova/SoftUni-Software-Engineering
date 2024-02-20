window.addEventListener("load", solve);

function solve() {

    const nameRef = document.getElementById('gem-name');
    const colorRef = document.getElementById('color');
    const caratsRef = document.getElementById('carats');
    const priceRef = document.getElementById('price');
    const typeRef = document.getElementById('type');

    const addBtn = document.getElementById('add-btn');
    const previewListRef = document.getElementById('preview-list');
    const collectionListRef = document.getElementById('collection');

    let name = ''
    let color = ''
    let carats = ''
    let price = ''
    let type = ''

    addBtn.addEventListener('click', onDefault)

    function onDefault(e) {
        e.preventDefault();

        if (nameRef.value == '' ||
            colorRef.value == '' ||
            caratsRef.value == '' ||
            priceRef.value == '' ||
            typeRef.value == '') {
            return;
        }

        name = nameRef.value;
        color = colorRef.value;
        carats = caratsRef.value;
        price = priceRef.value;
        type = typeRef.value;

        let lielement = document.createElement('li');
        lielement.classList.add('gem-info');

        let article = document.createElement('article');
        let nameP = document.createElement('h4');
        nameP.textContent = name;
        let colorP = document.createElement('p');
        colorP.textContent = `Color: ${color}`;
        let caratsP = document.createElement('p');
        caratsP.textContent = `Carats: ${carats}`;
        let priceP = document.createElement('p');
        priceP.textContent = `Price: ${price}$`;
        let typeP = document.createElement('p');
        typeP.textContent = `Type: ${type}`;
        article.appendChild(nameP);
        article.appendChild(colorP);
        article.appendChild(caratsP);
        article.appendChild(priceP);
        article.appendChild(typeP);
        lielement.appendChild(article);

        previewListRef.appendChild(lielement);

        let saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save to Collection';
        saveBtn.classList.add('save-btn');

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit Information';
        editBtn.classList.add('edit-btn');

        let cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.classList.add('cancel-btn');

        lielement.appendChild(saveBtn);
        lielement.appendChild(editBtn);
        lielement.appendChild(cancelBtn);

        addBtn.disabled = true;
        addBtn.parentElement.parentElement.reset();

        editBtn.addEventListener('click', onEdit);

        function onEdit(e) {
            addBtn.disabled = false;
            lielement.remove();
            nameRef.value = name;
            colorRef.value = color;
            caratsRef.value = carats;
            priceRef.value = price;
            typeRef.value = type;
        }

        saveBtn.addEventListener('click', onSave);

        function onSave(e) {
            lielement.remove();
            addBtn.disabled = false;
            let newLiElement = document.createElement('li');
            let newLiP = document.createElement('p');
            newLiP.classList.add('collection-item');
            let result = [];
            result.push(colorP.textContent);
            result.push(caratsP.textContent);
            result.push(priceP.textContent);
            result.push(typeP.textContent);
            newLiP.textContent = nameP.textContent + ' - ' + result.join('/ ');
            newLiElement.appendChild(newLiP);
            collectionListRef.appendChild(newLiElement);
        }

        cancelBtn.addEventListener('click', onCancel);

        function onCancel(e) {
            lielement.remove();
            addBtn.disabled = false;
        }
    }
}
