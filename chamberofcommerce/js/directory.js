
document.querySelector('.gridbutton').addEventListener('click', () => {
    document.querySelector('.directory').classList.add('dirctorygrid');
    document.querySelector('.directory').classList.remove('directorylist');
}, false);

document.querySelector('.listbutton').addEventListener('click', () => {
    document.querySelector('.directory').classList.add('directorylist');
    document.querySelector('.directory').classList.remove('dirctorygrid');
}, false);

const directory = 'json/info.json';

      fetch(directory)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        const organizations = jsonObject['organizations'];
        for (let i = 0; i < organizations.length; i++ ) {
        let div = document.createElement('div');
        div.classList.add('directorydiv');
        let name = document.createElement('h3');
        if (jsonObject.organizations[i].logo != "") {
            let logo = document.createElement('img');
            logo.classList.add('directorylogo');
            logo.setAttribute('src', `images/${jsonObject.organizations[i].logo}`);
            logo.setAttribute('alt', `${jsonObject.organizations[i].name} logo`);
            div.appendChild(logo);
        } else {
            let creatediv = document.createElement('div');
            creatediv.classList.add('directorylogo');
            div.appendChild(creatediv);
        }
        let address = document.createElement('p');
        address.textContent = jsonObject.organizations[i].address;

        let phone = document.createElement('p');
        phone.textContent = jsonObject.organizations[i].phone;

        if (jsonObject.organizations[i].website != "") {
            let website = document.createElement('a');
            website.setAttribute('href', jsonObject.organizations[i].website);
            website.textContent = jsonObject.organizations[i].name;

            name.appendChild(website);
            div.appendChild(name);
        } else {
            div.appendChild(name);
        }
        
        div.appendChild(address);
        div.appendChild(phone);

        document.querySelector('div.directory').appendChild(div);
    }
});
