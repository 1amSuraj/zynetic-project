import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function SearchBar({ onSearch, isLoading }) {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=e3cde117906f598c934a956a7887fc84`
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching city suggestions:', error);
      setSuggestions([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
    fetchSuggestions(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion.name);
    setSuggestions([]);
    onSearch(suggestion.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setSuggestions([]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md relative">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name..."
          className="w-full px-4 py-2 text-gray-700 bg-white dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg mt-1 max-h-48 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {suggestion.name}, {suggestion.country}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}