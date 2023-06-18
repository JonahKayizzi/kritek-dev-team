import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://kritek-dev-data.onrender.com' }),
  tagTypes: ['Developers'],
  endpoints: (builder) => ({
    getDevs: builder.query({
      query: () => '/developers',
      transformResponse: (response) => response.sort((a, b) => b.id - a.id),
      providesTags: ['Developers'],
    }),
    addDev: builder.mutation({
      query: (newDev) => ({
        url: '/developers',
        method: 'POST',
        body: newDev,
      }),
      invalidatesTags: ['Developers'],
    }),
    updateDev: builder.mutation({
      query: (dev) => ({
        url: `/developers/${dev.id}`,
        method: 'PATCH',
        body: dev,
      }),
      invalidatesTags: ['Developers'],
    }),
    deleteDev: builder.mutation({
      query: ({ id }) => ({
        url: `/developers/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Developers'],
    }),
  }),
});

export const {
  useGetDevsQuery,
  useAddDevMutation,
  useUpdateDevMutation,
  useDeleteDevMutation,
} = apiSlice;
