import {
    DELETE_GOOD_TYPE_SUCCESS,
    GET_ALL_GOOD_TYPE_SUCCESS,
    GET_GOOD_TYPE_SUCCESS,
    POST_GOOD_TYPE_SUCCESS,
    PUT_GOOD_TYPE_SUCCESS
} from './actionTypes'
import {deleteGoodTypeFetch, getAllGoodTypeFetch, getGoodTypeFetch, postGoodTypeFetch, putGoodTypeFetch} from '../api/goodTypeApi'

export const postGoodType = goodType => {
    return dispatch => {
        postGoodTypeFetch(goodType)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: POST_GOOD_TYPE_SUCCESS,
                    payload: data
                })
            })
    }
}

export const getGoodType = id => {
    return dispatch => {
        getGoodTypeFetch(id)
            .then(data => {
                dispatch({
                    type: GET_GOOD_TYPE_SUCCESS,
                    payload: data
                })
            })
    }
}

export const getAllGoodType = () => {
    return dispatch => {
        getAllGoodTypeFetch()
            .then(data => {
                console.log(data)
                dispatch({
                    type: GET_ALL_GOOD_TYPE_SUCCESS,
                    payload: Object.values(data)
                })
            })
    }
}

export const putGoodType = goodType => {
    return dispatch => {
        putGoodTypeFetch(goodType)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: PUT_GOOD_TYPE_SUCCESS,
                    payload: data
                })
            })
    }
}

export const deleteGoodType = goodType => {
    return dispatch => {
        deleteGoodTypeFetch(goodType)
            .then(data => {
                dispatch({
                    type: DELETE_GOOD_TYPE_SUCCESS,
                    payload: data
                })
            })
    }
}