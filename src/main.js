import { WEATHER_API_KEY } from "./config";
const API_KEY = WEATHER_API_KEY;
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM Elements
const weatherForm = document.querySelector('#weather-form');
const cityInput = document.querySelector('#city-input');
const weatherDisplay = document.querySelector('.weather-display');
const errorContainer = document.querySelector('.error-container');
const themeToggle = document.querySelector('#theme-toggle');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Check if there is a saved city in local storage and load it
  const savedCity = localStorage.getItem('city');
  if (savedCity) {
    getWeatherData(savedCity);
  }
});

// Click if there's a saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'modern') {
  document.body.classList.add('modern-theme');
}

weatherForm.addEventListener('submit', handleFormSubmit);
themeToggle.addEventListener('click', toggleTheme)

// Event Handlers
function handleFormSubmit(e) {
  e.preventDefault();

  const city = cityInput.value.trim();
  if (!city) {
    showError('Please enter a valid city name.');
    return;
  }

  getWeatherData(city);
}

// Function: Toggle Theme
function toggleTheme() {
  if (document.body.classList.contains('modern-theme')) {
    document.body.classList.remove('modern-theme');
    localStorage.removeItem('theme', 'standard');
  } else {
    document.body.classList.add('modern-theme');
    localStorage.setItem('theme', 'modern');
  }
}

// API Functions
async function getWeatherData(city) {
  try {
    // Show loading state
    weatherDisplay.innerHTML = '<p>Loading weather data...</p>';
    weatherDisplay.classList.add('active');
    hideError();

    // Build the API URL with query parameters
    const url = new URL(API_URL);
    url.searchParams.append('q', city);
    url.searchParams.append('appid', API_KEY);
    url.searchParams.append('units', 'metric');

    // Fetch weather data from the API
    const response = await fetch(url);

    // Handle the response status
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please check the spelling and try again.');
      } else {
        throw new Error('Failed to access the weather data. Please try again later.');
      }
    }

    // Parse the JSON response
    const data = await response.json();

    // Save the city to local storage
    localStorage.setItem('lastCity', city);

  // Update the UI with the weather data
    displayWeatherData(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    showError(error.message);

    // Hide the weather display if there was an error
    weatherDisplay.classList.remove('active');
  }
}

// UI Update Functions
function displayWeatherData(data) {
  // Extract the relevant data from the API response
  const {
    name,
    sys: { country },
    weather: [{ description, icon, main }],
    main: { temp, feels_like, humidity },
    wind: { speed },
  } = data; 

  // Get the appropriate weather icon based on the weather description
  const weatherIcon = getWeatherIcon(main.toLowerCase(), icon);

  // Create the weather display HTML 
  const weatherHTML = `
    <h2>${name}, ${country}</h2>
    <div class="custom-weather-icon">
      ${weatherIcon}
    </div>
    <p class="temperature">${Math.round(temp)}°C</p>
    <p class="description">${description}</p>
    
    <div class="details">
      <div class="detail-item">
        <span class="detail-icon"><i class="fas fa-temperature-low"></i></span>
        <span class="detail-label">Feels Like</span>
        <span>${Math.round(feels_like)}°C</span>
      </div>
      <div class="detail-item">
        <span class="detail-icon"><i class="fas fa-tint"></i></span>
        <span class="detail-label">Humidity</span>
        <span>${humidity}%</span>
      </div>
      <div class="detail-item">
        <span class="detail-icon"><i class="fas fa-wind"></i></span>
        <span class="detail-label">Wind Speed</span>
        <span>${speed} m/s</span>
      </div>
    </div>
  `;
  // Update the UI with the weather display
  weatherDisplay.innerHTML = weatherHTML;
  weatherDisplay.classList.add('active', 'fade-in');

  // Add class for responsive design
  document.querySelector('.main-container').classList.add('weather-active');

  // Layout to be adjusted on smaller screens
  if (window.innerWidth <= 445) {
    const mainElement = document.querySelector('.main-container');
    if (mainElement) {
      mainElement.style.gap = '1rem';
    }
  }
}

// Function to get appropriate weather icon based on weather conditions
function getWeatherIcon(condition, iconCode) {
  // Check weather condition and return the corresponding icon
  switch (condition) {
    case 'clear':
      return '<i class="fa-solid fa-sun fa-4x" style="color: #FFD700;"></i>';
    case 'clouds':
      return iconCode === '02d' || iconCode === '02n'
				? '<i class="fas fa-cloud-sun fa-4x" style="color: #AEB6BF;"></i>'
				: '<i class="fas fa-cloud fa-4x" style="color: #7F8C8D;"></i>';
    case 'rain':
      return '<i class="fa-solid fa-cloud-rain fa-4x" style="color: #3498DB;"></i>';
    case 'drizzle':
      return '<i class="fa-solid fa-cloud-showers-heavy fa-4x" style="color: #3498DB;"></i>';
    case 'snow':
      return '<i class="fa-solid fa-snowflake fa-4x" style="color: #D6EAF8;"></i>';
    case 'thunderstorm':
      return '<i class="fa-solid fa-bolt fa-4x" style="color: #F4D03F;"></i>';
    case 'mist':
    case 'fog':
    case 'haze':
      return '<i class="fa-solid fa-smog fa-4x" style="color: #BDC3C7;"></i>';
    default:
      // Default: use the OpenWeatherMap icon as fallback
      return `<img 
        class="weather-icon"
        src="https://openweathermap.org/img/wn/${iconCode}@2x.png"
        alt="${condition}"
        >`;
  }
}

// Message Display Functions
function showError(message) {
  errorContainer.innerHTML = message;
  errorContainer.hidden = false;
  errorContainer.classList.add('fade-in');
}

// Hide the error message
function hideError() {
  errorContainer.hidden = true;
  errorContainer.textContent = '';
}
