const API_KEY = `2e18f53f00352de97f1bb4a691985c46`;

const searchTemperature = async () => {
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const res = await fetch(url);
    const data = await res.json();
    displayTemperatureData(data);
};

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
};
const displayTemperatureData = (temperatures) => {
    setInnerText("city", temperatures.name);
    setInnerText("temp", temperatures.main.temp);
    setInnerText("weather", temperatures.weather[0].main);
    setInnerText("weather", temperatures.weather[0].main);
    //set weather icon
    const url = `https://openweathermap.org/img/wn/${temperatures.weather[0].icon}@2x.png`;

    const imgIcon = document.getElementById("weather-icon");
    imgIcon.setAttribute("src", url);
};
