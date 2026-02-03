

const btn = document.getElementById("btn");
const result = document.getElementById("result");
const cityInput = document.getElementById("city");

const API_KEY = "a8d2b126d30326107fcd60307b476445"; 

btn.addEventListener("click", function () {
    const city = cityInput.value;

    if (city === "") {
        result.innerText = "Please enter a city name";
        return;
    }

    result.innerText = "Loading...";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {

            if (data.cod !== 200) {
                result.innerText = "City not found!";
                return;
            }

            result.innerHTML = `
                <p><b>City:</b> ${data.name}</p>
                <p><b>Temperature:</b> ${data.main.temp} °C</p>
                <p><b>Weather:</b> ${data.weather[0].description}</p>
            `;
        })
        .catch(() => {
            result.innerText = "Something went wrong!";
        });
});