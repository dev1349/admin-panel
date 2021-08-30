import {
    DELETE_GOOD_SUCCESS,
    GET_ALL_GOOD_SUCCESS,
    GET_GOOD_SUCCESS,
    POST_GOOD_SUCCESS,
    PUT_GOOD_SUCCESS
} from './actionTypes'
import {deleteGoodFetch, getAllGoodFetch, getGoodFetch, postGoodFetch, putGoodFetch} from '../api/goodApi'

export const postGood = good => {
    return dispatch => {
        postGoodFetch(good)
            .then(data => {
                dispatch({
                    type: POST_GOOD_SUCCESS,
                    payload: data
                })
            })
    }
}

export const getGood = id => {
    return dispatch => {
        getGoodFetch(id)
            .then(data => {
                dispatch({
                    type: GET_GOOD_SUCCESS,
                    payload: data
                })
            })
    }
}

export const getAllGood = () => {
    return dispatch => {
        getAllGoodFetch()
            .then(data => {
                dispatch({
                    type: GET_ALL_GOOD_SUCCESS,
                    payload: Object.values(data)
                })
            })
    }
}

export const putGood = good => {
    return dispatch => {
        putGoodFetch(good)
            .then(data => {
                dispatch({
                    type: PUT_GOOD_SUCCESS,
                    payload: data
                })
            })
    }
}

export const deleteGood = good => {
    return dispatch => {
        deleteGoodFetch(good)
            .then(data => {
                dispatch({
                    type: DELETE_GOOD_SUCCESS,
                    payload: good
                })
            })
    }
}