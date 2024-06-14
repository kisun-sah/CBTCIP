document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = document.getElementById('submit');

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'dbc28dc557msh83a93298ce61e20p1e9f23jsn412751f9ccfc',
            'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const getWeather = (city) => {
        document.querySelector('.cityName').textContent = city;

        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);

                document.getElementById('cloud_pct').textContent = response.cloud_pct;
                document.getElementById('feels_like').textContent = response.feels_like;
                document.getElementById('humidity').textContent = response.humidity;
                document.getElementById('humidity2').textContent = response.humidity;
                document.getElementById('temp').textContent = response.temp;
                document.getElementById('temp2').textContent = response.temp;
                document.getElementById('min_temp').textContent = response.min_temp;
                document.getElementById('max_temp').textContent = response.max_temp;
                document.getElementById('wind_speed').textContent = response.wind_speed;
                document.getElementById('wind_speed2').textContent = response.wind_speed;
                document.getElementById('wind_degrees').textContent = response.wind_degrees;
                document.getElementById('sunrise').textContent = response.sunrise;
                document.getElementById('sunset').textContent = response.sunset;
            })
            .catch(err => console.log('Fetch error: ', err));
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const city = document.getElementById('city').value;
        getWeather(city);
    });

    // Initial weather data for Delhi
    getWeather("Delhi");

    // Add event listener for the <th> element with id 'city'
    document.getElementById('city').addEventListener('click', () => {
        // Call getWeather function with Shanghai as the city parameter
        getWeather("Shanghai");
    });
});
