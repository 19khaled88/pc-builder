// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pcBuilderApi = createApi({
  reducerPath: 'pcBuilderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getPcBuilder: builder.query({
      query: () => `/getPcBuilder`,
    }),
    postPcBuilder:builder.mutation({
        query:({data})=>({
            url:'postPcBuilder',
            method:'POST',
            body:data
        })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPcBuilderQuery,usePostPcBuilderMutation } = pcBuilderApi