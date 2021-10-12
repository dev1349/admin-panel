import React from 'react'
import Modals from './Modals'
import { useDispatch, useSelector } from 'react-redux'
import {
    getFetchStatus,
    addedAttributeGroup,
    errorInGroupOperation,
    savedEditedAttributeGroup,
    deletedAttributeGroup,
} from '../../../reducers/attributeGroupSlice'

const ModalsContainer = () => {
    const fetchStatus = useSelector(getFetchStatus)

    const dispatch = useDispatch()
    const addedGroup = () => {
        dispatch(addedAttributeGroup())
    }
    const errorGroupOperation = () => {
        dispatch(errorInGroupOperation())
    }
    const savedEditedGroup = () => {
        dispatch(savedEditedAttributeGroup())
    }
    const deletedGroup = () => {
        dispatch(deletedAttributeGroup())
    }

    return (
        <Modals
            fetchStatus={fetchStatus}
            addedAttributeGroup={addedGroup}
            errorInGroupOperation={errorGroupOperation}
            savedEditedAttributeGroup={savedEditedGroup}
            deletedAttributeGroup={deletedGroup}
        />
    )
}

export default ModalsContainer
