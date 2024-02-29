function attachEvents() {

    let conditions = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
    };

    const locUrl = `http://localhost:3030/jsonstore/forecaster/locations`;

    const forecastSectionRef = document.getElementById('forecast');
    forecastSectionRef.innerHTML = '';

    document.getElementById('submit').addEventListener('click', getWeather);

    async function getWeather(e) {
        try {
            const userInput = document.getElementById('location').value
            forecastSectionRef.style.display = 'block';
            const locationResponse = await fetch(locUrl);
            const locationData = await locationResponse.json();
            console.log(locationData)
            const currentLocationData = locationData.find(x => x.name === userInput);
            fillTodayData(currentLocationData.code);
            fillThreeDaysData(currentLocationData.code);
        } catch (err) {
            forecastSectionRef.textContent = 'Error'
        }
    }

    async function fillTodayData(code) {
        const response = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
        const data = await response.json();
        document.querySelector('#current').appendChild(createForecastToday(data));
    }

    function createForecastToday(data) {
        const divEl = document.createElement('div');
        divEl.classList.add("forecasts");
        const mainSpan = document.createElement('span');
        mainSpan.classList.add('condition');
        const spanCondSymbol = document.createElement('span');
        spanCondSymbol.classList.add('condition-symbol');
        spanCondSymbol.textContent = conditions[data.forecast.condition];
        const spanLocation = document.createElement('span');
        spanLocation.classList.add('forecast-data');
        spanLocation.textContent = data.name;
        const spanDegrees = document.createElement('span');
        spanDegrees.classList.add('forecast-data');
        spanDegrees.textContent = `${data.forecast.low}°/${data.forecast.high}°`
        const spanCondition = document.createElement('span');
        spanCondition.classList.add('forecast-data');
        spanCondition.textContent = data.forecast.condition;
        divEl.appendChild(spanCondSymbol);
        mainSpan.appendChild(spanLocation);
        mainSpan.appendChild(spanDegrees);
        mainSpan.appendChild(spanCondition);
        divEl.appendChild(mainSpan);
        return divEl;
    }

    async function fillThreeDaysData(code) {
        const response = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
        const data = await response.json();
        document.querySelector('#upcoming').appendChild(createForecastThreeDays(data));
    }

    function createForecastThreeDays(data) {
        const divEl = document.createElement('div');
        divEl.classList.add('forecast-info');


        divEl.appendChild(createSpan(data.forecast[0]));
        divEl.appendChild(createSpan(data.forecast[1]));
        divEl.appendChild(createSpan(data.forecast[2]));
        return divEl;

        function createSpan(data) {
            const mainSpan = document.createElement('span');
            mainSpan.classList.add('upcoming');
            const spanCondSymbol = document.createElement('span');
            spanCondSymbol.classList.add('symbol');
            spanCondSymbol.textContent = conditions[data.condition];
            const spanDegrees = document.createElement('span');
            spanDegrees.classList.add('forecast-data');
            spanDegrees.textContent = `${data.low}°/${data.high}°`
            const spanCondition = document.createElement('span');
            spanCondition.classList.add('forecast-data');
            spanCondition.textContent = data.condition;

            mainSpan.appendChild(spanCondSymbol);
            mainSpan.appendChild(spanDegrees);
            mainSpan.appendChild(spanCondition);

            return mainSpan
        }


    }
}

attachEvents();