export const getRequestOptions = () => {
    return {
        method: 'GET',
        headers: {
            Authorization: localStorage.getItem('token'),
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    }
}

export const postRequestOptions = body => {
    return {
        method: 'POST',
        headers: {
            Authorization: localStorage.getItem('token'),
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }
}

export const postImageRequestOptions = body => {
    return {
        method: 'POST',
        headers: {
            Authorization: localStorage.getItem('token'),
            'Access-Control-Allow-Origin': '*',
        },
        body: body,
    }
}

export const putRequestOptions = body => {
    return {
        method: 'PUT',
        headers: {
            Authorization: localStorage.getItem('token'),
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }
}

export const deleteRequestOptions = body => {
    return {
        method: 'DELETE',
        headers: {
            Authorization: localStorage.getItem('token'),
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }
}
