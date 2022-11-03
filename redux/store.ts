import { configureStore, TypedStartListening } from "@reduxjs/toolkit";
import placeCoords from "./getPlaceCoords";
import placesDetails from "./getAllPlacesDetails";
import { singlePlaceInfos } from "./getSinglePlaceInfo";

const store = configureStore({
  reducer: {
    placeData: placeCoords,
    allPlaces: placesDetails,
    [singlePlaceInfos.reducerPath]: singlePlaceInfos.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(singlePlaceInfos.middleware);
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStartListening = TypedStartListening<AppState, AppDispatch>;

export default store;
