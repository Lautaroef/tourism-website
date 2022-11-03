import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  allPlacesInfo: [],
};
const PLACES_API_KEY =
  "5ae2e3f221c38a28845f05b6b8f2401970a6fb70ad345257a406ee6e";
const pageLength = 6; // number of objects per page
let offset = 0; // offset from first object in the list

export const fetchAllPlaces = createAsyncThunk(
  "placesDetails/fetchAllPlaces",
  async (dispatch, getState) => {
    return await fetch(
      `https://api.opentripmap.com/0.1/en/places/radius?apikey=${PLACES_API_KEY}&radius=1000&limit=${pageLength}&offset=${offset}&lon=${-122.33207}&lat=${47.60621}&rate=2&format=json`
    ).then((res) => res.json());
  }
);

const placesDetails = createSlice({
  name: "placesDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPlaces.fulfilled, (state, action) => {
        state.allPlacesInfo = action.payload;
      })
      .addCase(fetchAllPlaces.rejected, (state, action) => {
        state.allPlacesInfo = action.payload;
      });
  },
});

export default placesDetails.reducer;
