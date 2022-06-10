import { createSlice } from '@reduxjs/toolkit'
import { characteristicSetsMockData } from '../mock/characteristicSetsMockData'
import {
    deleteCharacteristicSetFetch,
    getAllCharacteristicSetsFetch,
    getCharacteristicSetFetch,
    postCharacteristicSetFetch,
    putCharacteristicSetFetch,
} from '../api/characteristicSetsApi'
import { getBehaviorMode } from './behaviorServerInteraction'
import {
    changeToObjectWithId,
    deleteNullValuesFromObject,
    leaveIdOnlyInObject,
} from '../common/preparingDataForSending/preparingDataForSending'

const characteristicSetsSlice = createSlice({
    name: 'characteristicSets',
    initialState: characteristicSetsMockData,
    reducers: {
        setCharacteristicSets(state, action) {
            state.characteristicSets = action.payload
        },
        setOrder(state, action) {
            state.order = action.payload
        },
        setOrderBy(state, action) {
            state.orderBy = action.payload
        },
        changeCharacteristicSetsFetchStatus(state, action) {
            state.fetchStatus = action.payload
        },
    },
})

export default characteristicSetsSlice.reducer

export const { setCharacteristicSets, setOrder, setOrderBy, changeCharacteristicSetsFetchStatus } = characteristicSetsSlice.actions

export const getCharacteristicSets = state => state.characteristicSets.characteristicSets

export const getOrder = state => state.characteristicSets.order

export const getOrderBy = state => state.characteristicSets.orderBy

export const getCharacteristicSetsFetchStatus = state => state.characteristicSets.fetchStatus

export const getAllCharacteristicSets = () => dispatch => {
    dispatch(changeCharacteristicSetsFetchStatus('pending'))
    getAllCharacteristicSetsFetch()
        .then(characteristicSets => {
            dispatch(setCharacteristicSets(characteristicSets.reverse()))
            dispatch(changeCharacteristicSetsFetchStatus('success'))
            dispatch(changeCharacteristicSetsFetchStatus('idle'))
        })
        .catch(() => {
            dispatch(changeCharacteristicSetsFetchStatus('error'))
        })
}

export const getCharacteristicSet = (characteristicSetId, callbackSuccess) => dispatch => {
    dispatch(changeCharacteristicSetsFetchStatus('pending'))
    getCharacteristicSetFetch(characteristicSetId)
        .then(response => {
            callbackSuccess(changeToObjectWithId(response, [], ['command']))
            dispatch(changeCharacteristicSetsFetchStatus('success'))
            dispatch(changeCharacteristicSetsFetchStatus('idle'))
        })
        .catch(() => dispatch(changeCharacteristicSetsFetchStatus('error')))
}

export const deleteCharacteristicSets =
    (characteristicSetIds, unselectCharacteristicSet = null) =>
    (dispatch, getState) => {
        dispatch(changeCharacteristicSetsFetchStatus('pending'))
        Promise.all(
            characteristicSetIds.map(characteristicSetId => {
                return deleteCharacteristicSetFetch(characteristicSetId).then(() => {
                    if (!unselectCharacteristicSet) return
                    unselectCharacteristicSet(characteristicSetId)
                })
            })
        )
            .then(() => {
                dispatch(changeCharacteristicSetsFetchStatus('success'))
                dispatch(changeCharacteristicSetsFetchStatus('idle'))
                if (getBehaviorMode(getState()) === 'SAFE_MODE') {
                    dispatch(getAllCharacteristicSets())
                }
            })
            .catch(e => {
                console.log(e)
                dispatch(changeCharacteristicSetsFetchStatus('error'))
            })
    }

export const saveNewCharacteristicSet =
    (characteristicSetValues, successCallback = null) =>
    async dispatch => {
        const preparedCharacteristicSetValues = leaveIdOnlyInObject(deleteNullValuesFromObject(characteristicSetValues), [
            'characteristics',
            'characteristicsGroup',
        ])
        if (!preparedCharacteristicSetValues) return
        dispatch(changeCharacteristicSetsFetchStatus('pending'))
        try {
            await postCharacteristicSetFetch(preparedCharacteristicSetValues)
            dispatch(changeCharacteristicSetsFetchStatus('success'))
            dispatch(changeCharacteristicSetsFetchStatus('idle'))
            if (successCallback) {
                successCallback()
            }
        } catch (e) {
            console.log(e)
            dispatch(changeCharacteristicSetsFetchStatus('error'))
        }
    }

export const saveChangedCharacteristicSet = (changedCharacteristicGroup, callback) => async dispatch => {
    dispatch(changeCharacteristicSetsFetchStatus('pending'))
    try {
        await putCharacteristicSetFetch(changedCharacteristicGroup)
        dispatch(changeCharacteristicSetsFetchStatus('success'))
        dispatch(changeCharacteristicSetsFetchStatus('idle'))
        callback()
    } catch (e) {
        console.log(e)
        dispatch(changeCharacteristicSetsFetchStatus('error'))
    }
}
