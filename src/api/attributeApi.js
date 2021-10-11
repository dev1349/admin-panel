import {deleteRequestOptions, getRequestOptions, postRequestOptions, putRequestOptions} from './requestOptions'
import {DELETE_ATTRIBUTE_PATH, GET_ALL_ATTRIBUTE_PATH, GET_ATTRIBUTE_PATH, POST_ATTRIBUTE_PATH, PUT_ATTRIBUTE_PATH} from './apiConstants'

export const postAttributeFetch = attribute => {
    return fetch(POST_ATTRIBUTE_PATH, postRequestOptions(attribute.name)) // Потом передавать `attribute`
        .then(response => response.json())
}

export const getAttributeFetch = id => {
    return fetch(GET_ATTRIBUTE_PATH + '?id=' + id, getRequestOptions())
        .then(response => response.json())
}

export const getAllAttributeFetch = () => {
    return fetch(GET_ALL_ATTRIBUTE_PATH, getRequestOptions())
        .then(response => response.json())
}

export const putAttributeFetch = attribute => {
    return fetch(PUT_ATTRIBUTE_PATH, putRequestOptions(attribute))
        //.then(response => response.json())
}

export const deleteAttributeFetch = attribute => {
    return fetch(DELETE_ATTRIBUTE_PATH, deleteRequestOptions(attribute))
}



