# Weather Dashboard

A responsive weather dashboard application that displays current weather conditions and a 5-day forecast for cities around the world. Data is provided by the OpenWeatherMap API.

## Features

- Search for weather by city name
- View current weather conditions
- See 5-day weather forecast
- Saved locations for quick access
- Interactive weather map
- Mobile-responsive design

## Setup Instructions

### API Key Configuration

This project requires an OpenWeatherMap API key to function. For security reasons, the API key is not included in the repository.

To set up your own API key:

1. Sign up for a free API key at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up)
2. Copy the file `config.example.js` to a new file named `config.js`
3. Replace `'YOUR_OPENWEATHERMAP_API_KEY_HERE'` with your actual API key

```javascript
// config.js
const config = {
  OPENWEATHER_API_KEY: 'your-api-key-here'
};
```

**Note:** The `config.js` file is listed in `.gitignore` to prevent accidentally committing your API key to version control.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Leaflet.js for maps
- FontAwesome for icons
- OpenWeatherMap API

## Project Structure

- `index.html` - Main HTML file
- `styles.css` - CSS stylesheet
- `app.js` - Main application logic
- `config.js` - API key configuration (not in repo)
- `components/weatherMap.js` - Map component logic