window.addEventListener('load', solve);

function solve() {

        const carModelRef = document.getElementById('car-model');
        const carYearRef = document.getElementById('car-year');
        const partNameRef = document.getElementById('part-name');
        const partNumberRef = document.getElementById('part-number');
        const conditionRef = document.getElementById('condition');

        const partInfoUlRef = document.getElementsByClassName('info-list')[0];
        const confirmOrderRef = document.getElementsByClassName('confirm-list')[0];

        const imgRef = document.getElementById('complete-img');
        const completeTextRef = document.getElementById('complete-text');

        const nextBtn = document.getElementById('next-btn');
        nextBtn.addEventListener('click', onDefault);

        function onDefault(e) {
                e.preventDefault();
                if (carModelRef.value == ""
                        || carYearRef.value == ""
                        || partNameRef.value == ""
                        || partNumberRef.value == ""
                        || conditionRef.value == ""
                        || carYearRef.value < 1980
                        || carYearRef.value > 2023) {
                        return;
                }

                imgRef.style.visibility = "hidden";
                completeTextRef.textContent = "";

                let carModel = carModelRef.value;
                let carYear = carYearRef.value;
                let partName = partNameRef.value;
                let partNumber = partNumberRef.value;
                let condition = conditionRef.value;


                let liElement = document.createElement('li');
                liElement.setAttribute('class', 'part-content');

                let article = document.createElement('article');
                let carModelPar = document.createElement('p');
                carModelPar.textContent = `Car Model: ${carModel}`;
                let carYearPar = document.createElement('p');
                carYearPar.textContent = `Car Year: ${carYear}`;
                let partNamePar = document.createElement('p');
                partNamePar.textContent = `Part Name: ${partName}`;
                let partNumberPar = document.createElement('p');
                partNumberPar.textContent = `Part Number: ${partNumber}`
                let conditionPar = document.createElement('p');
                conditionPar.textContent = `Condition: ${condition}`;

                article.appendChild(carModelPar);
                article.appendChild(carYearPar);
                article.appendChild(partNamePar);
                article.appendChild(partNamePar);
                article.appendChild(conditionPar);

                liElement.appendChild(article);

                let editBtn = document.createElement('button');
                editBtn.textContent = "Edit";
                editBtn.setAttribute('class', 'edit-btn');
                liElement.appendChild(editBtn);

                let continueBtn = document.createElement('button');
                continueBtn.textContent = "Continue";
                continueBtn.setAttribute('class', 'continue-btn');
                liElement.appendChild(continueBtn);

                partInfoUlRef.appendChild(liElement);

                carModelRef.value = ""
                carYearRef.value = ""
                partNameRef.value = ""
                partNumberRef.value = ""
                conditionRef.value = ""

                nextBtn.disabled = true;

                editBtn.addEventListener('click', onEdit);

                function onEdit(e) {
                        liElement.remove();
                        nextBtn.disabled = false;
                        carModelRef.value = carModel;
                        carYearRef.value = carYear;
                        partNameRef.value = partName;
                        partNumberRef.value = partNumber;
                        conditionRef.value = condition;

                }

                continueBtn.addEventListener('click', onContinue);

                function onContinue(e) {
                        liElement.remove()
                        let newLiElement = document.createElement('li');
                        newLiElement.setAttribute('class', 'part-content');
                        newLiElement.appendChild(article);

                        let confirmBtn = document.createElement('button');
                        confirmBtn.setAttribute('class', 'confirm-btn');
                        newLiElement.appendChild(confirmBtn);
                        confirmBtn.textContent = "Confirm";

                        let cancelBtn = document.createElement('button');
                        cancelBtn.setAttribute('class', 'cancel-btn');
                        newLiElement.appendChild(cancelBtn);
                        cancelBtn.textContent = "Cancel";

                        confirmOrderRef.appendChild(newLiElement);

                        confirmBtn.addEventListener('click', onConfirm);

                        function onConfirm(e) {
                                newLiElement.remove();
                                nextBtn.disabled = false;

                                imgRef.style.visibility = "visible";
                                completeTextRef.textContent = "Part is Ordered!";
                        }

                        cancelBtn.addEventListener('click', onCancel)

                        function onCancel(e) {
                                newLiElement.remove();
                                nextBtn.disabled = false;
                        }
                }
        }
};




