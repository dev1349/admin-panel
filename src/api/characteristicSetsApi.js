import { deleteRequestOptions, getRequestOptions, postRequestOptions, putRequestOptions } from './requestOptions'
import { CHARACTERISTIC_SETS_PATH } from './apiConstants'

export const getAllCharacteristicSetsFetch = () => {
    return fetch(CHARACTERISTIC_SETS_PATH, getRequestOptions()).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const getCharacteristicSetFetch = id => {
    return fetch(CHARACTERISTIC_SETS_PATH + `/${id}`, getRequestOptions()).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const deleteCharacteristicSetFetch = (id, body = null) => {
    return fetch(CHARACTERISTIC_SETS_PATH + `/${id}`, deleteRequestOptions(body)).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
    })
}

export const postCharacteristicSetFetch = body => {
    return fetch(CHARACTERISTIC_SETS_PATH, postRequestOptions(body)).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const putCharacteristicSetFetch = body => {
    return fetch(CHARACTERISTIC_SETS_PATH + `/${body.id}`, putRequestOptions(body)).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}
