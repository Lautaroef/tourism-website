import React from "react";
import ReactDom from "react-dom";
import { useGlobalContext } from "../../../Context";
import { GrFormClose } from "react-icons/gr";
import WeatherListInfo from "./WeatherListInfo";

function WeatherModal() {
  const { restOfDaysWeathers, closeModal, CITY } = useGlobalContext();

  return ReactDom.createPortal(
    <>
      {/* Modal's back-ground */}
      <div className="absolute z-20 top-0 left-0 bottom-0 right-0 bg-modalBgWindow opacity-80"></div>

      {/* Modal's body*/}
      <div className="customModal z-50 fixed md:w-8/12  max-w-xl mx-auto left-0 right-0 top-12 flex flex-col items-center justify-between shadow-2xl bg-modalBg">
        <header className="w-full h-auto py-4 flex justify-between items-center bg-white text-titleColor font-semibold">
          <h2 className="text-lg tracking-tight pl-10">
            The weather in {CITY}
          </h2>
          <GrFormClose
            className="text-blue-500 text-lg mr-3.5 text-left opacity-30 cursor-pointer"
            onClick={closeModal}
          />
        </header>
        <WeatherListInfo weatherList={restOfDaysWeathers} />
        <footer className="w-full h-auto bg-white text-right py-4">
          <button
            className="customModalButton border border-transparent bg-firstNav text-base py-1.5 px-5 mr-3.5  text-white tracking-widest rounded font-light"
            onClick={closeModal}
          >
            Accept
          </button>
        </footer>
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default WeatherModal;
