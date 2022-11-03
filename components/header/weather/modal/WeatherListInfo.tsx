import { convertDateNumberIntoDayString } from "../../../../utils/functions/PureFunctions";
import DisplaySingleWeather from "./DisplaySingleWeather";

function MainInfo({ weatherList }: any) {
  let currentDate = new Date().getDay();

  return (
    <main className="w-11/12 py-2.5 flex flex-col bg-modalBg">
      {weatherList.map((singleDay: any, index: number) => {
        return (
          <DisplaySingleWeather
            key={index}
            weekDay={convertDateNumberIntoDayString(index + currentDate)}
            {...singleDay}
          />
        );
      })}
    </main>
  );
}

export default MainInfo;
