import React, {useEffect} from 'react'
import {GoodsList} from './GoodsList'
import {deleteGood, getAllGoods} from '../../reducers/goodsSlice'
import {useDispatch, useSelector} from "react-redux";


const GoodsListContainer = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllGoods())}
    )


    const allGoods = useSelector(state => state.goods.allGoods)

    const deleteHandler = (good) => {
        dispatch(deleteGood(good))
    }

    return (
        <div>
            {allGoods &&
            <GoodsList allGoods={allGoods}
                       deleteHandler={deleteHandler}/>}
        </div>
    )

}

export default GoodsListContainer