import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GOODS_PATH } from './apiConstants'

export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: GOODS_PATH,
    }),
    tagTypes: ['Goods'],
    endpoints: builder => ({
        getGoods: builder.query({
            query: (query = '') => ({
                url: query,
            }),
            transformResponse: response => ({
                partialGoods: response.content,
                totalPages: response.totalPages,
                pageSize: response.size,
                pageNumber: response.number,
                totalGoods: response.totalElements,
                returnedGoods: response.numberOfElements,
            }),
            providesTags: result => {
                return result?.partialGoods
                    ? [
                          ...result.partialGoods.map(({ id }) => ({
                              type: 'Goods',
                              id,
                          })),
                          { type: 'Goods' },
                          { type: 'Goods', id: 'PARTIAL-LIST' },
                          { type: 'Goods', id: 'LIST' },
                      ]
                    : [{ type: 'Goods' }, { type: 'Goods', id: 'PARTIAL-LIST' }, { type: 'Goods', id: 'LIST' }]
            },
        }),
        getGood: builder.query({
            query: id => ({
                url: `/${id}`,
            }),
            providesTags: (result, error, id) => [
                {
                    type: 'Goods',
                    id,
                },
            ],
        }),
        addGood: builder.mutation({
            query: body => ({
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Goods', id: 'LIST' }],
        }),
        updateGood: builder.mutation({
            query: body => ({
                url: `/${body.id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: (result, error, { id }) => [
                {
                    type: 'Goods',
                    id,
                },
            ],
        }),
        deleteGood: builder.mutation({
            query: id => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'Goods', id },
                { type: 'Goods', id: 'PARTIAL-LIST' },
            ],
        }),
    }),
})

export const { useGetGoodsQuery, useGetGoodQuery, useAddGoodMutation, useUpdateGoodMutation, useDeleteGoodMutation } = goodsApi
