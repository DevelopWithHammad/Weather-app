const apiKey = "08db29924c7dd38aae65fcfbb8e53a77";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const userInputCity = document.querySelector("#userInputCity")
const checkWeatherBtn = document.querySelector("#submitBtn")
const weatherIcon = document.querySelector(".weatherIcon")



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json()

    console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`
    document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "assests/clouds.png"
    }
    else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "assests/clear.png"
    }
    else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "assests/rain.png"
    }
    else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "assests/drizzle.png"
    }
    else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "assests/mist.png"
    }

    document.querySelector("#resultDiv").style.display = "block"

}
checkWeatherBtn.addEventListener("click", () => {

    checkWeather(userInputCity.value)
})
