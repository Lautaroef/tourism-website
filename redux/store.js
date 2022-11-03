import { configureStore } from "@reduxjs/toolkit";
import placeCoords from "./getPlaceCoords";
import placesDetails from "./getAllPlacesDetails";
import { singlePlaceInfos } from "./getSinglePlaceInfo";

export default configureStore({
  reducer: {
    placeData: placeCoords,
    allPlaces: placesDetails,
    [singlePlaceInfos.reducerPath]: singlePlaceInfos.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(singlePlaceInfos.middleware);
  },
});
