function attachEventsListeners() {
    //const 
    let time = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    let daysField = document.getElementById('days');
    let hoursField = document.getElementById('hours');
    let minutesField = document.getElementById('minutes');
    let secondsField = document.getElementById('seconds');

    let buttonsArr = Array.from(document.querySelectorAll('input[type="button"]'));

    for (let button of buttonsArr) {
        button.addEventListener('click', onConvert)
    }


    function onConvert(e) {
        let convertedTime = e.target.parentElement.querySelector('input[type="text"]');
        let numToModify = Number(convertedTime.value);
        if (numToModify == NaN) {
            return;
        }
        let typeOfInput = convertedTime.id
        let typeOfInputInDays = numToModify / time[typeOfInput]
        daysField.value = typeOfInputInDays * time.days
        hoursField.value = typeOfInputInDays * time.hours
        minutesField.value = typeOfInputInDays * time.minutes
        secondsField.value = typeOfInputInDays * time.seconds
    }

}