import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = "2407-FTB-ET-WEB-PT"; // Replace with the correct cohort code
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/players/`;

const api = createApi({
  reducerPath: "puppyApi", // Name of the API slice
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }), // Setting up the base URL
  tagTypes: ["Puppy"], // Tag type for cache invalidation
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => "players", // Endpoint for fetching the list of puppies
      providesTags: ["Puppy"], // Provides tag for caching
    }),
    getPuppy: builder.query({
      query: (id) => `${id}`, // Endpoint for fetching a specific puppy
      providesTags: ["Puppy"], // Provides tag for caching
    }),
    addPuppy: builder.mutation({
      query: (newPuppy) => ({
        url: "players", // Endpoint for adding a new puppy
        method: "POST",
        body: newPuppy,
      }),
      invalidatesTags: ["Puppy"], // Invalidate cache to refetch the puppy list
    }),
    deletePuppy: builder.mutation({
      query: (id) => ({
        url: `${id}`, // Endpoint for deleting a puppy
        method: "DELETE",
      }),
      invalidatesTags: ["Puppy"], // Invalidate cache to refetch the puppy list
    }),
  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} = api;

export default api;
