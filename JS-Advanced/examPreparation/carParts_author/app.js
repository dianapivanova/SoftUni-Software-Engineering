window.addEventListener('load', solve);

function solve() {

        let carModelElement = document.getElementById('car-model');
        let carYearElement = document.getElementById('car-year');
        let partNameElement = document.getElementById('part-name');
        let parNumberElement = document.getElementById('part-number');
        let conditionElement = document.getElementById('condition');
        let nextButtonElement = document.getElementById('next-btn');
        let partInfoElement = document.querySelector('.info-list');
        let partConfirmElement = document.querySelector('.confirm-list');
        let completeElement = document.getElementById('complete-order');
        let completeImg = document.getElementById('complete-img');
        let completeText = document.getElementById('complete-text');

        nextButtonElement.addEventListener('click', onNext);

        function onNext(e) {
            e.preventDefault();
            if(carModelElement.value == ''
             ||carYearElement.value == ''
            || partNameElement.value == ''
            || parNumberElement.value == ''
            ||conditionElement.value == ''
            ){
             return;
            }
            let Year = Number(carYearElement.value);
    
    if ( Year < 1980 || Year > 2023 ) {
        return;
    }

            completeImg.style.visibility = "hidden";
            completeText.textContent ="";

            let liElementInfo = document.createElement('li');
            liElementInfo.setAttribute('class', 'part-content');

            let articleElementInfo = document.createElement("article");

            let carModel = document.createElement('p');
            carModel.textContent = `Car Model: ${carModelElement.value}`;

            let carYear = document.createElement('p');
            carYear.textContent = `Car Year: ${carYearElement.value}`;

            let partName = document.createElement('p');
            partName.textContent = `Part Name: ${partNameElement.value}`;
            
            let partNumber = document.createElement('p');
            partNumber.textContent = `Part Number: ${parNumberElement.value}`;

            let condition = document.createElement('p');
            condition.textContent = `Condition: ${conditionElement.value}`;


            let editBtn = document.createElement("button");
            editBtn.setAttribute('class', 'edit-btn');
            editBtn.textContent = 'Edit';

            let continueBtn = document.createElement("button");
            continueBtn.setAttribute('class', 'continue-btn');
            continueBtn.textContent = 'Continue';


            articleElementInfo.appendChild(carModel);
            articleElementInfo.appendChild(carYear);
            articleElementInfo.appendChild(partName);
            articleElementInfo.appendChild(partNumber);
            articleElementInfo.appendChild(condition);

            liElementInfo.appendChild(articleElementInfo);
            liElementInfo.appendChild(editBtn);
            liElementInfo.appendChild(continueBtn);

            partInfoElement.appendChild(liElementInfo);


        let editedCrModel = carModelElement.value;
        let editedCrYear = carYearElement.value;
        let editedPartName = partNameElement.value;
        let editedPartNumber = parNumberElement.value; 
        let editedCondition =  conditionElement.value;



        carModelElement.value = '';
        carYearElement.value = '';
        partNameElement.value = '';
        parNumberElement.value = '';
        conditionElement.value = '';

        nextButtonElement.disabled = true;

        editBtn.addEventListener("click", onEdit);

        function onEdit() {

            carModelElement.value = editedCrModel;
            carYearElement.value = editedCrYear;
            partNameElement.value = editedPartName;
            parNumberElement.value = editedPartNumber;
            conditionElement.value = editedCondition;
            
            liElementInfo.remove();
            nextButtonElement.disabled = false;
        }

        continueBtn.addEventListener("click", onContinue);

        function onContinue() {
            let liElementconfirm = document.createElement('li');
            liElementconfirm.setAttribute('class', 'part-content');

            let articleElementContinue = document.createElement("article");
            articleElementContinue = articleElementInfo;

            let confirmBtn = document.createElement("button");
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = 'Confirm';
    
            let cancelBtn = document.createElement("button");
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel';
    
    
            liElementconfirm.appendChild(articleElementContinue);
            liElementconfirm.appendChild(confirmBtn);
            liElementconfirm.appendChild(cancelBtn);
            liElementInfo.remove();
    
            partConfirmElement.appendChild(liElementconfirm);

            

            confirmBtn.addEventListener('click', onConfirm);
        function onConfirm() {
            liElementconfirm.remove();
            nextButtonElement.disabled = false;

            completeText.textContent = `Part is Ordered!`;

           completeImg.style.visibility = "visible";
        }

        cancelBtn.addEventListener('click',onCancel);
        function onCancel() {
            liElementconfirm.remove();
            nextButtonElement.disabled = false;
        }
        };


        }   
}


    
    
