const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=730c7eedd7a467502500821344c0b4c2&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('condition').textContent = jsObject.weather[0].description;
        document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('wind-speed').textContent = jsObject.wind.speed.toFixed(0);
        
        const temp = parseFloat(document.querySelector('#current-temp').textContent);
        const wind = parseFloat(document.querySelector('#wind-speed').textContent);
        let wchill;

        if (temp <= 50 && wind > 3) {
        wchill = windChill(temp, wind);
   
        }
        else {
         wchill = `N/A`;
        } 

        function windChill(temp, wind){
        let f = 35.74 + (temp * 0.6215) 
        - (35.75 * Math.pow(wind, 0.16)) 
        + (0.4275 * temp * Math.pow(wind, 0.16));
        return f.toFixed(0);
        }

        document.querySelector('.windchill').innerHTML = `${wchill}°F`;
        
    });