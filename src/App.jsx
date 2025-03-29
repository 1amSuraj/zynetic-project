import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { RecentSearches } from './components/RecentSearches';
import { SearchBar } from './components/SearchBar';
import { ThemeToggle } from './components/ThemeToggle';
import { WeatherCard } from './components/WeatherCard';

const API_KEY = 'e3cde117906f598c934a956a7887fc84'; // Replace with your OpenWeatherMap API key
const MAX_RECENT_SEARCHES = 5;

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem('recentSearches');
    return saved ? JSON.parse(saved) : [];
  });

  const fetchWeather = useCallback(async (city) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);

      // Update recent searches
      const updatedSearches = [
        city,
        ...recentSearches.filter((s) => s.toLowerCase() !== city.toLowerCase()),
      ].slice(0, MAX_RECENT_SEARCHES);

      setRecentSearches(updatedSearches);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    } catch (err) {
      setError('City not found or there was an error fetching the weather data.');
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  }, [recentSearches]);

  useEffect(() => {
    if (recentSearches.length > 0) {
      fetchWeather(recentSearches[0]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-blue-300 dark:bg-gray-900 transition-colors">
      <ThemeToggle />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Weather Dashboard
          </h1>

          <SearchBar onSearch={fetchWeather} isLoading={isLoading} />
          <RecentSearches searches={recentSearches} onSelect={fetchWeather} />

          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center"
              >
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
              </motion.div>
            ) : error ? (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center gap-2 text-red-500 bg-red-100 dark:bg-red-900/20 px-4 py-2 rounded-lg"
              >
                <AlertCircle className="w-5 h-5" />
                <p>{error}</p>
              </motion.div>
            ) : weatherData ? (
              <WeatherCard
                key="weather"
                data={weatherData}
                onRefresh={() => fetchWeather(weatherData.name)}
              />
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;