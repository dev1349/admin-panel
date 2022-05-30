import { createSelector, createSlice } from '@reduxjs/toolkit'
import { characteristicGroupsMockData } from '../mock/characteristicGroupsMockData'
import {
    deleteCharacteristicGroupFetch,
    getAllCharacteristicGroupsFetch,
    getCharacteristicGroupFetch,
    postCharacteristicGroupFetch,
    putCharacteristicGroupFetch,
} from '../api/characteristicGroupsApi'
import {
    changeToObjectWithId,
    deleteNullValuesFromObject,
    leaveIdOnlyInObject,
} from '../common/preparingDataForSending/preparingDataForSending'
import { getBehaviorMode } from './behaviorServerInteraction'
import { getAllCharacteristics } from './characteristicsSlice'

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
            state.characteristicGroups[action.payload.index] = action.payload.characteristicGroup
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

export const getCharacteristicGroups = state => state.characteristicGroups.characteristicGroups
export const getCharacteristicGroupById = id => state => state.characteristicGroups.characteristicGroups.find(group => group.id === id)
export const getOrder = state => state.characteristicGroups.order
export const getOrderBy = state => state.characteristicGroups.orderBy
export const getGetAllCharacteristicGroupsFetchStatus = state => state.characteristicGroups.getAllFetchStatus
export const getGetPostPutDeleteCharacteristicGroupsFetchStatus = state => state.characteristicGroups.getPostPutDeleteFetchStatus

export const getIsServerError = createSelector(
    getGetAllCharacteristicGroupsFetchStatus,
    getGetPostPutDeleteCharacteristicGroupsFetchStatus,
    (getAllFetchStatus, getPostPutDeleteFetchStatus) => getAllFetchStatus === 'error' || getPostPutDeleteFetchStatus === 'error'
)

export const getAllCharacteristicGroups = () => dispatch => {
    dispatch(changeGetAllCharacteristicGroupsFetchStatus('pending'))
    getAllCharacteristicGroupsFetch()
        .then(characteristicGroups => {
            dispatch(setCharacteristicGroups(characteristicGroups.reverse()))
            dispatch(changeGetAllCharacteristicGroupsFetchStatus('success'))
        })
        .catch(() => {
            dispatch(changeGetAllCharacteristicGroupsFetchStatus('error'))
        })
}

export const saveNewCharacteristicGroup = characteristicGroup => async (dispatch, getState) => {
    const preparedCharacteristicGroupValues = leaveIdOnlyInObject(deleteNullValuesFromObject(characteristicGroup), ['characteristics'])
    if (!preparedCharacteristicGroupValues) return
    dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('pending'))
    try {
        await postCharacteristicGroupFetch(preparedCharacteristicGroupValues)
        dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('success'))
        dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('idle'))
        if (getBehaviorMode(getState()) === 'SAFE_MODE') {
            if (characteristicGroup.characteristics.length !== 0) {
                dispatch(getAllCharacteristics())
            }
        }
    } catch (e) {
        console.log(e)
        dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('error'))
        if (getBehaviorMode(getState()) === 'SAFE_MODE') {
            dispatch(getAllCharacteristics())
        }
    }
}

export const deleteCharacteristicGroup =
    (characteristicGroupIds, unselectCharacteristicGroup = null) =>
    (dispatch, getState) => {
        dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('pending'))
        Promise.all(
            characteristicGroupIds.map(characteristicGroupId => {
                return deleteCharacteristicGroupFetch(characteristicGroupId).then(() => {
                    if (!unselectCharacteristicGroup) return
                    unselectCharacteristicGroup(characteristicGroupId)
                })
            })
        )
            .then(() => {
                dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('success'))
                dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('idle'))
            })
            .catch(e => {
                console.log(e)
                dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('error'))
            })
            .finally(() => {
                if (getBehaviorMode(getState()) === 'SAFE_MODE') {
                    dispatch(getAllCharacteristicGroups())
                }
            })
    }

export const closeServerErrorModal = () => (dispatch, getState) => {
    if (getGetAllCharacteristicGroupsFetchStatus(getState()) === 'error') {
        dispatch(changeGetAllCharacteristicGroupsFetchStatus('idleAfterError'))
    }
    if (getGetPostPutDeleteCharacteristicGroupsFetchStatus(getState()) === 'error') {
        dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('idleAfterError'))
    }
}

export const getCharacteristicGroup = (characteristicGroupId, callbackSuccess) => dispatch => {
    dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('pending'))
    getCharacteristicGroupFetch(characteristicGroupId)
        .then(response => {
            callbackSuccess(changeToObjectWithId(response, [], ['command']))
            dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('success'))
            dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('idle'))
        })
        .catch(() => dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('error')))
}

export const saveChangedCharacteristicGroup = (changedCharacteristicGroup, callback) => async (dispatch, getState) => {
    dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('pending'))
    try {
        await putCharacteristicGroupFetch(changedCharacteristicGroup)
        dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('success'))
        dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('idle'))

        if (getBehaviorMode(getState()) === 'SAFE_MODE') {
            if (changedCharacteristicGroup.characteristics?.length) {
                dispatch(getAllCharacteristics())
            }
            dispatch(changeGetAllCharacteristicGroupsFetchStatus('idle'))
        }
        callback()
    } catch (e) {
        console.log(e)
        dispatch(changeGetPostPutDeleteCharacteristicGroupsFetchStatus('error'))
        dispatch(getAllCharacteristics())
        dispatch(changeGetAllCharacteristicGroupsFetchStatus('idle'))
        callback()
    }
}
