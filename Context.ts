import { createContext, useContext } from "react";

export const AppContext = createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  singleDayWeather: {},
  restOfDaysWeathers: [],
  CITY: "",
});

export const useGlobalContext = () => {
  return useContext(AppContext);
};
