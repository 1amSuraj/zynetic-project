import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export function RecentSearches({ searches, onSelect }) {
  if (searches.length === 0) return null;

  return (
    <div className="w-full max-w-md mt-4">
      <div className="flex items-center gap-2 mb-2">
        <Clock className="w-4 h-4 text-gray-500" />
        <h3 className="text-sm text-gray-500 dark:text-gray-400">Recent Searches</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {searches.map((city, index) => (
          <motion.button
            key={`${city}-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => onSelect(city)}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {city}
          </motion.button>
        ))}
      </div>
    </div>
  );
}