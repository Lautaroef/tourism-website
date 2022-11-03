import { useGlobalContext } from "../../../Context";
import WeatherModal from "./modal/WeatherModal";
import { kelvinToCelsius } from "../../../utils/functions/PureFunctions";

function Weather() {
  const { singleDayWeather, isModalOpen, openModal } = useGlobalContext();

  const { icon, main, description, temperature, feelsLike } = singleDayWeather;

  const temperatureInC = kelvinToCelsius(temperature);
  const feelsLikeInC = kelvinToCelsius(feelsLike);

  return (
    <>
      {/* Show today's weather in the navbar */}
      <div
        className="grid grid-cols-2 w-max mr-3.5 items-center justify-center cursor-pointer"
        onClick={openModal}
      >
        <img
          src={`http://openweathermap.org/img/w/${icon || ""}.png`}
          alt={main || ""}
          className="justify-self-end flex flex-shrink lg:mr-4 md:mr-2 "
        />
        <div className="flex flex-col items-center gap-y-1 lg:text-sm sm:text-xs text-10px">
          <h5 className="capitalize">{description}</h5>
          <h6 className="text-center">{`${temperatureInC}°C | ST: ${feelsLikeInC}°C `}</h6>
        </div>
      </div>
      {/* Weather Modal */}
      {isModalOpen && <WeatherModal />}
    </>
  );
}

export default Weather;
