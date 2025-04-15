/**
 * Weather Map Component
 * This component integrates a map view showing weather data visualization.
 */

class WeatherMap {
    constructor() {
        this.mapContainer = document.getElementById('weather-map-container');
        this.map = null;
        this.markers = [];
        this.weatherLayer = null;
    }

    /**
     * Initialize the map with a given location
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude
     * @param {string} cityName - Name of the city
     */
    initMap(lat, lon, cityName) {
        // Check if map library is available (would be loaded via external CDN in production)
        if (typeof L === 'undefined') {
            console.warn('Leaflet library not loaded. Map functionality is disabled.');
            return;
        }
        
        // If map doesn't exist, create it
        if (!this.map) {
            this.map = L.map(this.mapContainer).setView([lat, lon], 10);
            
            // Add tile layer (OpenStreetMap)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);
            
            // Show the map container
            this.mapContainer.style.display = 'block';
        } else {
            // If map exists, just update the view
            this.map.setView([lat, lon], 10);
        }
        
        // Clear existing markers
        this.clearMarkers();
        
        // Add marker for the current city
        const marker = L.marker([lat, lon])
            .addTo(this.map)
            .bindPopup(`<b>${cityName}</b><br>Current weather location`)
            .openPopup();
            
        this.markers.push(marker);
    }
    
    /**
     * Add weather overlay to the map
     * @param {string} weatherType - Type of weather overlay (temp, clouds, precipitation, etc.)
     */
    addWeatherLayer(weatherType = 'temp') {
        if (!this.map) return;
        
        // Remove existing weather layer if present
        if (this.weatherLayer) {
            this.map.removeLayer(this.weatherLayer);
        }
        
        // Add new weather layer from OpenWeatherMap
        this.weatherLayer = L.tileLayer(`https://tile.openweathermap.org/map/${weatherType}/{z}/{x}/{y}.png?appid=${API_KEY}`, {
            attribution: '&copy; <a href="https://openweathermap.org">OpenWeatherMap</a>',
            maxZoom: 19
        }).addTo(this.map);
    }
    
    /**
     * Clear all markers from the map
     */
    clearMarkers() {
        this.markers.forEach(marker => {
            this.map.removeLayer(marker);
        });
        this.markers = [];
    }
    
    /**
     * Toggle the map visibility
     */
    toggleMapVisibility() {
        if (this.mapContainer.style.display === 'none' || this.mapContainer.style.display === '') {
            this.mapContainer.style.display = 'block';
            
            // Trigger a resize event to fix any rendering issues
            if (this.map) {
                setTimeout(() => {
                    this.map.invalidateSize();
                }, 100);
            }
        } else {
            this.mapContainer.style.display = 'none';
        }
    }
}

// Create an instance of the weather map
const weatherMap = new WeatherMap();

// Extend the main app to integrate the map
document.addEventListener('DOMContentLoaded', () => {
    // This will run after app.js has initialized
    
    // Override getWeatherData to update the map
    const originalGetWeatherData = window.getWeatherData;
    
    if (originalGetWeatherData) {
        window.getWeatherData = async function(city) {
            await originalGetWeatherData(city);
            
            try {
                // Once weather data is fetched, initialize the map
                const geoData = await fetchGeoData(city);
                
                if (geoData && geoData.length > 0) {
                    const { lat, lon, name } = geoData[0];
                    weatherMap.initMap(lat, lon, name);
                    weatherMap.addWeatherLayer('temp');
                }
            } catch (error) {
                console.error('Error initializing weather map:', error);
            }
        };
    }
    
    // Add toggle button for map visibility
    const forecastSection = document.getElementById('forecast');
    if (forecastSection) {
        const mapToggleButton = document.createElement('button');
        mapToggleButton.className = 'toggle-map-btn';
        mapToggleButton.innerHTML = '<i class="fas fa-map-marked-alt"></i> Toggle Weather Map';
        mapToggleButton.onclick = () => weatherMap.toggleMapVisibility();
        
        forecastSection.after(mapToggleButton);
        
        // Add styles for the toggle button
        const style = document.createElement('style');
        style.textContent = `
            .toggle-map-btn {
                display: block;
                margin: 30px auto 0;
                padding: 12px 20px;
                background-color: var(--primary-color);
                color: white;
                border: none;
                border-radius: var(--border-radius);
                cursor: pointer;
                font-family: inherit;
                font-size: 16px;
                transition: var(--transition);
            }
            
            .toggle-map-btn:hover {
                background-color: #2980b9;
            }
            
            .toggle-map-btn i {
                margin-right: 8px;
            }
        `;
        document.head.appendChild(style);
    }
});