import { createSelector, createSlice } from '@reduxjs/toolkit'
import initialState from '../mock/attributeGroupInitialState'
import {
    deleteAttributeGroupFetch,
    getAllAttributeGroupFetch,
    postAttributeGroupFetch,
    putAttributeGroupFetch,
} from '../api/attributeGroupApi'

const attributeGroupSlice = createSlice({
    name: 'attributeGroup',
    initialState,
    reducers: {
        setAttributeGroup(state, action) {
            state.attributeGroupItems = action.payload
        },
        changeFetchStatus(state, action) {
            state.fetchStatus = action.payload
        },
        changeFieldsValue(state, action) {
            return {
                ...state,
                addAttributeGroupFields: {
                    ...state.addAttributeGroupFields,
                    ...action.payload,
                },
            }
        },
        changeMode(state, action) {
            state.attributeGroupMode = action.payload
        },
        resetFieldsValue(state) {
            state.addAttributeGroupFields = initialState.addAttributeGroupFields
        },
        setIdForDeletingArray(state, action) {
            state.forDeleting = action.payload
        },
        resetIdForDeletingArray(state) {
            state.forDeleting = initialState.forDeleting
        },
        sorting(state, action) {
            state.attributeGroupItems = action.payload
        },
        changeSortOrder(state, action) {
            state.sortOrder = action.payload
        },
        changeOrder(state, action) {
            state.order = action.payload
        },
        changeOrderBy(state, action) {
            state.orderBy = action.payload
        },
    },
})

export const {
    setAttributeGroup,
    changeFetchStatus,
    changeFieldsValue,
    changeMode,
    resetFieldsValue,
    setIdForDeletingArray,
    resetIdForDeletingArray,
    sorting,
    changeSortOrder,
    changeOrder,
    changeOrderBy,
} = attributeGroupSlice.actions

export default attributeGroupSlice.reducer

export const getAttributeGroupMode = state =>
    state.attributeGroup.attributeGroupMode
export const getFetchStatus = state => state.attributeGroup.fetchStatus
export const isButtonDisabled = state =>
    state.attributeGroup.fetchStatus !== 'idle'
export const isGroupNameFieldEmpty = state =>
    !state.attributeGroup.addAttributeGroupFields.name
export const isSaveGroupButtonDisabled = createSelector(
    isButtonDisabled,
    isGroupNameFieldEmpty,
    getAttributeGroupMode,
    state => state.attributeGroup.addAttributeGroupFields.id,
    state => state.attributeGroup.addAttributeGroupFields.name,
    state => state.attributeGroup.addAttributeGroupFields.sortOrder,
    state => state.attributeGroup.attributeGroupItems,
    (isButtonDisabled, isFieldEmpty, mode, id, name, sortOrder, allGroups) => {
        if (mode === 'add') {
            return isButtonDisabled || isFieldEmpty
        }
        if (mode === 'edit') {
            if (!id) return false
            const currentGroupBeforeChange = allGroups.find(el => el.id === id)
            const isNotCurrentGroupFieldsChanged =
                currentGroupBeforeChange.name === name &&
                currentGroupBeforeChange.sortOrder == sortOrder
            return isButtonDisabled || isNotCurrentGroupFieldsChanged
        }
    }
)
export const getAttributeGroupItems = state =>
    state.attributeGroup.attributeGroupItems
export const getIdGroupForDeletingArray = state =>
    state.attributeGroup.forDeleting
export const getSortOrderGroupName = state => state.attributeGroup.sortOrder
export const isAttributeGroupListEmpty = state =>
    !state.attributeGroup.attributeGroupItems.length
export const getAddAttributeGroupFields = state =>
    state.attributeGroup.addAttributeGroupFields
export const isGroupDeletingListEmpty = state =>
    !state.attributeGroup.forDeleting.length

export const getOrder = state => state.attributeGroup.order
export const getOrderBy = state => state.attributeGroup.orderBy
export const getIsAttributeGroupChecked = id => state =>
    state.attributeGroup.forDeleting.includes(id)
export const getRowCount = state =>
    state.attributeGroup.attributeGroupItems.length
export const getSelectedRowCount = state =>
    state.attributeGroup.forDeleting.length

const generateSortOrder = el => {
    const newEl = {
        ...el,
    }
    if (!newEl['sortOrder']) {
        newEl.sortOrder = Math.ceil(Math.random() * 10)
    }
    return newEl
}

export const getAllAttributeGroup = () => (dispatch, getState) => {
    dispatch(changeFetchStatus('pending'))
    getAllAttributeGroupFetch()
        .then(data => {
            const transformData = data.map(el => {
                return generateSortOrder(el)
            })
            const comparator = getComparator(
                getState().attributeGroup.order,
                getState().attributeGroup.orderBy
            )
            const sortedAttributeGroupItems = toSortTable(
                transformData,
                comparator
            )
            dispatch(setAttributeGroup(sortedAttributeGroupItems))
            dispatch(changeFetchStatus('successGetAllGroup'))
            dispatch(changeFetchStatus('idle'))
        })
        .catch(() => {
            dispatch(changeFetchStatus('errorGetAllGroup'))
        })
}

export const returnToListMode = () => dispatch => {
    dispatch(changeMode('list'))
    dispatch(resetFieldsValue())
    dispatch(resetIdForDeletingArray())
}

export const saveGroup = () => (dispatch, getState) => {
    dispatch(changeFetchStatus('pending'))
    const newGroup = getState().attributeGroup.addAttributeGroupFields
    const mode = getState().attributeGroup.attributeGroupMode

    if (mode === 'add') {
        postAttributeGroupFetch(newGroup)
            .then(() => {
                dispatch(changeFetchStatus('successAddGroup'))
            })
            .catch(() => {
                dispatch(changeFetchStatus('errorAddGroup'))
            })
    }

    if (mode === 'edit') {
        putAttributeGroupFetch(newGroup)
            .then(() => {
                dispatch(changeFetchStatus('successEditGroup'))
            })
            .catch(() => {
                dispatch(changeFetchStatus('errorEditGroup'))
            })
    }
}

export const addedAttributeGroup = () => dispatch => {
    dispatch(changeFetchStatus('idle'))
    dispatch(resetFieldsValue())
    dispatch(getAllAttributeGroup())
    dispatch(returnToListMode())
}

export const editAttributeGroup = groupId => (dispatch, getState) => {
    dispatch(changeMode('edit'))
    const currentGroup = getState().attributeGroup.attributeGroupItems.find(
        item => item.id === groupId
    )
    Object.keys(currentGroup).forEach(key =>
        dispatch(
            changeFieldsValue({
                [key]: currentGroup[key],
            })
        )
    )
}

export const savedEditedAttributeGroup = () => dispatch => {
    dispatch(changeFetchStatus('idle'))
    dispatch(resetFieldsValue())
    dispatch(getAllAttributeGroup())
    dispatch(returnToListMode())
}

export const deletedAttributeGroup = () => dispatch => {
    dispatch(changeFetchStatus('idle'))
    dispatch(getAllAttributeGroup())
}

export const errorInGroupOperation = () => dispatch => {
    dispatch(changeFetchStatus('idle'))
}

export const addRemoveIdGroupForDeleting = id => (dispatch, getState) => {
    const groupArrayForDeleting = getState().attributeGroup.forDeleting
    let newGroupArrayForDeleting
    const position = groupArrayForDeleting.indexOf(id)
    if (position === -1) {
        newGroupArrayForDeleting = [...groupArrayForDeleting, id]
    } else {
        newGroupArrayForDeleting = [...groupArrayForDeleting]
        newGroupArrayForDeleting.splice(position, 1)
    }
    dispatch(setIdForDeletingArray(newGroupArrayForDeleting))
}

export const removeSelectedAttributesGroup = () => (dispatch, getState) => {
    const idGroupForDeleting = getState().attributeGroup.forDeleting
    const groupForDeleting =
        getState().attributeGroup.attributeGroupItems.filter(item =>
            idGroupForDeleting.includes(item.id)
        )
    dispatch(changeFetchStatus('pending'))
    Promise.all(groupForDeleting.map(group => deleteAttributeGroupFetch(group)))
        .then(() => {
            dispatch(changeFetchStatus('successDeleteGroup'))
            dispatch(resetIdForDeletingArray())
        })
        .catch(() => {
            dispatch(changeFetchStatus('errorDeleteGroup'))
        })
}

export const addAllGroupForDeleting = () => (dispatch, getState) => {
    const allGroup = getState().attributeGroup.attributeGroupItems
    if (!allGroup.length) return
    if (
        getState().attributeGroup.attributeGroupItems.length ===
        getState().attributeGroup.forDeleting.length
    ) {
        dispatch(resetIdForDeletingArray())
    } else {
        dispatch(resetIdForDeletingArray())
        allGroup.forEach(item => dispatch(addRemoveIdGroupForDeleting(item.id)))
    }
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy)
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) {
            return order
        }
        return a[1] - b[1]
    })
    return stabilizedThis.map(el => el[0])
}

const toSortTable = (rows, comparator) => {
    return stableSort(rows, comparator)
}

export const clickTableSortLabel = property => (dispatch, getState) => {
    const order = getState().attributeGroup.order
    const orderBy = getState().attributeGroup.orderBy
    const isAsc = orderBy === property && order === 'asc'
    dispatch(changeOrder(isAsc ? 'desc' : 'asc'))
    dispatch(changeOrderBy(property))
    const attributeGroups = getState().attributeGroup.attributeGroupItems
    const comparator = getComparator(
        getState().attributeGroup.order,
        getState().attributeGroup.orderBy
    )
    const sortedAttributeGroupItems = toSortTable(attributeGroups, comparator)
    dispatch(setAttributeGroup(sortedAttributeGroupItems))
}
