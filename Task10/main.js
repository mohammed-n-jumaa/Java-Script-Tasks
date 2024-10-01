    function renderWeather(weather) {
        let resultsContainer = document.querySelector('#wetherResult');
        resultsContainer.innerHTML = ''; // Clear previous results

        let city = document.createElement("h2");
        city.innerHTML = weather.name + ' ' + getWeatherIcon(weather.weather[0].main);
        resultsContainer.append(city);

        let temp = document.createElement('p');
        temp.innerHTML = '<i class="fas fa-thermometer-half weather-icons"></i> Temperature: ' + weather.main.temp + ' °C';
        resultsContainer.append(temp);

        let humidity = document.createElement('p');
        humidity.innerHTML = '<i class="fas fa-tint weather-icons"></i> Humidity: ' + weather.main.humidity + '%';
        resultsContainer.append(humidity);

        let wind = document.createElement('p');
        wind.innerHTML = '<i class="fas fa-wind weather-icons"></i> Wind: ' + weather.wind.speed + ' mph ' + weather.wind.deg + '°';
        resultsContainer.append(wind);

        let weatherDetails = weather.weather[0];
        if (weatherDetails && weatherDetails.description) {
            let description = document.createElement('p');
            description.innerHTML = '<i class="fas fa-cloud-sun weather-icons"></i> ' + weatherDetails.description;
            resultsContainer.append(description);
        }

        resultsContainer.style.display = 'block';
    }

    function fetchWeather(city) {
        let apiKey = '07e472e214c3ceead16450bc85f53add';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => renderWeather(data))
            .catch(error => {
                console.error("Error fetching weather data:", error);
                alert("City not found. Please try again.");
            });
    }

    // Fetch weather by latitude and longitude
    function fetchWeatherByCoords(lat, lon) {
        let apiKey = '07e472e214c3ceead16450bc85f53add';
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => renderWeather(data))
            .catch(error => {
                console.error("Error fetching weather data:", error);
                alert("Unable to get weather data for your location.");
            });
    }

    function searchWeather() {
        let city = document.querySelector('#cityInput').value;
        if (city.trim() !== "") {
            fetchWeather(city);
        } else {
            alert("Please enter a city name.");
        }
    }

    function getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    let lat = position.coords.latitude;
                    let lon = position.coords.longitude;
                    fetchWeatherByCoords(lat, lon); 
                },
                error => {
                    console.error("Error getting location:", error);
                    alert("Unable to retrieve your location.");
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    // Get the weather icon based on the weather condition
    function getWeatherIcon(condition) {
        switch (condition.toLowerCase()) {
            case 'clear':
                return '<i class="fas fa-sun"></i>';
            case 'clouds':
                return '<i class="fas fa-cloud"></i>';
            case 'rain':
                return '<i class="fas fa-cloud-showers-heavy"></i>';
            case 'snow':
                return '<i class="fas fa-snowflake"></i>';
            case 'thunderstorm':
                return '<i class="fas fa-bolt"></i>';
            case 'drizzle':
                return '<i class="fas fa-cloud-rain"></i>';
            default:
                return '<i class="fas fa-cloud-sun"></i>';
        }
    }