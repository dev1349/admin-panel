import { deleteRequestOptions, getRequestOptions, putRequestOptions } from './requestOptions'
import { GET_GOOD_PATH, POST_GOOD_PATH, PUT_GOOD_PATH } from './apiConstants'

import { postRequestOptions } from './requestOptions'
import { GOODS_PATH } from './apiConstants'

export const postGoodFetch = good => {
    return fetch(POST_GOOD_PATH, postRequestOptions(good))
        .then
        // response =>
        // response.json()
        ()
}

export const getGoodFetch = id => {
    return fetch(GET_GOOD_PATH + '?id=' + id, getRequestOptions()).then(response => response.json())
}

export const getAllGoodsFetch = (query = '') => {
    return fetch(GOODS_PATH + query, getRequestOptions()).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const deleteGoodFetch = (id, body = null) => {
    return fetch(GOODS_PATH + `/${id}`, deleteRequestOptions(body)).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
    })
}

export const putGoodFetch = good => {
    return fetch(PUT_GOOD_PATH, putRequestOptions(good)).then(response => response.json())
}

export const postGoodsFetch = body => {
    return fetch(GOODS_PATH, postRequestOptions(body)).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}
