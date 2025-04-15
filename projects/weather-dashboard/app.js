// API key for OpenWeatherMap from config file
const API_KEY = config.OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// DOM elements
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const currentWeatherSection = document.getElementById('current-weather');
const forecastSection = document.getElementById('forecast');
const locationsList = document.getElementById('saved-locations');
const loadingIndicator = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');

// Saved locations in local storage
let savedLocations = JSON.parse(localStorage.getItem('weatherLocations')) || [];

// Initialize the app
function init() {
    loadSavedLocations();
    
    // If there are saved locations, load the last one
    if (savedLocations.length > 0) {
        getWeatherData(savedLocations[0]);
    }
    
    // Event listeners
    searchForm.addEventListener('submit', handleFormSubmit);
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const city = cityInput.value.trim();
    
    if (city) {
        getWeatherData(city);
        cityInput.value = '';
    }
}

// Get weather data from API
async function getWeatherData(city) {
    showLoading(true);
    hideError();
    
    try {
        // Get coordinates for the city
        const geoData = await fetchGeoData(city);
        
        if (!geoData || geoData.length === 0) {
            throw new Error('Location not found');
        }
        
        const { lat, lon, name } = geoData[0];
        
        // Get current weather data
        const currentData = await fetchCurrentWeather(lat, lon);
        
        // Get 5-day forecast
        const forecastData = await fetchForecast(lat, lon);
        
        // Save location if not already saved
        saveLocation(name);
        
        // Update UI
        displayCurrentWeather(currentData, name);
        displayForecast(forecastData);
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        showError(error.message);
    } finally {
        showLoading(false);
    }
}

// Fetch geographic coordinates
async function fetchGeoData(city) {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
    
    if (!response.ok) {
        throw new Error('Failed to fetch location data');
    }
    
    return await response.json();
}

// Fetch current weather
async function fetchCurrentWeather(lat, lon) {
    const response = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    
    if (!response.ok) {
        throw new Error('Failed to fetch current weather');
    }
    
    return await response.json();
}

// Fetch forecast
async function fetchForecast(lat, lon) {
    const response = await fetch(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    
    if (!response.ok) {
        throw new Error('Failed to fetch forecast');
    }
    
    return await response.json();
}

// Display current weather
function displayCurrentWeather(data, cityName) {
    const { main, weather, wind, sys } = data;
    const icon = weather[0].icon;
    const description = weather[0].description;
    
    const html = `
        <div class="current-weather-card">
            <div class="current-weather-header">
                <h2>${cityName}</h2>
                <p>${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div class="current-weather-body">
                <div class="weather-icon">
                    <img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="${description}">
                    <p>${description}</p>
                </div>
                <div class="weather-details">
                    <div class="temperature">
                        <h3>${Math.round(main.temp)}°C</h3>
                        <p>Feels like: ${Math.round(main.feels_like)}°C</p>
                    </div>
                    <div class="weather-info">
                        <p><i class="fas fa-tint"></i> Humidity: ${main.humidity}%</p>
                        <p><i class="fas fa-wind"></i> Wind: ${Math.round(wind.speed * 3.6)} km/h</p>
                        <p><i class="fas fa-compress-arrows-alt"></i> Pressure: ${main.pressure} hPa</p>
                        <p><i class="fas fa-sun"></i> Sunrise: ${formatTime(sys.sunrise)}</p>
                        <p><i class="fas fa-moon"></i> Sunset: ${formatTime(sys.sunset)}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    currentWeatherSection.innerHTML = html;
}

// Display forecast
function displayForecast(data) {
    // Group forecast data by day
    const groupedForecast = groupForecastByDay(data.list);
    
    let html = '<h2>5-Day Forecast</h2><div class="forecast-cards">';
    
    // Create forecast cards for each day
    for (const day in groupedForecast) {
        const forecast = groupedForecast[day];
        const { weather, main, dt } = forecast;
        const date = new Date(dt * 1000);
        
        html += `
            <div class="forecast-card">
                <h3>${date.toLocaleDateString('en-US', { weekday: 'short' })}</h3>
                <p>${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].description}">
                <p class="forecast-temp">${Math.round(main.temp_max)}°C / ${Math.round(main.temp_min)}°C</p>
                <p>${weather[0].description}</p>
            </div>
        `;
    }
    
    html += '</div>';
    forecastSection.innerHTML = html;
}

// Group forecast data by day
function groupForecastByDay(forecastList) {
    const groupedData = {};
    
    forecastList.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toDateString();
        
        if (!groupedData[day] || (date.getHours() >= 12 && date.getHours() <= 14)) {
            // Take the midday forecast as representative for the day
            groupedData[day] = item;
        }
    });
    
    return groupedData;
}

// Save location to local storage
function saveLocation(city) {
    // Don't save duplicates
    if (!savedLocations.includes(city)) {
        savedLocations.unshift(city);
        // Keep only the 5 most recent locations
        if (savedLocations.length > 5) {
            savedLocations = savedLocations.slice(0, 5);
        }
        localStorage.setItem('weatherLocations', JSON.stringify(savedLocations));
        loadSavedLocations();
    }
}

// Load saved locations from local storage
function loadSavedLocations() {
    let html = '';
    
    savedLocations.forEach(city => {
        html += `<li onclick="getWeatherData('${city}')">${city}</li>`;
    });
    
    locationsList.innerHTML = html;
}

// Format time from Unix timestamp
function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

// Show/hide loading indicator
function showLoading(isLoading) {
    loadingIndicator.style.display = isLoading ? 'flex' : 'none';
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Hide error message
function hideError() {
    errorMessage.style.display = 'none';
}

// Initialize app when DOM content is loaded
document.addEventListener('DOMContentLoaded', init);

// Make getWeatherData available globally for onclick handlers
window.getWeatherData = getWeatherData;