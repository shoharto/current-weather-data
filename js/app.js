const API_KEY = `2e18f53f00352de97f1bb4a691985c46`;

const searchTemperature = async () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

}

