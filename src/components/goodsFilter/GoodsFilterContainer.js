import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GoodsFilter from './GoodsFilter'
import { setGoodsFilter, filteringGoods } from '../../reducers/goodsSlice'

const GoodsFilterContainer = () => {
    const dispatch = useDispatch()

    const goodStatus = useSelector(state =>
        Array.from(new Set(state.goods.allGoods.map(el => el.status)).values())
    )

    const goodImageStatus = useSelector(state =>
        Array.from(
            new Set(state.goods.allGoods.map(el => el.imageStatus)).values()
        )
    )

    const goodTypes = useSelector(state =>
        Array.from(
            new Set(state.goods.allGoods.map(el => el.goodType.name)).values()
        )
    )

    const filter = useSelector(state => state.goods.filter)

    const allGoods = useSelector(state => state.goods.allGoods)

    const setGoodsFilterHandler = (key, value) => {
        dispatch(
            setGoodsFilter({
                [key]: value,
            })
        )
    }

    const filteringGoodsHandler = () => {
        dispatch(filteringGoods(allGoods, filter))
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
