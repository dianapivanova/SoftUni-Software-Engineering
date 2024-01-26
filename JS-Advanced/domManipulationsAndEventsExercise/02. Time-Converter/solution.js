function attachEventsListeners() {

    //confir
    const RATIO = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    //helper functions
    function convert(value, unit) {
        let inDays = value / RATIO[unit]

        return {
            days: inDays,
            hours: inDays * RATIO.hours,
            minutes: inDays * RATIO.minutes,
            seconds: inDays * RATIO.seconds
        }
    }

    //capture metrics
    let daysInputValue = document.getElementById('days');
    let hoursInputValue = document.getElementById('hours');
    let minutesInputValue = document.getElementById('minutes');
    let secondsInputValue = document.getElementById('seconds');


    //event listener setup
    document.querySelector('main').addEventListener('click', onConvert);

    function onConvert(e) {
        if (e.target.tagName == "INPUT" && e.target.type == "button") {
            let input = e.target.parentElement.querySelector('[type="text"]');
            let inputValue = Number(input.value);
            let time = convert(inputValue, input.id)

            daysInputValue.value = time.days;
            hoursInputValue.value = time.hours;
            minutesInputValue.value = time.minutes;
            secondsInputValue.value = time.seconds;
        }
    }

}