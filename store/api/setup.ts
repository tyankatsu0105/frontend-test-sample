import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.realworld.io/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Token ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  refetchOnMountOrArgChange: 900,
});
