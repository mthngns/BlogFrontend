import { BASE_URI } from "@/app/lib/end-points";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
  tagTypes: ["Blogs","User"],
  endpoints: () => ({}),
});
