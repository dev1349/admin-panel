import { createSlice } from '@reduxjs/toolkit'
import behaviorServerInteractionMockData from '../mock/behaviorServerInteractionMockData'

const behaviorServerInteractionSlice = createSlice({
    name: 'behaviorServerInteraction',
    initialState: behaviorServerInteractionMockData,
    reducers: {
        setBehaviorMode(state, action) {
            state.behaviorMode = action.payload
        },
    },
})

export default behaviorServerInteractionSlice.reducer

export const { setBehaviorMode } = behaviorServerInteractionSlice.actions

export const getBehaviorMode = state => state.behaviorServerInteraction.behaviorMode
