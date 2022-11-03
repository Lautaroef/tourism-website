import { createContext, useContext } from "react";

interface Props {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  singleDayWeather: any;
  restOfDaysWeathers: any;
  CITY: string;
}

export const AppContext = createContext<Props>({
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
