const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(requestURL)
   .then(function (response) {
    return response.json();
  })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const highcountry = towns.filter((towns) => towns.name === 'Preston' || towns.name === 'Fish Haven' || towns.name ===  'Soda Springs');
        highcountry.forEach(highcountry => {
            let towninfo = document.createElement('section');
            let bioinfo = document.createElement('div');
            let h3 = document.createElement('h3');
            let h5 = document.createElement('h4');
            let founding = document.createElement('p');
            let pop = document.createElement('p');
            let annualRain = document.createElement('p');
            let image = document.createElement('img');

            towninfo.innerHTML = `<span class="towninfogrid></span>`;
            h3.innerHTML = `<span class="info">${highcountry.name}</span>`;
            h5.inner4HTML= `<span class="info">${highcountry.motto}</span>`;
            founding.innerHTML= `<span class="info">Year Founded: ${highcountry.yearFounded}</span>`;
            pop.innerHTML= `<span class="info">Population: ${highcountry.currentPopulation}</span>`;
            annualRain.innerHTML= `<span class="info">Annual Rain Fall: ${highcountry.averageRainfall}</span>`;
            image.setAttribute('src', `images/${highcountry.photo}`);
            image.setAttribute('alt', `${highcountry.name}`);
            

            towninfo.appendChild(bioinfo);
            bioinfo.appendChild(h3);
            bioinfo.appendChild(h5);
            bioinfo.appendChild(founding);
            bioinfo.appendChild(pop);
            bioinfo.appendChild(annualRain);
            towninfo.appendChild(image);

            document.querySelector('div.jsonsections').appendChild(towninfo);
        });
    });