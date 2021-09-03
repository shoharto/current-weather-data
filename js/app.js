const API_KEY = `${secret.API_KEY}`;

const searchTemperature = async () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

}

