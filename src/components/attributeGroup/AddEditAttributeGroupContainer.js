import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeFieldsValue,
    getAddAttributeGroupFields,
} from '../../reducers/attributeGroupSlice'
import AddEditAttributeGroup from '../organisms/forms/addEditAttributeGroup/AddEditAttributeGroup'

const AddEditAttributeGroupContainer = () => {
    const addAttributeGroupFields = useSelector(getAddAttributeGroupFields)

    const dispatch = useDispatch()
    const changeGroupFieldsValue = field => {
        dispatch(changeFieldsValue(field))
    }

    const fields = [
        {
            id: 'addEditAttributeGroupLabel0',
            label: '*Название (rus)',
            name: 'name',
            value: addAttributeGroupFields.name,
            onChange: changeGroupFieldsValue,
        },
        {
            id: 'addEditAttributeGroupLabel1',
            label: 'Название (ua)',
            name: 'uaName',
            value: addAttributeGroupFields.uaName,
            onChange: changeGroupFieldsValue,
        },
        {
            id: 'addEditAttributeGroupLabel2',
            label: 'Порядок сортировки',
            name: 'sortOrder',
            pattern: '^[1-9]?$',
            value: addAttributeGroupFields.sortOrder,
            onChange: changeGroupFieldsValue,
        },
    ]

    return <AddEditAttributeGroup fields={fields} />
}

export default AddEditAttributeGroupContainer
