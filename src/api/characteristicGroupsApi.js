import {
    deleteRequestOptions,
    getRequestOptions,
    postRequestOptions,
    putRequestOptions,
} from './requestOptions'
import { CHARACTERISTICGROUPS_PATH } from './apiConstants'

export const getAllCharacteristicGroupsFetch = () => {
    return fetch(CHARACTERISTICGROUPS_PATH, getRequestOptions()).then(
        response => response.json()
    )
}

export const getCharacteristicGroupFetch = id => {
    return fetch(
        CHARACTERISTICGROUPS_PATH + `/${id}`,
        getRequestOptions()
    ).then(response => response.json())
}

export const postCharacteristicGroupFetch = body => {
    return fetch(CHARACTERISTICGROUPS_PATH, postRequestOptions(body))
}

export const putCharacteristicGroupFetch = body => {
    return fetch(CHARACTERISTICGROUPS_PATH, putRequestOptions(body))
}

export const deleteCharacteristicGroupFetch = (id, body = null) => {
    return fetch(
        CHARACTERISTICGROUPS_PATH + `/${id}`,
        deleteRequestOptions(body)
    )
}
