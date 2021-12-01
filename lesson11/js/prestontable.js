const fapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=730c7eedd7a467502500821344c0b4c2&units=imperial";
fetch(fapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const time = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(time);
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let day = 0;
        time.forEach(forecast => {
            let thedate = new Date(forecast.dt_txt);
            const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
            const desc = forecast.weather[0].description;
            document.querySelector(`#weekday${day + 1}`).textContent = weekdays[thedate.getDay()];
            document.querySelector(`#ftemp${day + 1}`).textContent = forecast.main.temp.toFixed(0) + "°F";
         /* document.querySelector(`#ftemp${day + 1}`).textContent = Math.round(forecast[day].main.temp); */
            document.querySelector(`#icon${day+1}`).setAttribute('src', imagesrc);
            document.querySelector(`#icon${day+1}`).setAttribute('alt', desc);
            day++;
        });
    });