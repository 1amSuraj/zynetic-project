// This file defines the structure of weather-related data.

export const WeatherData = {
    name: '',
    main: {
      temp: 0,
      humidity: 0,
    },
    weather: [
      {
        main: '',
        description: '',
        icon: '',
      },
    ],
    wind: {
      speed: 0,
    },
  };
  
  export const ForecastData = {
    list: [
      {
        dt: 0,
        main: {
          temp: 0,
          humidity: 0,
        },
        weather: [
          {
            main: '',
            description: '',
            icon: '',
          },
        ],
        wind: {
          speed: 0,
        },
        dt_txt: '',
      },
    ],
  };