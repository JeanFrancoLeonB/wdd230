const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();


const lastModified = Date.parse(document.lastModified)
      document.write('<p>Last updated: '  + document.lastModified);


//document.getElementById("copyrightyear").textContent = new Date().getFullYear();;
//document.querySelector("#copyrightyear").textContent = new Date().getFullYear();;