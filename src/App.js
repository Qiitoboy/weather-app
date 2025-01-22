import React, { useState } from 'react';
import ErrorMessage from './components/ErrorMessage';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

// Main app component
function App() {
  const [weather, setWeather] = useState(null); // Store weather data
  const [error, setError] = useState(''); // Store error message

  // Fetch weather data from API
  const fetchWeather = async (city) => {
    const apiKey = 'e02002afb3229ff5825e13fc6d053754'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      setError(''); // Clear previous error
      const response = await fetch(url);
      if (!response.ok) throw new Error('City not found!'); // Handle errors
      const data = await response.json();
      setWeather(data); // Save weather data
    } catch (err) {
      setWeather(null); // Clear weather on error
      setError(err.message); // Save error message
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-center mb-5">Weather App</h1>
      <SearchBar onSearch={fetchWeather} /> {/* Search city */}
      <ErrorMessage message={error} /> {/* Show error if exists */}
      <WeatherDisplay weather={weather} /> {/* Show weather if exists */}
    </div>
  );
} 

export default App;
