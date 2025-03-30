# Weather Dashboard 🌤️

## 🚀 Project Overview
This is a **Weather Dashboard Web App** built with **Vite + React + JSX + Tailwind CSS**. It allows users to search for any city and view real-time weather information using the **OpenWeatherMap API**.

## ✨ Features
- 🌍 **Search for any city** to get live weather updates
- 🌡️ **Displays weather details** (Temperature, Humidity, Wind Speed, Weather Condition, and Icon)
- 🔍 **Autocomplete city suggestions** while typing
- 🌑🌞 **Dark/Light mode toggle**
- 📜 **Recent search history** (last 5 cities)
- 🔄 **Refresh button** to update weather data
- 🖥️ **Fully responsive** (mobile & desktop support)
- ⚡ **Fast performance** with Vite

## 🛠️ Tech Stack
- **Frontend**: React, JSX, Vite
- **Styling**: Tailwind CSS
- **API**: OpenWeatherMap API
- **State Management**: React Hooks

## 🎯 Installation & Setup
1. **Clone the repository**
   ```sh
   https://github.com/1amSuraj/zynetic-project.git
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Get OpenWeatherMap API Key**
   - Register at [OpenWeatherMap](https://openweathermap.org/api)
   - Copy your API key
   - Create a **`.env`** file in the root directory and add:
     ```sh
     VITE_WEATHER_API_KEY=your_api_key_here
     ```
4. **Run the project**
   ```sh
   npm run dev
   ```
5. **Open the app in your browser**
   - Default URL: `http://localhost:5173`

## 🔌 API Integration
- **API Used**: [OpenWeatherMap Current Weather API](https://openweathermap.org/current)
- **Example API Call:**
  ```sh
  https://api.openweathermap.org/data/2.5/weather?q={city}&appid={YOUR_API_KEY}&units=metric
  ```
- **Response Data Includes:**
  - City Name, Temperature, Humidity, Wind Speed, Weather Condition, and Icon.

## 🚀 Deployment
To deploy your project:
1. **Build the project**
   ```sh
   npm run build
   ```
2. **Deploy on Vercel / Netlify**
   - Follow their respective guides for Vite projects.

## 📌 Folder Structure
```
📂 weather-dashboard/
├── 📂 src/
│   ├── 📂 components/        # Reusable UI components
│   ├── 📂 styles/            # Tailwind global styles
│   ├── 📂 types/             # TypeScript types
│   ├── 📄 App.jsx            # Main App component
│   ├── 📄 main.jsx           # React entry point
├── 📄 index.css              # Global styles
├── 📄 vite.config.js         # Vite configuration
└── 📄 .env                   # API key storage
```

## 📜 License
This project is open-source and free to use. Feel free to contribute!


