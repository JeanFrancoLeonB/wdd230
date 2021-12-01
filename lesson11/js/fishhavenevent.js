const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const currentTown = towns.filter((towns) => towns.name === 'Fish Haven');
        currentTown.forEach(currentTown => {
            let preston = document.createElement('div');
            let event1 = document.createElement('p');
            let event2 = document.createElement('p');
            let event3 = document.createElement('p');
            let event4 = document.createElement('p');

            preston.className = 'localevent';
            event1.innerHTML = `${currentTown.events[0]}`;
            event2.innerHTML = `${currentTown.events[1]}`;
            event3.innerHTML = `${currentTown.events[2]}`;
            event4.innerHTML = `${currentTown.events[3]}`;

            preston.appendChild(event1);
            preston.appendChild(event2);
            preston.appendChild(event3);
            preston.appendChild(event4);

            document.querySelector('div.upcomingevents').appendChild(preston);

        });
    });