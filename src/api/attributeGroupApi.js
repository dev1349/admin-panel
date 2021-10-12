import {
    DELETE_ATTRIBUTE_GROUP_PATH,
    GET_ALL_ATTRIBUTE_GROUP_PATH,
    POST_ATTRIBUTE_GROUP_PATH,
    PUT_ATTRIBUTE_GROUP_PATH,
} from './apiConstants'
import {
    deleteRequestOptions,
    getRequestOptions,
    postRequestOptions,
    putRequestOptions,
} from './requestOptions'

export const getAllAttributeGroupFetch = () => {
    return fetch(GET_ALL_ATTRIBUTE_GROUP_PATH, getRequestOptions()).then(
        response => response.json()
    )
}

export const postAttributeGroupFetch = group => {
    return fetch(POST_ATTRIBUTE_GROUP_PATH, postRequestOptions(group))
}

export const putAttributeGroupFetch = group => {
    return fetch(PUT_ATTRIBUTE_GROUP_PATH, putRequestOptions(group))
}

export const deleteAttributeGroupFetch = group => {
    return fetch(DELETE_ATTRIBUTE_GROUP_PATH, deleteRequestOptions(group))
}
