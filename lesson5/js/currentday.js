const options = { weekday: 'long',  day: 'numeric', month: 'long', year:'numeric'};
document.querySelector('#today').textContent = new Date().toLocaleDateString('en-US', options);