import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaces } from "../../components/redux/getPlaceCoords";
import { fetchAllPlaces } from "../../components/redux/getAllPlacesDetails";
import UseLocalStorage from "../../components/UseLocalStorage";
import LoadPlacesList from "./LoadPlacesList";

// Featured trips
function SecondSection() {
  const placeCoords = useSelector((state) => state.placeData.placeCoords);
  const allPlacesInfo = useSelector((state) => state.allPlaces.allPlacesInfo);
  const dispatch = useDispatch();

  const setLocalStorage = UseLocalStorage("places", allPlacesInfo);

  useEffect(() => {
    dispatch(fetchPlaces(placeCoords));

    if (setLocalStorage.length > 0) {
      UseLocalStorage("places", allPlacesInfo);
    } else {
      dispatch(fetchAllPlaces(allPlacesInfo));
    }
  }, []);

  return (
    <section className="lg:max-w-7xl mx-auto">
      <h1 className="pseudoClassesH1 lg:text-2xl text-xl my-4">
        Featured Trips
      </h1>
      <h2 className="text-lg text-center text-textGray font-Poppins mb-3">
        We present the best experiences to enjoy and get to know Bariloche
      </h2>
      <p id="info"></p>
      <div
        id="list"
        className="grid lg:grid-cols-3 smMd:grid-cols-2 grid-cols-1 justify-around"
      >
        {allPlacesInfo.map((place) => {
          return <LoadPlacesList key={place.xid} {...place} />;
        })}
      </div>
      <button id="next_button">See more places...</button>
    </section>
  );
}
export default SecondSection;
