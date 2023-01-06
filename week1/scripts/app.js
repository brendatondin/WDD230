
const message = document.querySelector("#emessage");
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
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `Today is: ${monthName} ${d.getDate()}, ${year}`;
document.querySelector("#date2").textContent = fulldate;