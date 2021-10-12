import React from 'react'
import AddEditGroup from './AddEditGroup'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeFieldsValue,
    getAddAttributeGroupFields,
    getAttributeGroupMode,
} from '../../../reducers/attributeGroupSlice'

const AddEditGroupContainer = () => {
    const addAttributeGroupFields = useSelector(getAddAttributeGroupFields)
    const attributeGroupMode = useSelector(getAttributeGroupMode)

    const dispatch = useDispatch()
    const changeGroupFields = field => {
        dispatch(changeFieldsValue(field))
    }

    return (
        <AddEditGroup
            addAttributeGroupFields={addAttributeGroupFields}
            attributeGroupMode={attributeGroupMode}
            changeAddAttributesGroupFields={changeGroupFields}
        />
    )
}

export default AddEditGroupContainer
