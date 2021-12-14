import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    deleteGood,
    getAllGoods,
    getGoodsFields,
    getHeaderCells,
} from '../../../reducers/goodsSlice'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import GoodsTable from '../../organisms/tables/goodsTable/GoodsTable'

const GoodsList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllGoods())
    }, [dispatch])
    const allGoods = useSelector(getGoodsFields)
    const headerCells = useSelector(getHeaderCells)
    const deleteHandler = good => {
        dispatch(deleteGood(good))
    }
    const changeHandler = good => {
        console.log('change ', good)
    }
    return (
        <MaxWidthTemplate>
            {allGoods && (
                <GoodsTable
                    headerCells={headerCells}
                    tableRows={allGoods}
                    deleteGood={deleteHandler}
                    changeGood={changeHandler}
                />
            )}
        </MaxWidthTemplate>
    )
}

export default GoodsList
