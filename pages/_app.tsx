import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/output.css";
import type { AppProps } from "next/app";

// state
import { AppContext } from "../Context";
import store from "../redux/store";
import { Provider } from "react-redux";

// components
// @ts-ignore
import Header from "../components/Header";
// @ts-ignore
import Footer from "../components/Footer/index";
import { useCallback, useEffect, useState } from "react";
import { disableScroll, enableScroll } from "../utils/functions/PureFunctions";

export default function App({ Component, pageProps }: AppProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleDayWeather, setSingleDayWeather] = useState({});
  const [restOfDaysWeathers, setRestOfDaysWeathers] = useState([]);

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
          weather: [{ main = {}, description = "", icon = "" }] = [{}],
          temp: { day: temperature = 0, max = 0, min = 0 } = {},
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
        isModalOpen,
        openModal,
        closeModal,
        singleDayWeather,
        restOfDaysWeathers,
        CITY,
      }}
    >
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <div id="modal"></div>
        <Footer />
      </Provider>
    </AppContext.Provider>
  );
}
