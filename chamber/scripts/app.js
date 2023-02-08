let lastModified = new Date(document.lastModified);
let fullDate = lastModified.toLocaleString('en-US', {
	month: "2-digit",
	day: "2-digit",
	year: "numeric"
});
let time = lastModified.toLocaleString('en-GB', {
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit"
});
let dateTime = `Last Modification: ${fullDate} ${time}`;
document.getElementById("lastModified").innerHTML = dateTime;

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.querySelector("#date2").textContent = fulldate;


// if(dayName==='Monday' || dayName==='Tuesday') {
// 	setTimeout(function () {
// 		alert('🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.')
// 	}, 1000)
// }

const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()];
const monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
][new Date().getMonth()];

let notification = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";

if (day == "Monday" || day == "Tuesday") {
	document.getElementById("banner_msg").textContent = notification;
} else{
	document.getElementById("banner").style.display = "none"
}

function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById('hamburger-button')
x.onclick = toggleMenu;