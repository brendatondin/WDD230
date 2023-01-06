document.getElementById("placeholder").innerHTML = new Date(document.lastModified);

const d = new Date();
const year = d.getFullYear();
const fulldate = `@${year} .:|:. Brenda T. Bento .:|:. RJ`;
document.querySelector("#date2").textContent = fulldate;