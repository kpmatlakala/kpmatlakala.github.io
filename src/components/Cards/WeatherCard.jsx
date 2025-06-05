import React, { useEffect, useState } from "react";
import './WeatherCard.css';

const API_KEY = "895284fb2d2c50a520ea537456963d9c"; 

const MOCK_WEATHER = {
  name: "Polokwane",
  main: {
    temp: 22,
    temp_max: 25,
    temp_min: 18,
    humidity: 60,
  },
  weather: [
    { description: "clear sky", icon: "01d" }
  ],
  wind: { speed: 3.2 },
  cod: 200,
};

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("Polokwane");
  const [inputCity, setInputCity] = useState("Polokwane");

  const fetchWeather = (cityName) => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)},ZA&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.cod === 200) {
          setWeather(data);
          setCity(data.name);
        } else {
          setWeather(MOCK_WEATHER);
          setCity(cityName);
        }
        setLoading(false);
      })
      .catch(() => {
        setWeather(MOCK_WEATHER);
        setCity(cityName);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWeather(city);
    // eslint-disable-next-line
  }, []);

  const handleCityChange = (e) => setInputCity(e.target.value);

  const handleCitySubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      fetchWeather(inputCity.trim());
    }
  };

  const handleLocation = () => {
    if (!navigator.geolocation) return;
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data && data.cod === 200) {
              setWeather(data);
              setCity(data.name);
              setInputCity(data.name);
            } else {
              setWeather(MOCK_WEATHER);
            }
            setLoading(false);
          })
          .catch(() => {
            setWeather(MOCK_WEATHER);
            setLoading(false);
          });
      },
      () => {
        setLoading(false);
      }
    );
  };

  if (loading) return <div className="weather-card">Loading weather...</div>;

  const iconCode = weather.weather[0].icon;
  const iconUrl = iconCode
    ? `https://openweathermap.org/img/wn/${iconCode}@4x.png`
    : null;

  return (
    <div className="weather-card">
      <div className="cloud">
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={weather.weather[0].description}
            style={{ width: 80, height: 80 }}
          />
        ) : (
          <svg
            width="80"
            height="80"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="32" cy="44" rx="20" ry="12" fill="#75d6ff" />
            <ellipse cx="22" cy="40" rx="10" ry="8" fill="#bde5f5" />
            <ellipse cx="42" cy="40" rx="12" ry="9" fill="#bde5f5" />
          </svg>
        )}
      </div>
      <p className="main-text">{Math.round(weather.main.temp)}<small>℃</small></p>

      <div className="info">
        <div className="info-left">
          <p className="text-gray">
            ⬆{Math.round(weather.main.temp_max)}° 
            ⬇{Math.round(weather.main.temp_min)}°
            💧{weather.main.humidity}%
            💨{Math.round(weather.wind.speed)} m/s
          </p>
          <form onSubmit={handleCitySubmit} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <input
              type="text"
              value={inputCity}
              onChange={handleCityChange}
              className="weather-city-input"              
              aria-label="City"
            />

            <button
              type="submit"
              title="Change city"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.1em",
                color: "#75d6ff",
                padding: 0,
              }}
            >
              ✔
            </button>
            <button
              type="button"
              title="Use current location"
              onClick={handleLocation}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.2em",
                marginLeft: 2,
                color: "#f5a623",
                padding: 0,
              }}
            >
              📍
            </button>
          </form>
        </div>
        {/* <p className="info-right">{weather.weather[0].description}</p> */}
      </div>
    </div>
  );
};

export default WeatherCard;
