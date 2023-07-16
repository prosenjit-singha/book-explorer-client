import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../config";

const reduxApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: config.serverBaseURL }),
  tagTypes: ["reviews", "books"],
  endpoints: () => ({}),
});

export default reduxApi;
