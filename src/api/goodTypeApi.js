import {
    deleteRequestOptions,
    getRequestOptions,
    postRequestOptions,
    putRequestOptions,
} from './requestOptions'
import {
    DELETE_GOOD_TYPE_PATH,
    GET_ALL_GOOD_TYPE_PATH,
    GET_GOOD_TYPE_PATH,
    POST_GOOD_TYPE_PATH,
    PUT_GOOD_TYPE_PATH,
} from './apiConstants'

export const postGoodTypeFetch = goodType => {
    return fetch(POST_GOOD_TYPE_PATH, postRequestOptions(goodType)).then(
        response => response.json()
    )
}

export const getGoodTypeFetch = id => {
    return fetch(GET_GOOD_TYPE_PATH + '?id=' + id, getRequestOptions()).then(
        response => response.json()
    )
}

export const getAllGoodTypeFetch = () => {
    return fetch(GET_ALL_GOOD_TYPE_PATH, getRequestOptions()).then(response =>
        response.json()
    )
}

export const putGoodTypeFetch = goodType => {
    return fetch(PUT_GOOD_TYPE_PATH, putRequestOptions(goodType)).then(
        response => response.json()
    )
}

export const deleteGoodTypeFetch = goodType => {
    return fetch(DELETE_GOOD_TYPE_PATH, deleteRequestOptions(goodType)).then(
        response => response.json()
    )
}
