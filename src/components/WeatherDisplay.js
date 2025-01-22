import React from 'react';

// Component to show weather details
function WeatherDisplay({ weather }) {
  if (!weather) return null; // Show nothing if no weather data

  const { name, main, weather: weatherDetails } = weather;

  return (
    <div className="mt-5 p-5 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-3">Weather in {name}</h2>
      <p>
        <strong>Temperature:</strong> {main.temp}°C
      </p>
      <p>
        <strong>Humidity:</strong> {main.humidity}%
      </p>
      <p>
        <strong>Condition:</strong> {weatherDetails[0].description}
      </p>
    </div>
  );
}

export default WeatherDisplay;
