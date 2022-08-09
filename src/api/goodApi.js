import { deleteRequestOptions, getRequestOptions, putRequestOptions } from './requestOptions'
import { POST_GOOD_PATH } from './apiConstants'

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
    return fetch(GOODS_PATH + `/${id}`, getRequestOptions()).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const getGoodsFetch = (query = '') => {
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

// export const putGoodFetch = good => {
//     return fetch(PUT_GOOD_PATH, putRequestOptions(good)).then(response => response.json())
// }

export const putGoodFetch = body => {
    return fetch(GOODS_PATH + `/${body.id}`, putRequestOptions(body)).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const postGoodsFetch = body => {
    return fetch(GOODS_PATH, postRequestOptions(body)).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}
