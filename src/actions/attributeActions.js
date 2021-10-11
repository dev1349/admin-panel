import {
    DELETE_ATTRIBUTE_SUCCESS,
    PUT_CHECK,
    GET_ALL_ATTRIBUTE_SUCCESS,
    CHANGE_ADD_ATTRIBUTE_ITEM,
} from './actionTypes'
import {deleteAttributeFetch, getAllAttributeFetch, postAttributeFetch, putAttributeFetch} from '../api/attributeApi'

export const postAttribute = attribute => {
    return (dispatch, getState) => {
        const editAttribute = getState().attributes.attributeItem
        attribute.attributeGroup = getState().attributeGroup.attributeGroupItems.find((el)=>{ return el.id === (+editAttribute.attributeGroup)})
        postAttributeFetch(attribute)
            .then(
                // data => {
                // dispatch({
                //     type: POST_ATTRIBUTE_SUCCESS,
                //     payload: data
                // }
                //)
                dispatch(getAllAttribute())
            )
        editAttribute.name = '' // Очистка поля после сохранения
    }
}

export const deleteAttribute = attribute => {
    return dispatch => {
        deleteAttributeFetch(attribute)
            .then(data  => {
                console.log('Предупреждение что не сипользуеться `data`', data)
                dispatch({
                    type: DELETE_ATTRIBUTE_SUCCESS,
                    payload: attribute
                })
            })
    }
}
export const putCheck = attribute => {
    return {
        type: PUT_CHECK,
        payload: attribute
    }
}

export const getAllAttribute = () => {
    return dispatch => {
        getAllAttributeFetch()
            .then(data => {
                dispatch({
                    type: GET_ALL_ATTRIBUTE_SUCCESS,
                    payload: Object.values(data)
                })
            })
    }
}

export const editAttribute = (attributeId) => (dispatch, getState) => {
    const currentAttribute = getState().attributes.allAttribute.find(item => item.id === attributeId)
    Object.keys(currentAttribute).forEach(key => dispatch(changeAddAttributeFields({[key]: currentAttribute[key]})))
}

export const changeAddAttributeFields = (field) => {
    return {
        type: CHANGE_ADD_ATTRIBUTE_ITEM,
        payload: field,
    }
}

export const saveEditAttribute = () => (dispatch, getState) => {
    const editAttribute = getState().attributes.attributeItem
    // console.log('attributeGroup', getState().attributeGroup.attributeGroupItems)
    // console.log('editAttribute', editAttribute.attributeGroup)
    putAttributeFetch(editAttribute).then(()=>{ dispatch(getAllAttribute())})
    editAttribute.name = '' // Очистка поля после сохранения
}

