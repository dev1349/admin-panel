import {
    CHANGE_ADD_ATTRIBUTE_GROUP_FIELDS,
    CHANGE_ATTRIBUTE_GROUP_FETCH_STATUS,
    CHANGE_ATTRIBUTE_GROUP_MODE, CHANGE_SORT_ORDER, RESET_ADD_ATTRIBUTE_GROUP_FIELDS, RESET_ID_ARRAY_FOR_DELETING,
    SET_ATTRIBUTE_GROUP, SET_NEW_ID_ARRAY_FOR_DELETING, SORT_ATTRIBUTE_GROUP
} from './actionTypes'
import {
    deleteAttributeGroupFetch,
    getAllAttributeGroupFetch,
    postAttributeGroupFetch,
    putAttributeGroupFetch
} from '../api/attributeGroupApi'


export const changeAttributeGroupFetchStatus = (fetchStatus) => {
    return {
        type: CHANGE_ATTRIBUTE_GROUP_FETCH_STATUS,
        payload: fetchStatus,
    }
}

const generateSortOrder = (el) => {
    const newEl = {...el}
    if (!newEl['sortOrder']) {
        newEl.sortOrder = Math.ceil(Math.random() * 10)
    }
    return newEl
}

export const getAllAttributeGroup = () => {

    return dispatch => {
        dispatch(changeAttributeGroupFetchStatus('pending'))
        getAllAttributeGroupFetch()
            .then(data => {
                const transformData = data.map(el => {
                    return generateSortOrder(el)
                })

                dispatch({
                    type: SET_ATTRIBUTE_GROUP,
                    payload: transformData
                })

                dispatch(changeAttributeGroupFetchStatus('success'))
                dispatch(changeAttributeGroupFetchStatus('idle'))
            })
            .catch(error => {
                    dispatch(changeAttributeGroupFetchStatus('error'))
                }
            )
    }
}

export const changeAddAttributeGroupFields = (field) => {
    return {
        type: CHANGE_ADD_ATTRIBUTE_GROUP_FIELDS,
        payload: field,
    }
}

export const changeAttributeGroupMode = (mode) => {
    return {
        type: CHANGE_ATTRIBUTE_GROUP_MODE,
        payload: mode,
    }
}

export const resetAddAttributesGroupFields = () => {
    return {
        type: RESET_ADD_ATTRIBUTE_GROUP_FIELDS,
    }
}

export const switchMode = (mode) => dispatch => {
    dispatch(changeAttributeGroupMode(mode))
    if (mode === 'list') {
        dispatch(resetAddAttributesGroupFields())
        dispatch(resetIdArrayForDeleting())
    }
}

export const saveGroup = () => (dispatch, getState) => {
    if (!getState().attributeGroup.addAttributeGroupFields.name) {
        dispatch(changeAttributeGroupFetchStatus('emptyName'))
        return
    }

    dispatch(changeAttributeGroupFetchStatus('pending'))
    const newGroup = getState().attributeGroup.addAttributeGroupFields
    const mode = getState().attributeGroup.attributeGroupMode

    if (mode === 'add') {
        postAttributeGroupFetch(newGroup)
            .then(() => {
                dispatch(changeAttributeGroupFetchStatus('successAddGroup'))
            })
            .catch(() => {
                dispatch(changeAttributeGroupFetchStatus('errorAddGroup'))
            })
    }

    if (mode === 'edit') {
        dispatch(changeAttributeGroupFetchStatus('pending'))
        const editedAttributeGroup = getState().attributeGroup.addAttributeGroupFields
        putAttributeGroupFetch(editedAttributeGroup)
            .then(() => {
                dispatch(changeAttributeGroupFetchStatus('successEditGroup'))
            })
            .catch(() => {
                dispatch(changeAttributeGroupFetchStatus('errorEditGroup'))
            })
    }
}

export const addedAttributeGroup = () => dispatch => {
    dispatch(changeAttributeGroupFetchStatus('idle'))
    dispatch(resetAddAttributesGroupFields())
    dispatch(getAllAttributeGroup())
}

export const editAttributeGroup = (groupId) => (dispatch, getState) => {
    dispatch(switchMode('edit'))
    const currentGroup = getState().attributeGroup.attributeGroupItems.find(item => item.id === groupId)
    Object.keys(currentGroup).forEach(key => dispatch(changeAddAttributeGroupFields({[key]: currentGroup[key]})))
}

export const savedEditedAttributeGroup = () => dispatch => {
    dispatch(changeAttributeGroupFetchStatus('idle'))
    dispatch(resetAddAttributesGroupFields())
    dispatch(getAllAttributeGroup())
    dispatch(switchMode('list'))
}

export const errorInGroupOperation = () => dispatch => {
    dispatch(changeAttributeGroupFetchStatus('idle'))
}

export const setNewIdArrayForDeleting = (newArray) => {
    return {
        type: SET_NEW_ID_ARRAY_FOR_DELETING,
        payload: newArray
    }
}

export const addRemoveIdGroupForDeleting = (id) => (dispatch, getState) => {
    const groupArrayForDeleting = getState().attributeGroup.forDeleting
    let newGroupArrayForDeleting
    const position = groupArrayForDeleting.indexOf(id)
    if (position === -1) {
        newGroupArrayForDeleting = [...groupArrayForDeleting, id]
    } else {
        newGroupArrayForDeleting = [...groupArrayForDeleting]
        newGroupArrayForDeleting.splice(position, 1)
    }
    dispatch(setNewIdArrayForDeleting(newGroupArrayForDeleting))
}

export const resetIdArrayForDeleting = () => {
    return {
        type: RESET_ID_ARRAY_FOR_DELETING,
    }
}

export const removeSelectedAttributesGroup = () => (dispatch, getState) => {
    const idGroupForDeleting = getState().attributeGroup.forDeleting
    const groupForDeleting = getState().attributeGroup.attributeGroupItems.filter(item => idGroupForDeleting.includes(item.id))
    dispatch(changeAttributeGroupFetchStatus('pending'))
    Promise.all(groupForDeleting.map(group => deleteAttributeGroupFetch(group)))
        .then(() => {
            dispatch(changeAttributeGroupFetchStatus('successDeleteGroup'))
            dispatch(resetIdArrayForDeleting())
            dispatch(changeAttributeGroupFetchStatus('idle'))
            dispatch(getAllAttributeGroup())
        })
        .catch(() => {
            dispatch(changeAttributeGroupFetchStatus('errorDeleteGroup'))
        })
}

export const setSortedAttributeGroup = (sorted) => {
    return {
        type: SORT_ATTRIBUTE_GROUP,
        payload: sorted
    }
}

export const changeSortOrder = (sortOrder) => {
    return {
        type: CHANGE_SORT_ORDER,
        payload: sortOrder
    }
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

    dispatch(setSortedAttributeGroup(newAttributeGroupItems))
}

export const addAllGroupForDeleting = () => (dispatch, getState) => {
    const allGroup = getState().attributeGroup.attributeGroupItems
    if (!allGroup.length) return
    if (getState().attributeGroup.attributeGroupItems.length === getState().attributeGroup.forDeleting.length) {
        dispatch(resetIdArrayForDeleting())
    } else {
        dispatch(resetIdArrayForDeleting())
        allGroup.forEach(item => dispatch(addRemoveIdGroupForDeleting(item.id)))
    }



}

