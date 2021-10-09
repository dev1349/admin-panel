import React from 'react'
import Buttons from './Buttons'
import {
    getViewMode,
    goToEditMode,
    goToListMode,
    saveCoupon,
} from '../../../../reducers/couponsSlice'
import {useDispatch, useSelector} from 'react-redux'


const ButtonsContainer = () => {
    const viewMode = useSelector(getViewMode)
    const dispatch = useDispatch()

    const setListModeHandler = () => {
        dispatch(goToListMode())
    }

    const setAddModeHandler = () => {
        dispatch(goToEditMode('add'))
    }

    const saveCouponHandler = () => {
        dispatch(saveCoupon())
    }

    return (
        <Buttons
            viewMode={viewMode}
            setListMode={setListModeHandler}
            setAddMode={setAddModeHandler}
            saveCoupon={saveCouponHandler}
        />
    )
}


export default ButtonsContainer