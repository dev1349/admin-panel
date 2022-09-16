import { CONTACTS_PATH } from './apiConstants'
import { getRequestOptions, postRequestOptions } from './requestOptions'

export const loadContacts = () => {
    return fetch(CONTACTS_PATH, getRequestOptions()).then(resp => resp.json())
}

export const postContacts = body => {
    return fetch(CONTACTS_PATH, postRequestOptions(body)).then(resp => resp.json())
}
