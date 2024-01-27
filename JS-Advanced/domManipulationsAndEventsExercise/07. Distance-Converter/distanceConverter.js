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


    function convert(receivedValue, receivedDistance, resultDistance) {
        let inputInMeters = receivedValue * CONVERTIONS[receivedDistance];
        let result = inputInMeters / CONVERTIONS[resultDistance];

        return result;
    }
    let inputArea = document.getElementById("inputDistance");
    let inputOptions = document.getElementById("inputUnits");
    let outputArea = document.getElementById("outputDistance");
    let outputOptions = document.getElementById("outputUnits");

    let btnConvert = document.getElementById("convert");
    btnConvert.addEventListener('click', onClick);

    function onClick() {
        let receivedValue = Number(inputArea.value);
        let receivedDistance = inputOptions.value
        let resultDistance = outputOptions.value;
        outputArea.value = convert(receivedValue, receivedDistance, resultDistance)
    }
}