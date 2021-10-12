import React from 'react'
import Buttons from './Buttons'
import { useDispatch, useSelector } from 'react-redux'
import {
    getAttributeGroupMode,
    isButtonDisabled,
    isGroupDeletingListEmpty,
    removeSelectedAttributesGroup,
    saveGroup,
    switchMode,
} from '../../../reducers/attributeGroupSlice'

const ButtonsContainer = () => {
    const attributeGroupMode = useSelector(getAttributeGroupMode)
    const isButtonsDisabled = useSelector(isButtonDisabled)
    const isDeletingListEmpty = useSelector(isGroupDeletingListEmpty)

    const dispatch = useDispatch()
    const changeGroupMode = mode => {
        dispatch(switchMode(mode))
    }
    const removeSelectedGroup = () => {
        dispatch(removeSelectedAttributesGroup())
    }
    const saveAttributeGroup = () => {
        dispatch(saveGroup())
    }

    return (
        <Buttons
            attributeGroupMode={attributeGroupMode}
            isButtonDisabled={isButtonsDisabled}
            changeAttributeGroupMode={changeGroupMode}
            removeSelectedAttributesGroup={removeSelectedGroup}
            saveAttributeGroup={saveAttributeGroup}
            isDeletingListEmpty={isDeletingListEmpty}
        />
    )
}

export default ButtonsContainer
