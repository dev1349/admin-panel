import { getRequestOptions, postImageRequestOptions } from './requestOptions'
import { IMAGES_PATH } from './apiConstants'

export const getAllImagesFetch = () => {
    return fetch(IMAGES_PATH, getRequestOptions()).then(response => {
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
