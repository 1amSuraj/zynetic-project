import { motion } from 'framer-motion';
import { Cloud, Droplets, Wind } from 'lucide-react';

export function WeatherCard({ data, onRefresh }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{data.name}</h2>
          <p className="text-gray-600 dark:text-gray-300">{data.weather[0].description}</p>
        </div>
        <button
          onClick={onRefresh}
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <Cloud className="w-6 h-6" />
        </button>
      </div>

      <div className="flex items-center justify-center my-6">
        <div className="text-center">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
            className="w-20 h-20 mx-auto"
          />
          <p className="text-4xl font-bold text-gray-800 dark:text-white">
            {Math.round(data.main.temp)}°C
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <div className="flex items-center">
          <Droplets className="w-5 h-5 text-blue-500 mr-2" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Humidity</p>
            <p className="font-semibold text-gray-800 dark:text-white">{data.main.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center">
          <Wind className="w-5 h-5 text-blue-500 mr-2" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Wind Speed</p>
            <p className="font-semibold text-gray-800 dark:text-white">{data.wind.speed} km/h</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}