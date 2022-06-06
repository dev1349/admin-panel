import { NOVAPOSHTA_URL } from './apiConstants'
export const CitiesFetch = queryParams => {
    return fetch(NOVAPOSHTA_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(queryParams),
    }).then(response => response.json())
}

export const OfficesFetch = queryParams => {
    return fetch(NOVAPOSHTA_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(queryParams),
    }).then(response => response.json())
}
