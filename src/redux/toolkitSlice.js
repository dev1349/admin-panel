import {createSlice} from '@reduxjs/toolkit'

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        field1: 0,
        field2: ['step1', 'step2']
    },
    reducers: {
        testReducer1(state) {
        },
        testReducer2(state, action) {
            console.log(action.payload)
        }
    }
})
export default toolkitSlice.reducer
export const {testReducer1, testReducer2} = toolkitSlice.actions