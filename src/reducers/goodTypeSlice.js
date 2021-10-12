import { createSlice } from '@reduxjs/toolkit'
import initialState from '../mock/goodTypeInitialState'
import {
    deleteGoodTypeFetch,
    getAllGoodTypeFetch,
    getGoodTypeFetch,
    postGoodTypeFetch,
    putGoodTypeFetch,
} from '../api/goodTypeApi'

const goodTypeSlice = createSlice({
    name: 'goodType',
    initialState,
    reducers: {
        postGoodTypeSuccess(state, action) {
            state.allGoodType.push(action.payload)
        },
        getGoodTypeSuccess(state, action) {
            state.currentGoodType = action.payload
        },
        getAllGoodTypeSuccess(state, action) {
            state.allGoodType = action.payload
        },
        putGoodTypeSuccess(state) {
            return {
                ...state,
            }
        },
        deleteGoodTypeSuccess(state, action) {
            state.allGoodType.filter(item => item.id !== action.payload.id)
        },
    },
})

export const {
    postGoodTypeSuccess,
    getGoodTypeSuccess,
    getAllGoodTypeSuccess,
    putGoodTypeSuccess,
    deleteGoodTypeSuccess,
} = goodTypeSlice.actions

export default goodTypeSlice.reducer

export const allGoodType = state => state.goodType.allGoodType

export const postGoodType = goodType => dispatch => {
    postGoodTypeFetch(goodType)
        .then(response => response.json())
        .then(data => dispatch(postGoodTypeSuccess(data)))
}

export const getGoodType = id => dispatch => {
    getGoodTypeFetch(id).then(data => dispatch(getGoodTypeSuccess(data)))
}

export const getAllGoodType = () => dispatch => {
    getAllGoodTypeFetch().then(data =>
        dispatch(getAllGoodTypeSuccess(Object.values(data)))
    )
}

export const putGoodType = goodType => dispatch => {
    putGoodTypeFetch(goodType)
        .then(response => response.json())
        .then(data => dispatch(putGoodTypeSuccess(data)))
}

export const deleteGoodType = goodType => dispatch => {
    deleteGoodTypeFetch(goodType).then(data => {
        dispatch(deleteGoodTypeSuccess(data))
    })
}
