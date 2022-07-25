import { deleteRequestOptions, getRequestOptions, postImageRequestOptions } from './requestOptions'
import { IMAGES_PATH } from './apiConstants'

export const getAllImagesFetch = (query = '') => {
    return fetch(IMAGES_PATH + query, getRequestOptions()).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const postImageFetch = body => {
    return fetch(IMAGES_PATH, postImageRequestOptions(body)).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const deleteImageFetch = id => {
    return fetch(IMAGES_PATH + `/${id}`, deleteRequestOptions()).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
    })
}
