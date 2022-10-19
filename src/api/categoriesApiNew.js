import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CATEGORY_PATH } from './apiConstants'

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: CATEGORY_PATH,
    }),
    tagTypes: ['Categories'],
    endpoints: builder => ({
        getCategories: builder.query({
            query: (query = '') => ({
                url: query,
            }),
            providesTags: ['Categories'],
        }),
    }),
})

export const { useGetCategoriesQuery } = categoriesApi
