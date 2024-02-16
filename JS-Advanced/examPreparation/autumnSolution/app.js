window.addEventListener('load', solve);

function solve() {
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const placeElement = document.getElementById('place');
const eventElement = document.getElementById('event-name');
const emailElement = document.getElementById('email');
const addButtonElement = document.getElementById('add-btn');
const checkListElement = document.getElementById('check-list');
const upcomingListElement = document.getElementById('upcoming-list');
const finishedListElement = document.getElementById('finished-list');
const cancelBtn = document.getElementById('clear')





        addButtonElement.addEventListener('click', onNext);

        function onNext(e) {
            e.preventDefault();
            if(timeElement.value == ''
             ||placeElement.value == ''
            || eventElement.value == ''
            || emailElement.value == ''
            || dateElement.value == ''
            ){
             return;
            }

            let liElementInfo = document.createElement('li');
            liElementInfo.setAttribute('class', 'event-content');

            let articleElementInfo = document.createElement("article");

            let time = document.createElement('p');
            time.textContent = `Begins: ${dateElement.value} at: ${timeElement.value}`;

            let place = document.createElement('p');
            place.textContent = `In: ${placeElement.value}`;

            let event = document.createElement('p');
            event.textContent = `Event: ${eventElement.value}`;

            let email = document.createElement('p');
            email.textContent = `Contact: ${emailElement.value}`;


            let editBtn = document.createElement("button");
            editBtn.setAttribute('class', 'edit-btn');
            editBtn.textContent = 'Edit';

            let continueBtn = document.createElement("button");
            continueBtn.setAttribute('class', 'continue-btn');
            continueBtn.textContent = 'Continue';


            articleElementInfo.appendChild(time);
            articleElementInfo.appendChild(place);
            articleElementInfo.appendChild(event);
            articleElementInfo.appendChild(email);

            liElementInfo.appendChild(articleElementInfo);
            liElementInfo.appendChild(editBtn);
            liElementInfo.appendChild(continueBtn);

            checkListElement.appendChild(liElementInfo);


        let editedtimeElement = timeElement.value;
        let editeddateElement = dateElement.value;
        let editedplaceElement = placeElement.value;
        let editedeventElement = eventElement.value;
        let editedemailElement = emailElement.value; 
        
        timeElement.value = '';
        dateElement.value = '';
        placeElement.value = '';
        eventElement.value = '';
        emailElement.value = '';

        addButtonElement.disabled = true;

        editBtn.addEventListener("click", onEdit);

        function onEdit() {

            timeElement.value = editedtimeElement;
            dateElement.value = editeddateElement;
            placeElement.value = editedplaceElement;
            eventElement.value = editedeventElement;
            emailElement.value = editedemailElement;
            
            
            liElementInfo.remove();
            addButtonElement.disabled = false;
        }

        continueBtn.addEventListener("click", onContinue);

        function onContinue() {
            let liElementconfirm = document.createElement('li');
            liElementconfirm.setAttribute('class', 'event-content');

            let articleElementContinue = document.createElement("article");
            articleElementContinue = articleElementInfo;

            let confirmBtn = document.createElement("button");
            confirmBtn.setAttribute('class', 'finished-btn');
            confirmBtn.textContent = 'Move to Finished';
    
           
    
    
            liElementconfirm.appendChild(articleElementContinue);
            liElementconfirm.appendChild(confirmBtn);
            liElementInfo.remove();
    
            upcomingListElement.appendChild(liElementconfirm);
            addButtonElement.disabled = false;
            

            confirmBtn.addEventListener('click', onConfirm);
        function onConfirm() {

            let liElementResolved = document.createElement('li');
            liElementResolved.setAttribute('class', 'event-content');

            let articleElementResolved = document.createElement("article");
            articleElementResolved = articleElementContinue;

           
            const cancelBtn = document.getElementById('clear')
            cancelBtn.addEventListener('click',onCancel);

            liElementResolved.appendChild(articleElementResolved);
            liElementconfirm.remove();

            finishedListElement.appendChild(liElementResolved);

            function onCancel() {
                liElementResolved.remove();
                addButtonElement.disabled = false;
            }
        }
      
        
        };


        }   
}


    
    
