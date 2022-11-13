import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteGood, getAllGoodsFromServer, getGoodsFields, getHeaderCells } from '../../../reducers/goodsSlice'
import GoodsTable from '../../organisms/tables/goodsTable/GoodsTable'

const GoodsList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllGoodsFromServer())
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
        <>
            {allGoods && (
                <GoodsTable headerCells={headerCells} tableRows={allGoods} deleteGood={deleteHandler} changeGood={changeHandler} />
            )}
        </>
    )
}

export default GoodsList
