import React from 'react'
import SortingButton from './SortingButton'
import { useDispatch, useSelector } from 'react-redux'
import { changeMyGoodsListSortingStatus } from '../../../reducers/goodsSlice'

const SortingButtonContainer = props => {
    const dispatch = useDispatch()

    const sortingStatus = useSelector(state => state.goods.sortingStatus)
    const allGoods = useSelector(state => state.goods.allGoods)

    const changeMyGoodsListSortingStatusHandler = nameOfField => {
        dispatch(
            changeMyGoodsListSortingStatus(nameOfField, allGoods, sortingStatus)
        )
    }

    return (
        <SortingButton
            title={props.title}
            name={props.name}
            sortingStatus={sortingStatus}
            changeMyGoodsListSortingStatus={
                changeMyGoodsListSortingStatusHandler
            }
        />
    )
}

export default SortingButtonContainer
