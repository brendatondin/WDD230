// const tempLocation = document.querySelector("#temp");
// const windSpeedLocation = document.querySelector("#windspeed");
// const windChill = document.querySelector("#windchill");


// const temp = parseFloat(tempLocation.textContent);
// const windSpeed = parseFloat(windSpeedLocation.textContent);

// let windChillAmount = 35.74 + (0.6215 * temp) - (35.75 * (windSpeed ** 0.16)) +(0.4275 * temp * (windSpeed ** 0.16));


// if(temp<=50 && windSpeed > 3.0){
//     windChill.innerText = `${windChillAmount.toFixed(0)} ºF`;
// }else{
//     windChill.innerText = "N/A";
// }

const temperature = document.getElementById("temperature").textContent;
const windSpeed = document.getElementById("wind-speed").textContent;
const windChill = document.getElementById("wind-chill");

function getWindChill(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16));
}

if (temperature <= 50 && windSpeed > 3) {
    windChill.textContent = `${parseInt(getWindChill(temperature, windSpeed))}°`;
} else {
    windChill.textContent = "N/A";
}