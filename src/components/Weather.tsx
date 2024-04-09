import React, { useEffect, useState } from "react";

type WeatherCondition = {
  id: number;
  main: string;
  description: string;
};

type CurrentWeather = {
  temp: number;
  weather: WeatherCondition[];
};

type WeatherData = {
  current: CurrentWeather;
};

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "3c1392e3468ecc8dc7f462ac3d8e7f78"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=32.45&lon=-81.78&appid=${apiKey}&units=metric`;

    const fetchWeather = async () => {
      try {
        const response = await fetch(url);
        const data: WeatherData = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherImage = (currentWeather: CurrentWeather) => {
    const { temp, weather } = currentWeather;
    const main = weather[0].main;

    if (temp > 35) return "/images/too_hot.png";
    if (temp < 0) return "/images/too_cold.png";
    switch (main) {
      case "Clear":
        return "/images/sunny.png";
      case "Clouds":
        return "/images/cloudy.png";
      case "Rain":
        return "/images/rainy.png";
      default:
        return "/images/cloudy.png"; // Default image for other conditions
    }
  };

  const getWeatherDescription = (currentWeather: CurrentWeather): string => {
    const { temp, weather } = currentWeather;
    const main = weather[0].main;

    if (temp > 35)
      return "It's extremely hot outside, not a great day for outdoor activities.";
    if (temp < 0) return "Brrr, it's freezing! Better stay warm indoors.";
    switch (main) {
      case "Clear":
        return "It's a clear and sunny day, perfect for flying your drone!";
      case "Clouds":
        return "It's cloudy, but visibility is good. It should be fine to fly your drone.";
      case "Rain":
        return "Rain is expected. It's not safe to fly your drone in wet conditions.";
      default:
        return "Weather conditions are variable. Please check for more details.";
    }
  };

  if (loading) return <p>Loading weather...</p>;
  if (!weather) return <p>Unable to load weather information.</p>;

  return (
    <div className="weather-container">
      <h1 className="weather-description">
        {getWeatherDescription(weather.current)}
      </h1>
      <img
        src={getWeatherImage(weather.current)}
        alt="Weather condition"
        className="weather-image"
      />
      <h2 className="current-weather">
        Current weather: {weather.current.weather[0].description} in your area.
      </h2>
      <iframe
        title="Weather Radar"
        className="weather-radar"
        src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=11&overlay=radar&product=radar&level=surface&lat=32.43&lon=-81.784"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Weather;
