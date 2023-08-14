// let userInput = document.querySelector("#userInput")
// function weatherHandler() {
//     console.log("weatherHandler is running!!!!");
//     console.log(userInput.value);

//     let API_KEY = "08db29924c7dd38aae65fcfbb8e53a77"
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=${API_KEY}&units=metric`)
//         .then(function (response) {
//             // handle success
//             console.log(response.data);
//             document.querySelector("#result").innerHTML = `Current Temperature of ${userInput.value} is ${response.data.main.temp}°C `
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error.data);
//             document.querySelector("#result").innerHTML = "weather data not retrieved"
//         })
// }














const apiKey = "08db29924c7dd38aae65fcfbb8e53a77";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const userInputCity = document.querySelector("#userInput")
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

}
checkWeatherBtn.addEventListener("click", () => {

    checkWeather(userInputCity.value)
})
