function attachEvents() {

    let conditions = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
    };

    const locationUrl = 'http://localhost:3030/jsonstore/forecaster/locations';
    const locationInput = document.getElementById('location');
    const getWeatherBtn = document.getElementById('submit');
    getWeatherBtn.addEventListener('click', onGet);
    const divWeather = document.getElementById('forecast');
    
    async function onGet() {
        divWeather.style.display = 'block';
        let city = locationInput.value;
        let cityCode = '';
        try {
            let res = await fetch(locationUrl);
            if(!res.ok) {
                let err = await res.json();
                throw new Error(err)
            }
            let data = await res.json();
            let findCity = data.find(x => x.name == city);
            cityCode = findCity.code;
        } catch(err) {
            console.log(err.message)
            divWeather.textContent = 'Error';
        }

        // making get request for the current conditions
        try {
            let res= await fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityCode}`);
            if(!res.ok) {
                let err = await res.json();
                throw new Error(err);
            }
            let data = await res.json();
            let divEl = createTodayDiv(data.name, data.forecast);
            document.getElementById('current').appendChild(divEl);
        } catch(err) {
            console.log(err.message)
            divWeather.textContent = 'error';
        }

         // making get request for 3-day conditions
         try {
            let res= await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${cityCode}`);
            if(!res.ok) {
                let err = await res.json();
                throw new Error(err);
            }
            let data = await res.json();
            let divEl = createUpcomingDiv(data.name, data.forecast);
            document.getElementById('upcoming').appendChild(divEl);
        } catch(err) {
            console.log(err.message)
            divWeather.textContent = 'error';
        }
    }

    function createTodayDiv(city, forecatObj) {
        let divEl = document.createElement('div');
        divEl.classList.add('forecasts');
        const span1 = document.createElement('span');
        span1.classList.add('condition-symbol');
        span1.textContent = conditions[forecatObj.condition];
        const span2 = document.createElement('span');
        span2.classList.add('condition');
        const span21 = document.createElement('span');
        span21.classList.add('forecast-data');
        span21.textContent = city;
        const span22 = document.createElement('span');
        span22.classList.add('forecast-data');
        span22.textContent = `${forecatObj.low}°/${forecatObj.high}°`;
        const span23 = document.createElement('span');
        span23.classList.add('forecast-data');
        span23.textContent = forecatObj.condition;
        span2.appendChild(span21)
        span2.appendChild(span22)
        span2.appendChild(span23)
        divEl.appendChild(span1);
        divEl.appendChild(span2);
        return divEl;

    }

    function createUpcomingDiv(city, forecast) {
        let divEl = document.createElement('div');
        divEl.classList.add('forecast-info');
        forecast.forEach(x => {
            const span = document.createElement('span');
            span.classList.add('upcoming');
            const span1 = document.createElement('span');
            span1.classList.add('symbol');
            span1.textContent = conditions[x.condition];
            const span2 = document.createElement('span');
            span2.classList.add('forecast-data');
            span2.textContent = `${x.low}°/${x.high}°`;
            const span3= document.createElement('span');
            span3.classList.add('forecast-data');
            span3.textContent = x.condition;
            span.appendChild(span1);
            span.appendChild(span2);
            span.appendChild(span3);
            divEl.appendChild(span);
        });
        return divEl;
    }
}

attachEvents();