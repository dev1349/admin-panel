import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    clearSelectedGoods,
    filteringGoods,
    getFilterValues,
    getGoodImageStatus,
    getGoods,
    getGoodStatus,
    getGoodTypes,
    setGoodsFilter,
} from '../../../reducers/goodsSlice'
import GoodsFilter from '../../organisms/forms/goodsFilter/GoodsFilter'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'

const GoodsFilterContainer = () => {
    const goodStatus = useSelector(getGoodStatus)
    const goodImageStatus = useSelector(getGoodImageStatus)
    const goodTypes = useSelector(getGoodTypes)
    const filter = useSelector(getFilterValues)
    const allGoods = useSelector(getGoods)

    const dispatch = useDispatch()
    const setGoodsFilterHandler = payload => {
        dispatch(setGoodsFilter(payload))
    }
    const filteringGoodsHandler = () => {
        dispatch(filteringGoods(allGoods, filter))
        dispatch(clearSelectedGoods())
    }

    return (
        <MaxWidthTemplate>
            <GoodsFilter
                goodStatus={goodStatus}
                goodImageStatus={goodImageStatus}
                goodTypes={goodTypes}
                filter={filter}
                setGoodsFilterHandler={setGoodsFilterHandler}
                filteringGoodsHandler={filteringGoodsHandler}
            />
        </MaxWidthTemplate>
    )
}

export default GoodsFilterContainer
