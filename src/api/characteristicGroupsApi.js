import { deleteRequestOptions, getRequestOptions, postRequestOptions, putRequestOptions } from './requestOptions'
import { CHARACTERISTICGROUPS_PATH } from './apiConstants'

export const getAllCharacteristicGroupsFetch = () => {
    return fetch(CHARACTERISTICGROUPS_PATH, getRequestOptions()).then(response => response.json())
}

export const getCharacteristicGroupFetch = id => {
    return fetch(CHARACTERISTICGROUPS_PATH + `/${id}`, getRequestOptions()).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const postCharacteristicGroupFetch = body => {
    return fetch(CHARACTERISTICGROUPS_PATH, postRequestOptions(body)).then(response => response.json())
}

export const putCharacteristicGroupFetch = body => {
    return fetch(CHARACTERISTICGROUPS_PATH + `/${body.id}`, putRequestOptions(body)).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const deleteCharacteristicGroupFetch = (id, body = null) => {
    return fetch(CHARACTERISTICGROUPS_PATH + `/${id}`, deleteRequestOptions(body)).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
    })
}
