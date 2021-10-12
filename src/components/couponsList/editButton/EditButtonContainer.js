import React from 'react'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { goToEditMode } from '../../../reducers/couponsSlice'

const EditButtonContainer = ({ id }) => {
    const dispatch = useDispatch()

    const changeViewModeHandler = () => {
        dispatch(goToEditMode('edit', id))
    }

    return <Button icon={'#edit'} onClick={changeViewModeHandler} />
}

export default EditButtonContainer
