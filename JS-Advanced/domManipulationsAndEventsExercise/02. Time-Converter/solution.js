function attachEventsListeners() {

    //confir
    const RATIONS = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    //helper functions
    function convert(value, unit) {
        const inDays = value / RATIONS[unit];

        return {
            days: inDays,
            hours: inDays * RATIONS.hours,
            minutes: inDays * RATIONS.minutes,
            seconds: inDays * RATIONS.seconds
        }
    }

    //capture metrics
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    //event listener setup
    document.querySelector('main').addEventListener('click', onConvert)


    function onConvert(e) {
        if (e.target.tagName === "INPUT" && e.target.type == "button") {
            const input = e.target.parentElement.querySelector('input[type="text"]');
            const inputValue = Number(input.value);
            const time = convert(inputValue, input.id)

            daysInput.value = time.days;
            hoursInput.value = time.hours;
            minutesInput.value = time.minutes;
            secondsInput.value = time.seconds;
        }


    }

}