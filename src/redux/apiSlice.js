import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
  endpoints: (builder) => ({
    getDevs: builder.query({
      query: () => '/developers',
    }),
  }),
});

export const { useGetDevsQuery } = apiSlice;
