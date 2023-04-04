const API_KEY = 'da3f1563c6fac50272c4dd230f193a30'
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=92008&units=imperial&appid=${API_KEY}&cnt=3`
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=33.1412&lon=117.3205&units=imperial&appid=${API_KEY}`

async function getWeather() {
    try {
        const response = await fetch(weatherUrl)
        if (response.ok) {
            const data = await response.json()
            return {
                temperature: data.main.temp.toFixed(),
                low: data.main.temp_min.toFixed(),
                high: data.main.temp_max.toFixed(),
                description: data.weather[0].description,
                humidity: data.main.humidity,
                icon: data.weather[0].icon
            }
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastUrl)
        if (response.ok) {
            const data = await response.json()
            const forecastOne = data.list.slice(1, 8)
            const forecastTwo = data.list.slice(9, 16)
            const forecastThree = data.list.slice(17, 24)

            return [{
                    dayName: getDayOfWeek(forecastOne[0].dt_txt.slice(0, 10)),
                    ...getHighAndLow(forecastOne)
                },
                {
                    dayName: getDayOfWeek(forecastTwo[0].dt_txt.slice(0, 10)),
                    ...getHighAndLow(forecastTwo)
                },
                {
                    dayName: getDayOfWeek(forecastThree[0].dt_txt.slice(0, 10)),
                    ...getHighAndLow(forecastThree)
                }
            ]
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}

function getDayOfWeek(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    if (new Date(date).getDay() + 1 == 7){
        return daysOfWeek[0]
    } else {
        return daysOfWeek[new Date(date).getDay() + 1];
    }

}

function getHighAndLow(forecastData) {
    const highs = forecastData.map(data => data.main.temp_max.toFixed())
    const lows = forecastData.map(data => data.main.temp_min.toFixed())
    const high = Math.max(...highs)
    const low = Math.min(...lows)
    return {
        high,
        low
    }
}

function displayWeather(weatherData) {
    const currentTemperature = document.getElementById('current-temperature')
    currentTemperature.textContent = `${weatherData.temperature}°`

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.icon}.png`
    const icon = document.getElementById('current-icon')
    icon.setAttribute('src', iconsrc)

    const currentDescription = document.getElementById('current-description')
    currentDescription.textContent = weatherData.description

    const currentHumidity = document.getElementById('current-humidity')
    currentHumidity.textContent = `${weatherData.humidity}% Humidity`

    const highLow = document.getElementById('high-low')
    highLow.textContent = `${weatherData.high}° / ${weatherData.low}° `
}

function displayForecast(forecastData) {
    const weatherCards = document.getElementById('weather-cards')

    forecastData.map((data) => {
        const weatherCard = document.createElement('div')
        weatherCard.setAttribute('class', 'weather-card')

        const day = document.createElement('h3')
        day.setAttribute('class', 'day')
        day.textContent = data.dayName

        const weatherCardContent = document.createElement('div')
        weatherCardContent.setAttribute('class', 'weather-card-content')

        const high = document.createElement('p')
        high.setAttribute('class', 'tempHigh')
        high.textContent = `${data.high}°F`

        const divider = document.createElement('hr')
        divider.setAttribute('class', 'divider')

        const low = document.createElement('p')
        low.setAttribute('class', 'tempLow')
        low.textContent = `${data.low}°F`

        weatherCard.appendChild(day)
        weatherCardContent.appendChild(high)
        weatherCardContent.appendChild(divider)
        weatherCardContent.appendChild(low)

        weatherCard.append(weatherCardContent)

        weatherCards.append(weatherCard)
    })
}

getWeather().then(res => displayWeather(res))
getForecast().then(res => displayForecast(res))