import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    clearSelectedGoods,
    filteringGoods,
    getFilterValues,
    getGoodImageStatus,
    getGoodStatus,
    getGoodTypes,
    setGoodsFilter,
} from '../../../reducers/goodsSlice'
import GoodsFilter from '../../organisms/forms/goodsFilter/GoodsFilter'

const GoodsFilterContainer = () => {
    const goodStatus = useSelector(getGoodStatus)
    const goodImageStatus = useSelector(getGoodImageStatus)
    const goodTypes = useSelector(getGoodTypes)
    const filter = useSelector(getFilterValues)

    const dispatch = useDispatch()
    const setGoodsFilterHandler = payload => {
        dispatch(setGoodsFilter(payload))
    }
    const filteringGoodsHandler = () => {
        dispatch(filteringGoods())
        dispatch(clearSelectedGoods())
    }

    return (
        <GoodsFilter
            goodStatus={goodStatus}
            goodImageStatus={goodImageStatus}
            goodTypes={goodTypes}
            filter={filter}
            setGoodsFilterHandler={setGoodsFilterHandler}
            filteringGoodsHandler={filteringGoodsHandler}
        />
    )
}

export default GoodsFilterContainer
