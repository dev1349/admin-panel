import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SERVER_PATH } from './apiConstants'

export const facetsApi = createApi({
    reducerPath: 'facetsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: SERVER_PATH,
    }),
    tagTypes: ['Facets'],
    endpoints: builder => ({
        getCategoryFacets: builder.query({
            query: categoryId => ({
                url: `/category-facets?categoryId=${categoryId}`,
            }),
        }),
    }),
})

export const { useGetCategoryFacetsQuery } = facetsApi
