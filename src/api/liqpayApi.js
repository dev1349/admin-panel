import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { LIQPAY_PATH } from './apiConstants'

export const liqPayApi = createApi({
    reducerPath: 'liqPayApi',
    baseQuery: fetchBaseQuery({
        baseUrl: LIQPAY_PATH,
    }),
    tagTypes: ['LiqPayKeys'],
    endpoints: builder => ({
        getLiqPayKeys: builder.query({
            query: (query = '') => ({
                url: query,
            }),
            providesTags: ['LiqPayKeys'],
        }),
        addNewLiqPayKeys: builder.mutation({
            query: body => ({
                method: 'POST',
                body,
            }),
            invalidatesTags: ['LiqPayKeys'],
        }),
        updateLiqPayKeys: builder.mutation({
            query: body => ({
                url: `/${body.id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['LiqPayKeys'],
        }),
        deleteLiqPayKeys: builder.mutation({
            query: id => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['LiqPayKeys'],
        }),
    }),
})

export const { useGetLiqPayKeysQuery, useAddNewLiqPayKeysMutation, useUpdateLiqPayKeysMutation, useDeleteLiqPayKeysMutation } = liqPayApi
