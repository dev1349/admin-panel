import { deleteRequestOptions, getRequestOptions, postRequestOptions, putRequestOptions } from './requestOptions'
import { CHARACTERISTIC_GROUPS_PATH } from './apiConstants'

export const getAllCharacteristicGroupsFetch = () => {
    return fetch(CHARACTERISTIC_GROUPS_PATH, getRequestOptions()).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const getCharacteristicGroupFetch = id => {
    return fetch(CHARACTERISTIC_GROUPS_PATH + `/${id}`, getRequestOptions()).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const postCharacteristicGroupFetch = body => {
    return fetch(CHARACTERISTIC_GROUPS_PATH, postRequestOptions(body)).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const putCharacteristicGroupFetch = body => {
    return fetch(CHARACTERISTIC_GROUPS_PATH + `/${body.id}`, putRequestOptions(body)).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const deleteCharacteristicGroupFetch = (id, body = null) => {
    return fetch(CHARACTERISTIC_GROUPS_PATH + `/${id}`, deleteRequestOptions(body)).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
    })
}
