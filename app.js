const apiKey = "c2e385934e32e72e916eb8aed96a402f";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".inputs input");
const searchBtn = document.querySelector(".inputs button");
const weatherIcon = document.querySelector(".weather-icon");
const b = document.querySelector("body");
const c = document.querySelector(".card");

async function getWeather(city) {

    const reponse = await fetch(url + city + `&appid=${apiKey}`);
    var data = await reponse.json();
    console.log(data);

    document.querySelector("#city-name").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
        b.style.backgroundImage = "url('https://images.pexels.com/photos/31437628/pexels-photo-31437628/free-photo-of-misty-pine-forest-overlooking-tranquil-lake-in-norway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        c.style.backgroundColor = "rgba(0, 0, 0, 0)";
        
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
        b.style.backgroundImage = "url('https://images.pexels.com/photos/31502930/pexels-photo-31502930/free-photo-of-wind-turbine-in-vibrant-yellow-canola-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        c.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
        b.style.backgroundImage = "url('https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        c.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
        b.style.backgroundImage = "url('https://images.pexels.com/photos/31520537/pexels-photo-31520537/free-photo-of-snow-covered-road-in-winter-wonderland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        c.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    else if(data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
        b.style.backgroundImage = "url('https://images.pexels.com/photos/31499089/pexels-photo-31499089/free-photo-of-majestic-swiss-alps-under-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        c.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
        b.style.backgroundImage = "url('https://images.pexels.com/photos/31437625/pexels-photo-31437625/free-photo-of-misty-forested-hills-in-buskerud-norway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        c.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }

    // document.querySelector("#weather").style.display = "block";

}

searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
})

