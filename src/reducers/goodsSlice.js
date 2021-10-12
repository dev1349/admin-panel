import { createSlice } from '@reduxjs/toolkit'
import { goodsMockData } from '../mock/goodsMockData'
import {
    deleteGoodFetch,
    getAllGoodFetch,
    getGoodFetch,
    postGoodFetch,
    putGoodFetch,
} from '../api/goodApi'

const goodsSlice = createSlice({
    name: 'goods',
    initialState: goodsMockData,
    reducers: {
        addGood(state, action) {
            state.allGoods.push(action.payload)
        },
        setCurrentGood(state, action) {
            state.currentGood = action.payload
        },
        setAllGoods(state, action) {
            state.allGoods = action.payload
        },
        deleteGoodSuccess(state, action) {
            state.allGoods.filter(item => item.id !== action.payload.id)
        },
        setGoodsFilter(state, action) {
            state.filter = {
                ...state.filter,
                ...action.payload,
            }
        },
        setFilteredGoods(state, action) {
            state.filteredGoods = action.payload
        },
        setSortingStatus(state, action) {
            state.sortingStatus = action.payload
        },
        setSortedAllGoods(state, action) {
            state.allGoods = action.payload
        },
    },
})

export const postGood = good => {
    return dispatch => {
        postGoodFetch(good).then(data => {
            dispatch(addGood(data))
        })
    }
}

export const getGood = id => {
    return dispatch => {
        getGoodFetch(id).then(data => {
            dispatch(setCurrentGood(data))
        })
    }
}

export const getAllGoods = () => {
    return dispatch => {
        getAllGoodFetch().then(data => {
            dispatch(setAllGoods(data))
        })
    }
}

export const putGood = good => {
    return dispatch => {
        putGoodFetch(good).then(data => {
            dispatch(setAllGoods(data))
        })
    }
}

export const deleteGood = good => {
    return dispatch => {
        deleteGoodFetch(good).then(data => {
            dispatch(deleteGoodSuccess(data))
        })
    }
}

export const filteringGoods = (allGoods, filter) => {
    const getFieldValueByPath = (pathToField, obj = null) => {
        const properties = Array.isArray(pathToField)
            ? pathToField
            : pathToField.split('.')
        return properties.reduce((prev, curr) => prev && prev[curr], obj)
    }

    const filteringGoodByFilter = () => {
        const filterKeys = Object.keys(filter)
        return allGoods.filter(eachGood => {
            return filterKeys.every(eachKey => {
                if (filter[eachKey] === '' || filter[eachKey] === null) {
                    return true
                }
                return (
                    filter[eachKey] === getFieldValueByPath(eachKey, eachGood)
                )
            })
        })
    }

    return dispatch => {
        const filteredGoods = filteringGoodByFilter()

        dispatch(setFilteredGoods(filteredGoods))
    }
}

const sortMyGoodsList = (allGoods, sortingStatus) => dispatch => {
    const sortingField = Object.keys(sortingStatus)[0]
    const sortingValue = sortingStatus[sortingField]
    const newArr = [...allGoods]
    newArr.sort((a, b) => {
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

    dispatch(setSortedAllGoods(newArr))
}

export const changeMyGoodsListSortingStatus =
    (nameOfField, allGoods, sortingStatus) => dispatch => {
        const sortingField = Object.keys(sortingStatus)[0]
        const sortingValue = sortingStatus[sortingField]

        if (sortingField !== nameOfField) {
            dispatch(
                setSortingStatus({
                    [nameOfField]: 'down',
                })
            )
        }

        if (sortingField === nameOfField && sortingValue === 'down') {
            dispatch(
                setSortingStatus({
                    [nameOfField]: 'up',
                })
            )
        }

        if (sortingField === nameOfField && sortingValue === 'up') {
            dispatch(
                setSortingStatus({
                    [nameOfField]: 'down',
                })
            )
        }
        dispatch(sortMyGoodsList(allGoods, sortingStatus))
    }

export default goodsSlice.reducer

export const {
    addGood,
    setCurrentGood,
    setAllGoods,
    deleteGoodSuccess,
    setGoodsFilter,
    setFilteredGoods,
    setSortingStatus,
    setSortedAllGoods,
} = goodsSlice.actions
