// Initialize map (default view: Manolo Fortich, Bukidnon)
const map = L.map('map').setView([8.3695, 124.8645], 13);

// Tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Health Center Markers
const centers = [
    [8.372036, 124.856406, "Calanawan", "Rural Health Center"],
    [8.353366, 124.813206, "Damilag", "Health Center"],
    [8.333822, 124.816017, "Agusan Canyon", "Health Center"],
    [8.41649, 124.80992, "Alae", "Health Center"]
];

// ================= WEATHER SYSTEM =================

// Siguraduhin match ni sa imong HTML IDs
const weatherInput = document.getElementById("cityinput");
const weatherBtn = document.getElementById("searchWeatherBtn");
const weatherResult = document.getElementById("weatherResult");

// Your OpenWeather API Key
const API_KEY = "db5423a48c6061813f1f9da3fb309b22";

// Fetch weather function
function fetchWeather() {
    const city = weatherInput.value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found.");
                return;
            }
            displayWeather(data);
        })
        .catch(() => alert("Error fetching weather data."));
}

// Display Weather
function displayWeather(data) {
    weatherResult.innerHTML = `
        <div class="weather-result">
            <h3>Weather Information</h3>
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Description:</strong> ${data.weather[0].description}</p>
        </div>
    `;
}

// Button Event
if (weatherBtn) {
    weatherBtn.addEventListener("click", fetchWeather);
}

// ================= SEARCH BOX =================
document.getElementById("searchBtn")?.addEventListener("click", () => {
    const searchBox = document.getElementById("resultBox");
    const input = document.getElementById("searchInput");

    if (!searchBox || !input) return;

    searchBox.classList.remove("hidden");
    searchBox.querySelector("p").textContent = "You searched for " + input.value;
});

