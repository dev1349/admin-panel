import {
    deleteRequestOptions,
    getRequestOptions,
    postRequestOptions,
    putRequestOptions,
} from './requestOptions'
import {
    DELETE_USER_PATH,
    GET_ALL_USER_PATH,
    GET_USER_PATH,
    POST_USER_PATH,
    PUT_USER_PATH,
} from './apiConstants'

export const postUserFetch = user => {
    return fetch(POST_USER_PATH, postRequestOptions(user)).then(response =>
        response.json()
    )
}

export const getUserFetch = id => {
    return fetch(GET_USER_PATH + '?id=' + id, getRequestOptions()).then(
        response => response.json()
    )
}

export const getAllUserFetch = () => {
    return fetch(GET_ALL_USER_PATH, getRequestOptions()).then(response =>
        response.json()
    )
}

export const putUserFetch = user => {
    return fetch(PUT_USER_PATH, putRequestOptions(user)).then(response =>
        response.json()
    )
}

export const deleteUserFetch = user => {
    return fetch(DELETE_USER_PATH, deleteRequestOptions(user)).then(response =>
        response.json()
    )
}
