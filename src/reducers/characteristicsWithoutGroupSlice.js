import { createSlice } from '@reduxjs/toolkit'
import { characteristicsWithoutGroupMockData } from '../mock/characteristicsWithoutGroupMockData'
import { getCharacteristicsWithoutGroupFetch } from '../api/characteristicsApi'

const characteristicsSlice = createSlice({
    name: 'characteristicsWithoutGroup',
    initialState: characteristicsWithoutGroupMockData,
    reducers: {
        setCharacteristicsWithoutGroup(state, action) {
            state.characteristicsWithoutGroup = action.payload
        },
        changeCharacteristicsWithoutGroupFetchStatus(state, action) {
            state.fetchStatus = action.payload
        },
    },
})

export default characteristicsSlice.reducer

export const { setCharacteristicsWithoutGroup, changeCharacteristicsWithoutGroupFetchStatus } = characteristicsSlice.actions

export const getCharacteristicsWithoutGroup = state => state.characteristicsWithoutGroup.characteristicsWithoutGroup

export const getCharacteristicsWithoutGroupFetchStatus = state => state.characteristicsWithoutGroup.fetchStatus

export const getCharacteristicsWithoutGroupFromServer = () => dispatch => {
    dispatch(changeCharacteristicsWithoutGroupFetchStatus('pending'))
    getCharacteristicsWithoutGroupFetch()
        .then(characteristics => {
            dispatch(setCharacteristicsWithoutGroup(characteristics.reverse()))
            dispatch(changeCharacteristicsWithoutGroupFetchStatus('success'))
            dispatch(changeCharacteristicsWithoutGroupFetchStatus('idle'))
        })
        .catch(() => {
            dispatch(changeCharacteristicsWithoutGroupFetchStatus('error'))
        })
}
