import { createSlice } from '@reduxjs/toolkit'
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
