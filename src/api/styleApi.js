import { getRequestOptions, putRequestOptions } from './requestOptions'
import { THEMES_PATH } from './apiConstants'

export const getThemeFetch = name => {
    return fetch(THEMES_PATH + '/' + `${name}`, getRequestOptions()).then(res => res.json())
}

export const putThemeFetch = theme => {
    return fetch(THEMES_PATH, putRequestOptions(theme)).then(response => response.json())
}
