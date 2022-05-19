import { createSlice } from '@reduxjs/toolkit'
import { characteristicGroupsMockData } from '../mock/characteristicGroupsMockData'
import { getAllCharacteristicGroupsFetch } from '../api/characteristicGroupsApi'

const characteristicGroupsSlice = createSlice({
    name: 'characteristicGroups',
    initialState: characteristicGroupsMockData,
    reducers: {
        setCharacteristicGroups(state, action) {
            state.characteristicGroups = action.payload
        },
        addCharacteristicGroups(state, action) {
            state.characteristicGroups.unshift(action.payload)
        },
        changeCharacteristicGroup(state, action) {
            state.characteristicGroups[action.payload.index] =
                action.payload.characteristicGroup
        },
        setOrder(state, action) {
            state.order = action.payload
        },
        setOrderBy(state, action) {
            state.orderBy = action.payload
        },
        changeGetAllCharacteristicGroupsFetchStatus(state, action) {
            state.getAllFetchStatus = action.payload
        },
        changeGetPostPutDeleteCharacteristicGroupsFetchStatus(state, action) {
            state.getPostPutDeleteFetchStatus = action.payload
        },
    },
})

export default characteristicGroupsSlice.reducer

export const {
    setCharacteristicGroups,
    addCharacteristicGroups,
    changeCharacteristicGroup,
    setOrder,
    setOrderBy,
    changeGetAllCharacteristicGroupsFetchStatus,
    changeGetPostPutDeleteCharacteristicGroupsFetchStatus,
} = characteristicGroupsSlice.actions

export const getCharacteristicGroups = state =>
    state.characteristicGroups.characteristicGroups
export const getCharacteristicGroupById = id => state =>
    state.characteristicGroups.characteristicGroups.find(
        group => group.id === id
    )
export const getOrder = state => state.characteristicGroups.order
export const getOrderBy = state => state.characteristicGroups.orderBy
export const getGetAllCharacteristicGroupsFetchStatus = state =>
    state.characteristicGroups.getAllFetchStatus
export const getGetPostPutDeleteCharacteristicGroupsFetchStatus = state =>
    state.characteristics.getPostPutDeleteFetchStatus

export const getAllCharacteristicGroups = () => dispatch => {
    dispatch(changeGetAllCharacteristicGroupsFetchStatus('pending'))
    getAllCharacteristicGroupsFetch()
        .then(characteristicGroups => {
            dispatch(setCharacteristicGroups(characteristicGroups))
            dispatch(changeGetAllCharacteristicGroupsFetchStatus('success'))
        })
        .catch(() => {
            dispatch(changeGetAllCharacteristicGroupsFetchStatus('error'))
        })
}
