import React from "react";
import { convertDateNumberIntoDayString } from "../PureFunctions";
import DisplaySingleWeather from "./DisplaySingleWeather";

function MainInfo({ weatherList }) {
  let currentDate = new Date().getDay();

  return (
    <main className="w-11/12 py-2.5 flex flex-col bg-modalBg">
      {weatherList.map((singleDay, index) => {
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
