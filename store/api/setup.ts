import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.realworld.io/api" }),
  endpoints: () => ({}),
});
