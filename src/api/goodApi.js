import {deleteRequestOptions, getRequestOptions, postRequestOptions, putRequestOptions} from './requestOptions'
import {DELETE_GOOD_PATH, GET_ALL_GOOD_PATH, GET_GOOD_PATH, POST_GOOD_PATH, PUT_GOOD_PATH} from './apiConstants'

export const postGoodFetch = good => {
    return fetch(POST_GOOD_PATH, postRequestOptions(good))
        .then(response => response.json())
}

export const getGoodFetch = id => {
    return fetch(GET_GOOD_PATH + '?id=' + id, getRequestOptions())
        .then(response => response.json())
}

export const getAllGoodFetch = () => {
    return fetch(GET_ALL_GOOD_PATH, getRequestOptions())
        .then(response => response.json())
}

export const putGoodFetch = good => {
    return fetch(PUT_GOOD_PATH, putRequestOptions(good))
        .then(response => response.json())
}

export const deleteGoodFetch = good => {
    return fetch(DELETE_GOOD_PATH, deleteRequestOptions(good))
}



