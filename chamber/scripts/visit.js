//Here  I store my variables for everything that I plan on using. 
const visits = document.querySelector(".visitor");
let today = Date.now();
let numVisits = Number(localStorage.getItem("visits"));
let lastVisited = localStorage.getItem('dateVisited');
let difference; 
let daysBetweenVisits;

//This checks if the site has been visited or ntot and then calculates the days between visits
if (numVisits !== 0) {
    localStorage.setItem("dateVisited", today);
    difference = today - lastVisited
    daysBetweenVisits = Math.round(difference / 86400000)
}

numVisits++
localStorage.setItem('visits', numVisits)

visits.textContent = daysBetweenVisits;