import React from 'react'
import SortingButton from './SortingButton'
import {getSortingStatus, sortingCoupons} from '../../../../reducers/couponsSlice'
import {useDispatch, useSelector} from 'react-redux'


const SortingButtonContainer = ({title, name}) => {
    const sortingStatus = useSelector(getSortingStatus(name))
    const dispatch = useDispatch()

    const changeSortingStatusHandler = () => {
        let newSortingStatus
        switch (sortingStatus) {
            case 'none':
                newSortingStatus = 'down'
                break
            case 'down':
                newSortingStatus = 'up'
                break
            case 'up':
                newSortingStatus = 'down'
                break
            default: newSortingStatus = 'none'
        }
        dispatch(sortingCoupons(name, newSortingStatus))
    }

    return (
        <SortingButton
            title={title}
            sortingStatus={sortingStatus}
            changeSortingStatus={changeSortingStatusHandler}
        />
    )
}


export default SortingButtonContainer