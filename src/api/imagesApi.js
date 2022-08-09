import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IMAGES_PATH } from './apiConstants'

export const imagesApi = createApi({
    reducerPath: 'imagesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: IMAGES_PATH,
    }),
    tagTypes: ['Images'],
    endpoints: builder => ({
        getImages: builder.query({
            query: (query = '') => ({
                url: query,
            }),
            transformResponse: response => ({
                partialImages: response.content,
                totalPages: response.totalPages,
                pageSize: response.size,
                pageNumber: response.number,
                totalImages: response.totalElements,
                returnedImages: response.numberOfElements,
            }),
            providesTags: result => {
                return result?.partialImages
                    ? [
                          ...result.partialImages.map(({ id }) => ({
                              type: 'Images',
                              id,
                          })),
                          { type: 'Images' },
                          { type: 'Images', id: 'PARTIAL-LIST' },
                          { type: 'Images', id: 'LIST' },
                      ]
                    : [{ type: 'Images' }, { type: 'Images', id: 'PARTIAL-LIST' }, { type: 'Images', id: 'LIST' }]
            },
        }),
        addImage: builder.mutation({
            query: body => ({
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Images', id: 'LIST' }],
        }),
        deleteImage: builder.mutation({
            query: id => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'Images', id },
                { type: 'Images', id: 'PARTIAL-LIST' },
            ],
        }),
    }),
})

export const { useGetImagesQuery, useAddImageMutation, useDeleteImageMutation } = imagesApi
