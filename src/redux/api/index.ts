import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const reduxApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["reviews"],
  endpoints: () => ({}),
});

export default reduxApi;
