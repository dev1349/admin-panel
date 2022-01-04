import { createSelector, createSlice } from '@reduxjs/toolkit'
import { goodsMockData } from '../mock/goodsMockData'
import {
    deleteGoodFetch,
    getAllGoodFetch,
    getGoodFetch,
    postGoodFetch,
    putGoodFetch,
} from '../api/goodApi'
import { getComparator, toSortTable } from './common/sortingFunctions'

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
        changeOrder(state, action) {
            state.order = action.payload
        },
        changeOrderBy(state, action) {
            state.orderBy = action.payload
        },
        setSelectedGoodId(state, action) {
            state.selectedGoods = action.payload
        },
        clearSelectedGoods(state) {
            state.selectedGoods = goodsMockData.selectedGoods
        },
        changeEditGoodFields(state, action) {
            state.editGoodFields = {
                ...state.editGoodFields,
                ...action.payload,
            }
        },
        saveGoodChanges(state, action) {
            state.allGoods[action.payload.goodIndex] = {
                ...state.allGoods[action.payload.goodIndex],
                ...action.payload.fields,
            }
        },
    },
})

export default goodsSlice.reducer

export const {
    addGood,
    setCurrentGood,
    setAllGoods,
    deleteGoodSuccess,
    setGoodsFilter,
    setFilteredGoods,
    changeOrder,
    changeOrderBy,
    setSelectedGoodId,
    clearSelectedGoods,
    changeEditGoodFields,
    saveGoodChanges,
} = goodsSlice.actions

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

export const sortingGoods = () => (dispatch, getState) => {
    const goods = getState().goods.allGoods
    const comparator = getComparator(
        getState().goods.order,
        getState().goods.orderBy
    )
    const sortedGoods = toSortTable(goods, comparator)
    dispatch(setAllGoods(sortedGoods))

    const filteredGoods = getState().goods.filteredGoods
    const sortedFilteredGoods = toSortTable(filteredGoods, comparator)
    dispatch(setFilteredGoods(sortedFilteredGoods))
}

export const clickTableSortLabel = property => (dispatch, getState) => {
    const order = getState().goods.order
    const orderBy = getState().goods.orderBy
    const isAsc = orderBy === property && order === 'asc'
    dispatch(changeOrder(isAsc ? 'desc' : 'asc'))
    dispatch(changeOrderBy(property))
    dispatch(sortingGoods())
}

export const selectGood = id => (dispatch, getState) => {
    const selectedGoods = getState().goods.selectedGoods
    let newSelectedGoods
    const position = selectedGoods.indexOf(id)
    if (position === -1) {
        newSelectedGoods = [...selectedGoods, id]
    } else {
        newSelectedGoods = [...selectedGoods]
        newSelectedGoods.splice(position, 1)
    }
    dispatch(setSelectedGoodId(newSelectedGoods))
}

export const selectAllGoods = () => (dispatch, getState) => {
    const allGoods = getState().goods.allGoods
    if (!allGoods.length) return
    if (
        getState().goods.allGoods.length ===
        getState().goods.selectedGoods.length
    ) {
        dispatch(clearSelectedGoods())
    } else {
        dispatch(clearSelectedGoods())
        allGoods.forEach(item => dispatch(selectGood(item.id)))
    }
}

export const selectAllFilteredGoods = () => (dispatch, getState) => {
    const filteredGoods = getState().goods.filteredGoods
    if (!filteredGoods.length) return
    if (
        getState().goods.filteredGoods.length ===
        getState().goods.selectedGoods.length
    ) {
        dispatch(clearSelectedGoods())
    } else {
        dispatch(clearSelectedGoods())
        filteredGoods.forEach(item => dispatch(selectGood(item.id)))
    }
}

export const setEditGoodStartFieldValues = goodId => (dispatch, getState) => {
    const currentGood = getState().goods.allGoods.find(
        good => good.id === parseInt(goodId)
    )
    dispatch(
        changeEditGoodFields({
            name: currentGood.name || null,
            description: currentGood.description || null,
            htmlTitle: currentGood.htmlTitle || null,
            htmlH1: currentGood.htmlH1 || null,
            metaDescription: currentGood.metaDescription || null,
            metaKeywords: currentGood.metaKeywords || null,
        })
    )
}

export const saveGoodFieldsValues = goodId => (dispatch, getState) => {
    const goodFieldsValues = getState().goods.editGoodFields
    const goodIndex = getState().goods.allGoods.findIndex(
        good => parseInt(goodId) === good.id
    )
    dispatch(
        saveGoodChanges({
            goodIndex,
            fields: goodFieldsValues,
        })
    )
}

export const deleteSelectedGoods = (dispatch, getState) => {
    const selectedGoods = getState().goods.selectedGoods
    const allGoods = getState().goods.allGoods
    let newAllGoods = [...allGoods]
    selectedGoods.forEach(
        selected =>
            (newAllGoods = newAllGoods.filter(good => good.id !== selected))
    )
    dispatch(setAllGoods(newAllGoods))
    dispatch(setFilteredGoods(newAllGoods))
    dispatch(setSelectedGoodId([]))

    if (!getGoodStatus(getState()).includes(getFilterValues(getState()).status))
        dispatch(setGoodsFilter({ status: null }))
    if (
        !getGoodImageStatus(getState()).includes(
            getFilterValues(getState()).imageStatus
        )
    )
        dispatch(setGoodsFilter({ imageStatus: null }))
    if (
        !getGoodTypes(getState()).includes(
            getFilterValues(getState())['goodType.name']
        )
    )
        dispatch(setGoodsFilter({ 'goodType.name': null }))

    dispatch(filteringGoods(getState().goods.allGoods, getState().goods.filter))
}

export const getGoodStatus = state =>
    Array.from(new Set(state.goods.allGoods.map(el => el.status)).values())
export const getGoodImageStatus = state =>
    Array.from(new Set(state.goods.allGoods.map(el => el.imageStatus)).values())
export const getGoodTypes = state =>
    Array.from(
        new Set(state.goods.allGoods.map(el => el.goodType.name)).values()
    )
export const getFilterValues = state => state.goods.filter
export const getGoods = state => state.goods.allGoods
export const getOrder = state => state.goods.order
export const getOrderBy = state => state.goods.orderBy
export const getRowCount = state => state.goods.allGoods.length
export const getFilteredRowCount = state => state.goods.filteredGoods.length
export const getSelectedRowCount = state => state.goods.selectedGoods.length
export const getGoodChecked = id => state =>
    state.goods.selectedGoods.includes(id)
export const getGoodsFields = state =>
    state.goods.allGoods.map(good => ({
        id: good.id,
        name: good.name,
        description: good.description,
        price: good.price,
        salePrice: good.price,
    }))
export const getHeaderCells = state => state.goods.headerCells
export const getEditGoodFields = state => state.goods.editGoodFields
export const isGoodInAllGoods = goodId => state =>
    state.goods.allGoods.find(good => good.id === parseInt(goodId))
export const isSaveDisabled = goodId =>
    createSelector(
        getEditGoodFields,
        isGoodInAllGoods(goodId),
        (editFields, goodFields) =>
            editFields.name === goodFields.name &&
            editFields.description ===
                (goodFields.description === '' && null) &&
            editFields.htmlTitle === (goodFields.htmlTitle || null) &&
            editFields.htmlH1 === (goodFields.htmlH1 || null) &&
            editFields.metaDescription ===
                (goodFields.metaDescription || null) &&
            editFields.metaKeywords === (goodFields.metaKeywords || null)
    )
export const getFilteredGoods = state => state.goods.filteredGoods
