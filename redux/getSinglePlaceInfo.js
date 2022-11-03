import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PLACES_API_KEY =
  "5ae2e3f221c38a28845f05b6b8f2401970a6fb70ad345257a406ee6e";

export const singlePlaceInfos = createApi({
  reducerPath: "singlePlaces",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.opentripmap.com/0.1/en/places/",
    // prepareHeaders(headers) {
    //   headers.set("?apikey=", PLACES_API_KEY);
    //   return headers;
    // },
  }),
  endpoints: (builder) => {
    return {
      fetchSinglePlace: builder.query({
        query(xid = "") {
          return `xid/${xid}?apikey=${PLACES_API_KEY}`;
        },
      }),
    };
  },
});

export const { useFetchSinglePlaceQuery } = singlePlaceInfos;
