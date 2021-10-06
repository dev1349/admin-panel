import {createSlice} from '@reduxjs/toolkit'
import initialState from '../mock/attributeGroupInitialState'
import {
    deleteAttributeGroupFetch,
    getAllAttributeGroupFetch,
    postAttributeGroupFetch,
    putAttributeGroupFetch
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
                    ...action.payload
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
        }
    }
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
    changeSortOrder
} = attributeGroupSlice.actions

export default attributeGroupSlice.reducer


export const getAttributeGroupMode = state => state.attributeGroup.attributeGroupMode
export const getFetchStatus = state => state.attributeGroup.fetchStatus
export const isButtonDisabled = state => state.attributeGroup.fetchStatus !== 'idle'
export const getAttributeGroupItems = state => state.attributeGroup.attributeGroupItems
export const getIdGroupForDeletingArray = state => state.attributeGroup.forDeleting
export const getSortOrderGroupName = state => state.attributeGroup.sortOrder
export const isAllGroupChecked = state => (state.attributeGroup.attributeGroupItems.length !== 0) && (state.attributeGroup.attributeGroupItems.length === state.attributeGroup.forDeleting.length)
export const isAttributeGroupListEmpty = state => !state.attributeGroup.attributeGroupItems.length
export const getAddAttributeGroupFields = state => state.attributeGroup.addAttributeGroupFields
export const isGroupDeletingListEmpty = state => !state.attributeGroup.forDeleting.length

const generateSortOrder = (el) => {
    const newEl = {...el}
    if (!newEl['sortOrder']) {
        newEl.sortOrder = Math.ceil(Math.random() * 10)
    }
    return newEl
}

export const getAllAttributeGroup = () => {
    return dispatch => {
        dispatch(changeFetchStatus('pending'))
        getAllAttributeGroupFetch()
            .then(data => {
                const transformData = data.map(el => {
                    return generateSortOrder(el)
                })

                dispatch(setAttributeGroup(transformData))

                dispatch(changeFetchStatus('successGetAllGroup'))
                dispatch(changeFetchStatus('idle'))
            })
            .catch(() => {
                    dispatch(changeFetchStatus('errorGetAllGroup'))
                }
            )
    }
}

export const switchMode = mode => dispatch => {
    dispatch(changeMode(mode))
    if (mode === 'list') {
        dispatch(resetFieldsValue())
        dispatch(resetIdForDeletingArray())
    }
}

export const saveGroup = () => (dispatch, getState) => {
    if (!getState().attributeGroup.addAttributeGroupFields.name) {
        dispatch(changeFetchStatus('emptyName'))
        return
    }

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
        dispatch(changeFetchStatus('pending'))
        const editedAttributeGroup = getState().attributeGroup.addAttributeGroupFields
        putAttributeGroupFetch(editedAttributeGroup)
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
    dispatch(switchMode('list'))
}

export const editAttributeGroup = groupId => (dispatch, getState) => {
    dispatch(switchMode('edit'))
    const currentGroup = getState().attributeGroup.attributeGroupItems.find(item => item.id === groupId)
    Object.keys(currentGroup).forEach(key => dispatch(changeFieldsValue({[key]: currentGroup[key]})))
}

export const savedEditedAttributeGroup = () => dispatch => {
    dispatch(changeFetchStatus('idle'))
    dispatch(resetFieldsValue())
    dispatch(getAllAttributeGroup())
    dispatch(switchMode('list'))
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
    const groupForDeleting = getState().attributeGroup.attributeGroupItems.filter(item => idGroupForDeleting.includes(item.id))
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

export const sortAttributeGroup = () => (dispatch, getState) => {
    const attributeGroupItems = getState().attributeGroup.attributeGroupItems
    let newAttributeGroupItems = [...attributeGroupItems]

    const sortOrder = getState().attributeGroup.sortOrder
    if (sortOrder === 'none') {
        newAttributeGroupItems.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            }
            if (a.name < b.name) {
                return -1
            }
            return 0
        })
        dispatch(changeSortOrder('down'))
    }
    if (sortOrder === 'up') {
        newAttributeGroupItems.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            }
            if (a.name < b.name) {
                return -1
            }
            return 0
        })
        dispatch(changeSortOrder('down'))
    }
    if (sortOrder === 'down') {
        newAttributeGroupItems.sort((a, b) => {
            if (a.name < b.name) {
                return 1
            }
            if (a.name > b.name) {
                return -1
            }
            return 0
        })
        dispatch(changeSortOrder('up'))
    }

    dispatch(sorting(newAttributeGroupItems))
}

export const addAllGroupForDeleting = () => (dispatch, getState) => {
    const allGroup = getState().attributeGroup.attributeGroupItems
    if (!allGroup.length) return
    if (getState().attributeGroup.attributeGroupItems.length === getState().attributeGroup.forDeleting.length) {
        dispatch(resetIdForDeletingArray())
    } else {
        dispatch(resetIdForDeletingArray())
        allGroup.forEach(item => dispatch(addRemoveIdGroupForDeleting(item.id)))
    }
}