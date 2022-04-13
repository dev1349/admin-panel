import {
    deleteRequestOptions,
    getRequestOptions,
    postRequestOptions,
    putRequestOptions,
} from './requestOptions'
import {
    DELETE_STYLE_PATH,
    GET_ALL_STYLE_PATH,
    GET_STYLE_PATH,
    POST_STYLE_PATH,
    PUT_STYLE_PATH,
} from './apiConstants'

export const postStyleFetch = style => {
    return fetch(POST_STYLE_PATH, postRequestOptions(style)).then(
        response => response.json()
    )
}

export const getStyleFetch = id => {
    return fetch(GET_STYLE_PATH + '?id=' + id, getRequestOptions()).then(
        response => response.json()
    )
}

export const getAllStyleFetch = () => {
    return fetch(GET_ALL_STYLE_PATH, getRequestOptions()).then(response =>
        response.json()
    )
}

export const putStyleFetch = style => {
    return fetch(PUT_STYLE_PATH, putRequestOptions(style)).then(
        response => response.json()
    )
}

export const deleteStyleFetch = style => {
    return fetch(DELETE_STYLE_PATH, deleteRequestOptions(style)).then(
        response => response.json()
    )
}
