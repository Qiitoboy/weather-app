import React, { useState } from 'react';

// Component for searching cities
function SearchBar({ onSearch }) {
  const [city, setCity] = useState(''); // Keep track of city input

  // When the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page refresh
    if (city.trim()) {
      onSearch(city); // Send city name to parent
      setCity(''); // Clear input field
    }
  };

  return (
      <form onSubmit={handleSubmit} className="flex items-center space-x-2 mt-5">
      <input
        type="text"
        placeholder="Enter city name"
        value={city} // Controlled input
        onChange={(e) => setCity(e.target.value)} // Update city
        className="border rounded-md px-4 py-2 flex-grow"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
