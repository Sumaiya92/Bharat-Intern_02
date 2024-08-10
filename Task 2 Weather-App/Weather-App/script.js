document.getElementById('fetch-weather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const apiKey = '2d4715fe816333c66397ec1701d7dbd4'; // Replace with your OpenWeather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.cod === 200) {
                const weatherCard = document.getElementById('weather-card');
                const weatherImage = document.getElementById('weather-image');
                const cityName = document.getElementById('city-name');
                const temperature = document.getElementById('temperature');
                const condition = document.getElementById('condition');
                const backgroundLayer = document.getElementById('background-layer');               
                const humidity = document.getElementById('humidity');             
                const  windspeed= document.getElementById('windspeed');               

                cityName.textContent = data.name;
                temperature.textContent = `${data.main.temp}°C`;
                condition.textContent =`Description: ${data.weather[0].description}`;
                humidity.textContent= `Humidity:${data.main.humidity}%`
                windspeed.textContent=`Windspeed:${data.wind.speed} m/s`

                // Make the weather card visible
                weatherCard.style.display = "block";

                // Dynamically change the background image and card color based on weather condition
                switch (data.weather[0].main.toLowerCase()) {
                    case 'clear':
                        weatherImage.style.backgroundImage = "url('images/clear.jpg')";
                        backgroundLayer.style.backgroundImage = "url('images/clear.jpg')";
                        break;
                    case 'rain':
                    case 'light rain':
                        weatherImage.style.backgroundImage = "url('images/rain.jpg')";
                        backgroundLayer.style.backgroundImage = "url('images/rain.jpg')";
                        break;
                    case 'clouds':
                        weatherImage.style.backgroundImage = "url('images/clouds.jpg')";
                        backgroundLayer.style.backgroundImage = "url('images/clouds.jpg')";
                        break;
                    case 'snow':
                        weatherImage.style.backgroundImage = "url('images/snow.jpg')";
                        backgroundLayer.style.backgroundImage = "url('images/snow.jpg')";
                        break;
                    case 'thunderstorm':
                        weatherImage.style.backgroundImage = "url('images/thunderstorm.jpg')";
                           
                            backgroundLayer.style.backgroundImage = "url('images/thunderstorm.jpg')";
                        break;
                    case 'haze':
                    case 'mist':
                    case 'fog':
                        weatherImage.style.backgroundImage = "url('images/mist.jpg')";
                          backgroundLayer.style.backgroundImage = "url('images/mist.jpg')";
                        break;
                    default:
                        weatherImage.style.backgroundImage = "url('images/clear.jpg')";
                      
                        backgroundLayer.style.backgroundImage = "url('images/clear.jpg')";
                        break;
                }
            } else {
                alert('City not found. Please enter a valid city name.');
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
