import { createSelector, createSlice } from '@reduxjs/toolkit'
import { characteristicsMockData } from '../mock/characteristicsMockData'
import {
    deleteCharacteristicFetch,
    getAllCharacteristicsFetch,
    getCharacteristicFetch,
    postCharacteristicFetch,
    putCharacteristicFetch,
} from '../api/characteristicsApi'
import { changeToObjectWithId, deleteNullValuesFromObject } from '../common/preparingDataForSending/preparingDataForSending'
import {
    changeCharacteristicGroup,
    getAllCharacteristicGroups,
    getCharacteristicGroupById,
    getGetAllCharacteristicGroupsFetchStatus,
} from './characteristicGroupsSlice'
import { getBehaviorMode } from './behaviorServerInteraction'

const characteristicsSlice = createSlice({
    name: 'characteristics',
    initialState: characteristicsMockData,
    reducers: {
        setCharacteristics(state, action) {
            state.characteristics = action.payload
        },
        addCharacteristics(state, action) {
            state.characteristics.unshift(action.payload)
        },
        changeCharacteristic(state, action) {
            state.characteristics[action.payload.index] = action.payload.characteristic
        },
        removeCharacteristic(state, action) {
            state.characteristics = state.characteristics.filter(characteristic => characteristic.id !== action.payload)
        },
        setOrder(state, action) {
            state.order = action.payload
        },
        setOrderBy(state, action) {
            state.orderBy = action.payload
        },
        setCharacteristicGroup(state, action) {
            state.page = action.payload
        },
        changeGetAllCharacteristicsFetchStatus(state, action) {
            state.getAllFetchStatus = action.payload
        },
        changeGetPostPutDeleteCharacteristicsFetchStatus(state, action) {
            state.getPostPutDeleteFetchStatus = action.payload
        },
    },
})

export default characteristicsSlice.reducer

export const {
    setCharacteristics,
    addCharacteristics,
    changeCharacteristic,
    removeCharacteristic,
    setOrder,
    setOrderBy,
    changeGetAllCharacteristicsFetchStatus,
    changeGetPostPutDeleteCharacteristicsFetchStatus,
} = characteristicsSlice.actions

export const getCharacteristics = state => state.characteristics.characteristics
export const getCharacteristicById = id => state => state.characteristics.characteristics.find(characteristic => characteristic.id === id)
export const getOrder = state => state.characteristics.order
export const getOrderBy = state => state.characteristics.orderBy
export const getGetAllCharacteristicsFetchStatus = state => state.characteristics.getAllFetchStatus
export const getGetPostPutDeleteCharacteristicsFetchStatus = state => state.characteristics.getPostPutDeleteFetchStatus

export const getIsPending = createSelector(
    getGetAllCharacteristicsFetchStatus,
    getGetPostPutDeleteCharacteristicsFetchStatus,
    (getAllFetchStatus, getPostPutDeleteFetchStatus) => getAllFetchStatus === 'pending' || getPostPutDeleteFetchStatus === 'pending'
)
export const getIsServerError = createSelector(
    getGetAllCharacteristicsFetchStatus,
    getGetPostPutDeleteCharacteristicsFetchStatus,
    (getAllFetchStatus, getPostPutDeleteFetchStatus) => getAllFetchStatus === 'error' || getPostPutDeleteFetchStatus === 'error'
)

export const getAllCharacteristics = () => dispatch => {
    dispatch(changeGetAllCharacteristicsFetchStatus('pending'))
    getAllCharacteristicsFetch()
        .then(characteristics => {
            dispatch(setCharacteristics(characteristics.reverse()))
            dispatch(changeGetAllCharacteristicsFetchStatus('success'))
        })
        .catch(() => {
            dispatch(changeGetAllCharacteristicsFetchStatus('error'))
        })
}
export const closeServerErrorModal = () => (dispatch, getState) => {
    if (getGetAllCharacteristicsFetchStatus(getState()) === 'error') {
        dispatch(changeGetAllCharacteristicsFetchStatus('idleAfterError'))
    }
    if (getGetPostPutDeleteCharacteristicsFetchStatus(getState()) === 'error') {
        dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('idleAfterError'))
    }
}
export const deleteCharacteristic =
    (characteristicIds, unselectCharacteristic = null) =>
    (dispatch, getState) => {
        dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('pending'))
        Promise.all(
            characteristicIds.map(characteristicId => {
                const idGroupWithDeletedCharacteristic = getCharacteristicById(characteristicId)(getState()).characteristicGroup

                return deleteCharacteristicFetch(characteristicId).then(response => {
                    if (!response.ok) return
                    if (!unselectCharacteristic) return
                    unselectCharacteristic(characteristicId)

                    if (getBehaviorMode(getState()) === 'FAST_MODE') {
                        dispatch(removeCharacteristic(characteristicId))
                        if (
                            getGetAllCharacteristicGroupsFetchStatus(getState()) === 'success' &&
                            idGroupWithDeletedCharacteristic !== null &&
                            idGroupWithDeletedCharacteristic >= 0
                        ) {
                            const characteristicGroup = getState().characteristicGroups.characteristicGroups.find(
                                group => group.id === idGroupWithDeletedCharacteristic
                            )
                            const updatedCharacteristicGroup = {
                                ...characteristicGroup,
                                characteristics: characteristicGroup.characteristics.filter(
                                    characteristic => characteristic.id !== characteristicId
                                ),
                            }
                            const groupIndex = getState().characteristicGroups.characteristicGroups.findIndex(
                                group => group.id === idGroupWithDeletedCharacteristic
                            )
                            dispatch(
                                changeCharacteristicGroup({
                                    index: groupIndex,
                                    characteristicGroup: updatedCharacteristicGroup,
                                })
                            )
                        }
                    }
                })
            })
        )
            .then(() => {
                dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('success'))
                dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('idle'))
            })
            .catch(e => {
                console.log(e)
                dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('error'))
                if (getBehaviorMode(getState()) === 'FAST_MODE') {
                    dispatch(getAllCharacteristics())
                    if (getGetAllCharacteristicGroupsFetchStatus(getState()) === 'success') {
                        dispatch(getAllCharacteristicGroups())
                    }
                }
            })
            .finally(() => {
                if (getBehaviorMode(getState()) === 'SAFE_MODE') {
                    dispatch(getAllCharacteristics())
                    if (getGetAllCharacteristicGroupsFetchStatus(getState()) === 'success') {
                        dispatch(getAllCharacteristicGroups())
                    }
                }
            })
    }

export const saveNewCharacteristic = characteristic => async (dispatch, getState) => {
    const preparedCharacteristicValues = deleteNullValuesFromObject(characteristic)
    if (!preparedCharacteristicValues) return
    dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('pending'))
    try {
        const responseCharacteristic = await postCharacteristicFetch(preparedCharacteristicValues)
        dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('success'))
        dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('idle'))

        if (getBehaviorMode(getState()) === 'SAFE_MODE') {
            dispatch(getAllCharacteristicGroups())
        }

        if (getBehaviorMode(getState()) === 'FAST_MODE') {
            if (getGetAllCharacteristicsFetchStatus(getState()) === 'success') {
                dispatch(addCharacteristics(responseCharacteristic))
            }

            if (getGetAllCharacteristicGroupsFetchStatus(getState()) === 'success' && responseCharacteristic.characteristicGroup) {
                const characteristicGroup = getState().characteristicGroups.characteristicGroups.find(
                    group => group.id === responseCharacteristic.characteristicGroup
                )
                const updatedCharacteristicGroup = {
                    ...characteristicGroup,
                    characteristics: [...characteristicGroup.characteristics, responseCharacteristic],
                }
                const groupIndex = getState().characteristicGroups.characteristicGroups.findIndex(
                    group => group.id === characteristicGroup.id
                )
                dispatch(
                    changeCharacteristicGroup({
                        index: groupIndex,
                        characteristicGroup: updatedCharacteristicGroup,
                    })
                )
            }
        }
    } catch (e) {
        console.log(e)
        dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('error'))
        dispatch(getAllCharacteristicGroups())
    }
}

export const saveChangedCharacteristic = (characteristic, initialCharacteristicGroupId, callback) => async (dispatch, getState) => {
    const characteristicId = characteristic.id
    dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('pending'))
    try {
        await putCharacteristicFetch(characteristic.id, characteristic)
        dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('success'))
        dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('idle'))

        if (getBehaviorMode(getState()) === 'FAST_MODE') {
            const changedCharacteristicGroupId = characteristic.characteristicGroup ? characteristic.characteristicGroup.id : null
            dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('pending'))
            const responseCharacteristic = await getCharacteristicFetch(characteristic.id)
            dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('success'))
            dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('idle'))
            if (getGetAllCharacteristicsFetchStatus(getState()) === 'success') {
                const characteristicIndex = getState().characteristics.characteristics.findIndex(elem => elem.id === characteristic.id)
                dispatch(
                    changeCharacteristic({
                        index: characteristicIndex,
                        characteristic: responseCharacteristic,
                    })
                )
            } else {
                dispatch(changeGetAllCharacteristicsFetchStatus('idle'))
            }

            if (
                initialCharacteristicGroupId &&
                changedCharacteristicGroupId &&
                initialCharacteristicGroupId !== changedCharacteristicGroupId
            ) {
                const initialGroupIndex = getState().characteristicGroups.characteristicGroups.findIndex(
                    group => group.id === initialCharacteristicGroupId
                )
                const initialGroup = getCharacteristicGroupById(initialCharacteristicGroupId)(getState())

                dispatch(
                    changeCharacteristicGroup({
                        index: initialGroupIndex,
                        characteristicGroup: {
                            ...initialGroup,
                            characteristics: initialGroup.characteristics.filter(characteristic => characteristic.id !== characteristicId),
                        },
                    })
                )

                const changedGroupIndex = getState().characteristicGroups.characteristicGroups.findIndex(
                    group => group.id === changedCharacteristicGroupId
                )
                const changedGroup = getCharacteristicGroupById(changedCharacteristicGroupId)(getState())

                dispatch(
                    changeCharacteristicGroup({
                        index: changedGroupIndex,
                        characteristicGroup: {
                            ...changedGroup,
                            characteristics: [...changedGroup.characteristics, responseCharacteristic],
                        },
                    })
                )
            }

            if (initialCharacteristicGroupId === null && changedCharacteristicGroupId) {
                const changedGroupIndex = getState().characteristicGroups.characteristicGroups.findIndex(
                    group => group.id === changedCharacteristicGroupId
                )
                const changedGroup = getCharacteristicGroupById(changedCharacteristicGroupId)(getState())

                dispatch(
                    changeCharacteristicGroup({
                        index: changedGroupIndex,
                        characteristicGroup: {
                            ...changedGroup,
                            characteristics: [...changedGroup.characteristics, responseCharacteristic],
                        },
                    })
                )
            }

            if (initialCharacteristicGroupId && changedCharacteristicGroupId === null) {
                const initialGroupIndex = getState().characteristicGroups.characteristicGroups.findIndex(
                    group => group.id === initialCharacteristicGroupId
                )
                const initialGroup = getCharacteristicGroupById(initialCharacteristicGroupId)(getState())

                dispatch(
                    changeCharacteristicGroup({
                        index: initialGroupIndex,
                        characteristicGroup: {
                            ...initialGroup,
                            characteristics: initialGroup.characteristics.filter(characteristic => characteristic.id !== characteristicId),
                        },
                    })
                )
            }
        }

        if (getBehaviorMode(getState()) === 'SAFE_MODE') {
            dispatch(getAllCharacteristicGroups())
            dispatch(changeGetAllCharacteristicsFetchStatus('idle'))
        }
        callback()
    } catch (e) {
        console.log(e)
        dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('error'))
        dispatch(getAllCharacteristicGroups())
        dispatch(changeGetAllCharacteristicsFetchStatus('idle'))
        callback()
    }
}

export const getCharacteristic = (characteristicId, callbackSuccess) => dispatch => {
    dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('pending'))
    getCharacteristicFetch(characteristicId)
        .then(response => {
            callbackSuccess(changeToObjectWithId(response, ['characteristicGroup'], ['command']))
            dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('success'))
            dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('idle'))
        })
        .catch(() => dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('error')))
}

export const saveCharacteristicNewValues = characteristic => async dispatch => {
    dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('pending'))
    try {
        await putCharacteristicFetch(characteristic.id, characteristic)
        dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('success'))
        dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('idle'))
    } catch (e) {
        console.log(e)
        dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('error'))
    }
}
