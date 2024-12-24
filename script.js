// script.js
document.getElementById('search-btn').addEventListener('click', () => {
    const locationInput = document.getElementById('location-input').value;
    const weatherInfo = document.querySelector('.weather-info');
  
    // Example data for simulation
    const weatherData = {
      sunny: {
        description: "Sunny and bright",
        temperature: "30°C",
        humidity: "40%",
        windSpeed: "5 km/h",
      },
      cloudy: {
        description: "Cloudy with overcast skies",
        temperature: "22°C",
        humidity: "60%",
        windSpeed: "10 km/h",
      },
      rainy: {
        description: "Rainy with heavy showers",
        temperature: "18°C",
        humidity: "85%",
        windSpeed: "20 km/h",
      },
    };
  
    // Simulate changing weather based on user input
    let weatherType = "sunny"; // Default
  
    if (locationInput.toLowerCase().includes("cloud")) {
      weatherType = "cloudy";
    } else if (locationInput.toLowerCase().includes("rain")) {
      weatherType = "rainy";
    }
  
    // Update weather information
    document.getElementById('city-name').innerText = locationInput || "Unknown Location";
    document.getElementById('weather-description').innerText = weatherData[weatherType].description;
    document.getElementById('temperature').innerText = `Temperature: ${weatherData[weatherType].temperature}`;
    document.getElementById('humidity').innerText = `Humidity: ${weatherData[weatherType].humidity}`;
    document.getElementById('wind-speed').innerText = `Wind Speed: ${weatherData[weatherType].windSpeed}`;
  
    // Change background dynamically
    document.body.className = weatherType; // Apply class to body (sunny, cloudy, rainy)
  });
  