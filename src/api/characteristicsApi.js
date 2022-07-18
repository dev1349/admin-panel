import { deleteRequestOptions, getRequestOptions, postRequestOptions, putRequestOptions } from './requestOptions'
import { CHARACTERISTICS_PATH, CHARACTERISTICS_WITHOUT_GROUP_PATH } from './apiConstants'

export const getAllCharacteristicsFetch = () => {
    return fetch(CHARACTERISTICS_PATH, getRequestOptions()).then(response => response.json())
}

export const getCharacteristicsWithoutGroupFetch = () => {
    return fetch(CHARACTERISTICS_WITHOUT_GROUP_PATH, getRequestOptions()).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const getCharacteristicFetch = id => {
    return fetch(CHARACTERISTICS_PATH + `/${id}`, getRequestOptions()).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const postCharacteristicFetch = body => {
    return fetch(CHARACTERISTICS_PATH, postRequestOptions(body)).then(response => response.json())
}

export const putCharacteristicFetch = (id, body) => {
    return fetch(CHARACTERISTICS_PATH + `/${id}`, putRequestOptions(body)).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const deleteCharacteristicFetch = (id, body = null) => {
    return fetch(CHARACTERISTICS_PATH + `/${id}`, deleteRequestOptions(body))
}
