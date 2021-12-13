import {
    deleteRequestOptions,
    getRequestOptions,
    postRequestOptions,
    putRequestOptions,
} from './requestOptions'
import {
    DELETE_ORDER_PATH,
    GET_ALL_ORDER_PATH,
    GET_ORDER_PATH,
    POST_ORDER_PATH,
    PUT_ORDER_PATH,
} from './apiConstants'

export const postOrderFetch = goodType => {
    return fetch(POST_ORDER_PATH, postRequestOptions(goodType)).then(response =>
        response.json()
    )
}

export const getOrderFetch = id => {
    return fetch(GET_ORDER_PATH + '?id=' + id, getRequestOptions()).then(
        response => response.json()
    )
}

export const getAllOrderFetch = () => {
    return fetch(GET_ALL_ORDER_PATH, getRequestOptions()).then(response =>
        response.json()
    )
}

export const putOrderFetch = goodType => {
    return fetch(PUT_ORDER_PATH, putRequestOptions(goodType)).then(response =>
        response.json()
    )
}

export const deleteOrderFetch = goodType => {
    return fetch(DELETE_ORDER_PATH, deleteRequestOptions(goodType)).then(
        response => response.json()
    )
}
