function updateWeatherData(response) {
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = response.data.city;

  let tempElement = document.querySelector("#current-temperature");
  let temperature = response.data.temperature.current;
  tempElement.innerHTML = Math.round(temperature);
}

function searchCityName(city) {
  let apiKey = "b4695dbeo3231b4ta37cdcd77c20d1fa";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherData);
}

function updateCityName(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = searchInput.value;
  searchCityName(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", updateCityName);

searchCityName("Edinburgh");
