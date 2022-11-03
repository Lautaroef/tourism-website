import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const PLACES_API_KEY =
  "5ae2e3f221c38a28845f05b6b8f2401970a6fb70ad345257a406ee6e";

const initialState = {
  placeCoords: { lon: 0, lat: 0 },
};

export const fetchPlaces = createAsyncThunk(
  "placeCoords/fetchPlaces",
  async (dispatch, getState) => {
    return await fetch(
      `https://api.opentripmap.com/0.1/en/places/geoname?apikey=${PLACES_API_KEY}&name=Seattle`
    ).then((res) => res.json());
  }
);

const placeInfo = createSlice({
  name: "placeCoords",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaces.fulfilled, (state, action) => {
        state.placeCoords = action.payload;
      })
      .addCase(fetchPlaces.rejected, (state, action) => {
        state.placeCoords = action.payload;
      });
  },
});

export default placeInfo.reducer;

/* 
  createSlice automatically generate action creators that correspond
    to each case reducer function we provide.
  createSlice generated the action string for us, by combining the
    slice's name field with the name of the individual reduce whe created. For example:

?   console.log(setSingleData(data))
*   por detras esta pasando esto =>  {type: 'handleData/setSingleData', payload: data} 

  Inside of the generated reducer function, createSlice will check to see 
    if a dispatched action's action.type matches one of the names it generated. 
    If so, it will run that case reducer function. This is exactly the same pattern 
    that we wrote ourselves using a switch/case statement, 
    but createSlice does it for us automatically.
*/

// createSlice allows us to safely "mutate" our state.
// Reducers can only make copies of the original values, and then they can mutate the copies.

//! You can only write "mutating" logic in Redux Toolkit's createSlice and createReducer
//! because they use Immer inside! If you write mutating logic in reducers without Immer,
//! it will mutate the state and cause bugs!

// createAsyncThunk()
/*
You can only pass one argument to the thunk when you dispatch it.
  If you need to pass multiple values, pass them in a single object.
The payload creator will receive an object as its second argument, 
  which contains {getState, dispatch}, and some other useful values.
* The thunk dispatches the pending action before running your payload creator,
  then dispatches either fulfilled or rejected based on 
  whether the Promise you return succeeds or fails
*/

// MAKE FETCH DATA FROM REDUX. createApi({})
/* 
  In the case i would need to make different calls with different endpoints 
  i would need to make a SINGLE apiSlice and here for each URL endpoint i would
  create a createSlice() with it's own endpoints.
*/
/*
  Next we would like to know how we would fetch our data. There are multiples 
  libraries to do fetch calls, like the classic fetch provided by the browser,
  axios, etc. But RTK provides it's own fetch wrapper called //*fetchBaseQuery()

*/
