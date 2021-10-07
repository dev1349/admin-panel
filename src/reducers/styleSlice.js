import {createSlice} from '@reduxjs/toolkit'
import {styleMock} from '../mock/styleMock'

export const styleSlice = createSlice({
    name: 'style',
    initialState: styleMock,
    reducers: {}
})

export const style = state => state.style
export default styleSlice.reducer