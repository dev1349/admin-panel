import React from 'react'
import CouponsList from './CouponsList'
import {getError, getViewMode, setError} from '../../reducers/couponsSlice'
import {useDispatch, useSelector} from 'react-redux'


const CouponsListContainer = () => {
    const viewMode = useSelector(getViewMode)
    const error = useSelector(getError)
    const dispatch = useDispatch()

    const closeErrorWindowHandler = () => {
        dispatch(setError(false))
    }

    return (
        <CouponsList
            viewMode={viewMode}
            error={error}
            closeErrorWindow={closeErrorWindowHandler}
        />
    )
}


export default CouponsListContainer