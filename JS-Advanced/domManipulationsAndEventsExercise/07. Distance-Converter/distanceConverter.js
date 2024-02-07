function attachEventsListeners() {

    const CONVERTIONS = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    let inputField = document.getElementById('inputDistance');
    let outputField = document.getElementById('outputDistance');
    let button = document.getElementById('convert')
    button.addEventListener('click', convert)

    function convert() {
        let convertValue = inputField.value;
        let fromOption = document.getElementById('inputUnits').value;
        let toOption = document.getElementById('outputUnits').value;
        let fromInMeters = CONVERTIONS[fromOption] * convertValue;
        let toInMeters = fromInMeters / CONVERTIONS[toOption]

        outputField.value = toInMeters
    }

}