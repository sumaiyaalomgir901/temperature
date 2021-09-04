const API_KEY = `603792beb4539a66c1ddcc36a54ec37d`;
const weatherSearch = () => {
  const inputWeather = document.getElementById("input-weather").value;
  document.getElementById("input-weather").value = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputWeather}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWeather(data));
};
const displayWeather = (temperature) => {
  console.log(temperature);
  const weatherDetails = document.getElementById("weather-details");
  weatherDetails.innerHTML = `
      <img src="https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png" alt="" />
      <h1>${temperature.name}</h1>
      <h3><span>${temperature.main.temp}</span>&deg;C</h3>
      <h1 class="lead">${temperature.weather[0].main}</h1>
  `;
};
