import { kelvinToCelsius } from "../../../../utils/functions/PureFunctions";

type Props = {
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  temp: {
    max: number;
    min: number;
  };
  speed: number;
  humidity: number;
  weekDay: number;
};

function SingleWeather({
  weather: [{ main, description, icon }],
  temp: { max, min },
  speed: windSpeed,
  humidity,
  weekDay,
}: Props) {
  max = kelvinToCelsius(max);
  min = kelvinToCelsius(min);

  return (
    <div className="flex items-center justify-around border-b p-2 my-1 text-white">
      <h2 className="text-xl font-medium w-28">{weekDay}</h2>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={main} className="w-16" />
      <div className="flex flex-col gap-y-0.5 text-base text-center">
        <h3 className="capitalize">{description}.</h3>
        <h3>
          Max: {max}°C | Min: {min}°C
        </h3>
        <h3>
          Wind: {windSpeed} KM/H | Hum.: {humidity}%
        </h3>
      </div>
    </div>
  );
}

export default SingleWeather;
