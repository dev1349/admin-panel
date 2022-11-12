/*import { createSlice } from '@reduxjs/toolkit'
import mockData from '../mock/novelitiesProducts'

const novelitiesSlice = createSlice({
    name: 'novelities',
    initialState: mockData,
    reducers: {
        deleteProduct(state, action) {
            return state.filter(item => !action.payload.includes(item.id))
        },
    },
})

export default novelitiesSlice.reducer

export const { deleteProduct } = novelitiesSlice.actions

*/

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SERVER_PATH } from '../api/apiConstants'

export const noveltiesApi = createApi({
    reducerPath: 'novelties',
    baseQuery: fetchBaseQuery({ baseUrl: SERVER_PATH + '/novelties' }),
    endpoints: builder => ({
        getNovelties: builder.query({
            query: (name = '') => name,
        }),
    }),
})
export const { useGetNoveltiesQuery } = noveltiesApi
