import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { MEGAMENU_PATH } from './apiConstants'
import { createMegaMenuItemsArray } from '../common/megaMenu/getAllMegaMenuItems'

export const megaMenuApi = createApi({
    reducerPath: 'megaMenuApi',
    baseQuery: fetchBaseQuery({
        baseUrl: MEGAMENU_PATH,
    }),
    tagTypes: ['megaMenu'],
    endpoints: builder => ({
        getMegaMenuItems: builder.query({
            query: (query = '') => ({
                url: query,
            }),
            providesTags: result => {
                return result?.length > 0
                    ? [
                          ...createMegaMenuItemsArray(result).map(({ id }) => {
                              return {
                                  type: 'megaMenu',
                                  id,
                              }
                          }),
                          { type: 'megaMenu' },
                          { type: 'megaMenu', id: 'LIST' },
                      ]
                    : [{ type: 'megaMenu' }, { type: 'megaMenu', id: 'LIST' }]
            },
        }),
        getMegaMenuItem: builder.query({
            query: id => ({
                url: `/${id}`,
            }),
            providesTags: (result, error, id) => [
                {
                    type: 'megaMenu',
                    id,
                },
            ],
        }),
        addMegaMenuItem: builder.mutation({
            query: body => ({
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'megaMenu', id: 'LIST' }],
        }),
        updateMegaMenuItem: builder.mutation({
            query: body => ({
                url: `/${body.id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: (result, error, { id }) => [
                {
                    type: 'megaMenu',
                    id,
                },
            ],
        }),
        deleteMegaMenuItem: builder.mutation({
            query: id => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => {
                return [
                    { type: 'megaMenu', id },
                    { type: 'megaMenu', id: 'LIST' },
                ]
            },
        }),
    }),
})

export const {
    useGetMegaMenuItemsQuery,
    useGetMegaMenuItemQuery,
    useAddMegaMenuItemMutation,
    useUpdateMegaMenuItemMutation,
    useDeleteMegaMenuItemMutation,
} = megaMenuApi
