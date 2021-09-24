import {
    CHANGE_GOOD_FILTER,
    CREATE_FILTERED_GOOD,
    DELETE_GOOD_SUCCESS,
    GET_ALL_GOOD_SUCCESS,
    GET_GOOD_SUCCESS,
    POST_GOOD_SUCCESS,
    PUT_GOOD_SUCCESS,
    SET_MY_GOOD_LIST_SORTING_STATUS
} from './actionTypes'
import {deleteGoodFetch, getAllGoodFetch, getGoodFetch, postGoodFetch, putGoodFetch} from '../api/goodApi'

export const postGood = good => {
    return dispatch => {
        postGoodFetch(good)
            .then(data => {
                dispatch({
                    type: POST_GOOD_SUCCESS,
                    payload: data
                })
            })
    }
}

export const getGood = id => {
    return dispatch => {
        getGoodFetch(id)
            .then(data => {
                dispatch({
                    type: GET_GOOD_SUCCESS,
                    payload: data
                })
            })
    }
}

export const getAllGood = () => {
    return dispatch => {
        getAllGoodFetch()
            .then(data => {
                dispatch({
                    type: GET_ALL_GOOD_SUCCESS,
                    payload: Object.values(data)
                })
            })
    }
}

export const putGood = good => {
    return dispatch => {
        putGoodFetch(good)
            .then(data => {
                dispatch({
                    type: PUT_GOOD_SUCCESS,
                    payload: data
                })
            })
    }
}

export const deleteGood = good => {
    return dispatch => {
        deleteGoodFetch(good)
            .then(data => {
                dispatch({
                    type: DELETE_GOOD_SUCCESS,
                    payload: good
                })
            })
    }
}

export const changeGoodFilter = (key, value) => {
    return ({
        type: CHANGE_GOOD_FILTER,
        payload: {
            [key]: value
        }
    })
}

export const filteringGood = () => {
    const getFieldValueByPath = (pathToField, obj = null, separator = '.') => {
        const properties = Array.isArray(pathToField) ? pathToField : pathToField.split(separator)
        return properties.reduce((prev, curr) => prev && prev[curr], obj)
    }

    const filteringGoodByFilter = (goodsArray, filters) => {
        const filterKeys = Object.keys(filters);
        return goodsArray.filter((eachGood) => {
            return filterKeys.every((eachKey) => {
                if (filters[eachKey] === '' || filters[eachKey] === null) {
                    return true
                }
                return filters[eachKey] === (getFieldValueByPath(eachKey, eachGood));
            })
        })
    }

    return (dispatch, getState) => {
        const allGood = getState().good.allGood
        const filter = getState().good.filter

        const filteredGood = filteringGoodByFilter(allGood, filter)

        dispatch({
            type: CREATE_FILTERED_GOOD,
            payload: filteredGood
        })
    }
}

const setMyGoodListSortingStatus = (name, value) => {
    return {
        type: SET_MY_GOOD_LIST_SORTING_STATUS,
        payload: {
            [name]: value,
        }
    }
}

const setSortedAllGood = (sortedAllGood) => {
    return {
        type: 'SET_SORTED_ALL_GOOD',
        payload: [...sortedAllGood]
    }
}

const sortMyGoodList = () => (dispatch, getState) => {
    const sortingField = Object.keys(getState().good.sortingStatus)[0]
    const sortingValue = getState().good.sortingStatus[sortingField]
    const allGood = getState().good.allGood
    const sortedAllGood = allGood.sort((a, b) => {
        if (sortingValue === 'down') {
            if (a[sortingField] > b[sortingField]) {
                return 1
            }
            if (a[sortingField] < b[sortingField]) {
                return -1
            }
        }
        if (sortingValue === 'up') {
            if (a[sortingField] < b[sortingField]) {
                return 1
            }
            if (a[sortingField] > b[sortingField]) {
                return -1
            }
        }
        return 0
    })

    dispatch(setSortedAllGood(sortedAllGood))
}

export const changeMyGoodListSortingStatus = (nameOfField) => (dispatch, getState) => {
    const sortingField = Object.keys(getState().good.sortingStatus)[0]
    const sortingValue = getState().good.sortingStatus[sortingField]

    if (sortingField !== nameOfField) {
        dispatch(setMyGoodListSortingStatus(nameOfField, 'down'))
    }

    if ((sortingField === nameOfField) && (sortingValue === 'down')) {
        dispatch(setMyGoodListSortingStatus(nameOfField, 'up'))
    }

    if ((sortingField === nameOfField) && (sortingValue === 'up')) {
        dispatch(setMyGoodListSortingStatus(nameOfField, 'down'))
    }

    dispatch(sortMyGoodList())
}