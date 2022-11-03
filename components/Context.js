import React, { useState, useEffect, useCallback } from "react";
import { enableScroll, disableScroll } from "./Header/Weather/PureFunctions";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleDayWeather, setSingleDayWeather] = useState({});
  const [restOfDaysWeathers, setRestOfDaysWeathers] = useState([{}]);

  // Search weather info, from today to 5 days forward.
  const CITY = "Bariloche";
  const DAYS_FORWARD = 5;
  const API_KEY_WEATHER = "b1b15e88fa797225412429c1c50c122a1";
  const URL = `https://pro.openweathermap.org/data/2.5/forecast/daily?q=${CITY}&cnt=${DAYS_FORWARD}&appid=${API_KEY_WEATHER}`;

  const fetchWeather = useCallback(async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (data.list) {
        const weatherDaysList = data.list;

        const {
          weather: [{ main, description, icon }] = [{}],
          temp: { day: temperature, max, min } = {},
          feels_like: { day: feelsLike = "" } = {},
          speed: windSpeed = "",
          humidity = "",
        } = weatherDaysList[0];
        const singleWeatherProps = {
          main,
          description,
          icon,
          feelsLike,
          temperature,
          max,
          min,
          windSpeed,
          humidity,
        };
        setSingleDayWeather(singleWeatherProps);
        setRestOfDaysWeathers(weatherDaysList);
      } else {
        new Error("Information can't be provided");
      }
    } catch (error) {
      console.log(error);
    }
  }, [CITY]);

  useEffect(() => {
    fetchWeather();
  }, [CITY]);

  // Open or close weather modal
  const openModal = () => {
    setIsModalOpen(true);
    disableScroll();
  };
  const closeModal = () => {
    setIsModalOpen(false);
    enableScroll();
  };

  return (
    <AppContext.Provider
      value={{
        singleDayWeather,
        restOfDaysWeathers,
        isModalOpen,
        CITY,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppProvider, AppContext };
