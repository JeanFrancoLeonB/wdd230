function announcement() {
    
    const d = new Date();
    const today = d.getDay();
    const pancake = document.querySelector(".getdayfriday");
    
    if (today == 5) {
        pancake.style.display = 'block';
    
    }
    
    else {
        pancake.style.display = 'none';
    }
    }
    announcement();